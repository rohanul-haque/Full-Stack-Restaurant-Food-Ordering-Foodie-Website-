import { Input } from "@/components/ui/input";
import { AppContext } from "@/contexts/AppContext";
import axios from "axios";
import { Eye, EyeOff, Loader2, Lock, Mail, User } from "lucide-react";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const FloatingLabelInput = ({
  id,
  type,
  value,
  onChange,
  placeholder,
  icon,
  rightIcon,
  onRightIconClick,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative group">
      {/* Left Icon */}
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground transition-colors group-focus-within:text-foreground">
        {icon}
      </div>

      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="flex h-10 w-full rounded-md border border-input bg-background pl-10 pr-10 py-2 text-sm ring-offset-background 
        file:border-0 file:bg-transparent file:text-sm file:font-medium 
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
        disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 peer placeholder-transparent"
        placeholder={placeholder}
      />

      {/* Floating Label */}
      <label
        htmlFor={id}
        className={`absolute left-10 transition-all duration-200 pointer-events-none text-sm font-medium ${
          isFocused || value
            ? "-top-2 text-xs bg-background px-2 text-foreground rounded-sm"
            : "top-2.5 text-muted-foreground"
        }`}
      >
        {placeholder}
      </label>

      {/* Right Icon */}
      {rightIcon && (
        <button
          type="button"
          onClick={onRightIconClick}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:text-foreground"
        >
          {rightIcon}
        </button>
      )}
    </div>
  );
};

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const { backendUrl, fetchUserData } = useContext(AppContext);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const userSignupHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", fullName);
      formData.append("email", email);
      formData.append("password", password);
      if (file) formData.append("image", file);

      const { data } = await axios.post(
        `${backendUrl}/user/register`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (data.success) {
        toast.success(data.message);
        localStorage.setItem("token", data.token);
        fetchUserData();
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center p-6">
      <div className="w-full max-w-sm relative">
        <div className="relative bg-white dark:bg-black border border-border rounded-lg p-6 shadow-sm transition-all duration-200 hover:shadow-md">
          {/* Header */}
          <div className="flex flex-col space-y-2 text-center mb-6">
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your details below to create your account
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={userSignupHandler}>
            {/* File Upload */}
            <div>
              <Input
                id="file"
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                className="mt-1"
              />
            </div>

            {/* Full Name */}
            <FloatingLabelInput
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              icon={<User size={16} />}
            />

            {/* Email */}
            <FloatingLabelInput
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              icon={<Mail size={16} />}
            />

            {/* Password */}
            <FloatingLabelInput
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              icon={<Lock size={16} />}
              rightIcon={
                showPassword ? <EyeOff size={16} /> : <Eye size={16} />
              }
              onRightIconClick={togglePasswordVisibility}
            />

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium 
              ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
              disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Login link */}
          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="underline underline-offset-4 hover:text-primary transition-colors"
              >
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
