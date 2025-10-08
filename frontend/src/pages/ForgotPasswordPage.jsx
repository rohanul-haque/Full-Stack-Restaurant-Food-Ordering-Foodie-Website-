import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AppContext } from "@/contexts/AppContext";
import axios from "axios";
import { ArrowLeft, Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState(new Array(6).fill("")); // 6-digit OTP
  const inputRefs = useRef([]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { backendUrl } = useContext(AppContext);
  const navigate = useNavigate();

  // OTP Handling
  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return; // only digits
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value && index < code.length - 1) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0)
      inputRefs.current[index - 1]?.focus();
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, 6); // 6-digit limit
    if (!/^\d+$/.test(pasteData)) return;
    const newCode = new Array(6).fill("");
    for (let i = 0; i < pasteData.length; i++) newCode[i] = pasteData[i];
    setCode(newCode);
    inputRefs.current[Math.min(pasteData.length, 5)]?.focus();
  };

  useEffect(() => {
    if (step === 2) inputRefs.current[0]?.focus();
  }, [step]);

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  // API Calls
  const sendCode = async () => {
    if (!email.trim()) return toast.error("Please enter your email");
    setLoading(true);
    try {
      const { data } = await axios.post(`${backendUrl}/user/reset-otp`, {
        email: email.trim(),
      });
      if (data.success) {
        toast.success(data.message);
        setStep(2);
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to send code");
    } finally {
      setLoading(false);
    }
  };

  const verifyCode = async () => {
    if (code.join("").length !== 6) {
      return toast.error("Please enter the 6-digit code");
    }
    setLoading(true);
    try {
      const { data } = await axios.post(`${backendUrl}/user/verify-otp`, {
        email: email.trim(),
        otp: Number(code.join("")),
      });
      if (data.success) {
        setStep(3);
        toast.success(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to verify code");
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      return toast.error("Please fill all fields");
    }
    if (newPassword !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    setLoading(true);
    try {
      const { data } = await axios.post(`${backendUrl}/user/change-password`, {
        email: email.trim(),
        otp: Number(code.join("")),
        newPassword,
      });

      if (data.success) {
        toast.success("Password reset successful! Please login.");
        setStep(1);
        setEmail("");
        setCode(new Array(6).fill(""));
        setNewPassword("");
        setConfirmPassword("");
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="">
      <form
        onSubmit={resetPassword}
        className="w-md mx-auto space-y-6 p-8 rounded-xl border border-gray-300 dark:border-gray-700 backdrop-blur-md bg-white/90 dark:bg-black/70 shadow-md"
      >
        {/* Back Link */}
        {step > 1 && (
          <div
            className="flex items-center cursor-pointer text-blue-600 dark:text-blue-400 hover:underline mb-4"
            onClick={handleBack}
          >
            <ArrowLeft size={16} className="mr-1" /> Back
          </div>
        )}

        {/* Step 1: Email */}
        {step === 1 && (
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-center">
              Reset Password
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              Enter your email to receive a verification code
            </p>
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="pl-10 py-3"
                required
              />
            </div>
            <Button
              type="button"
              className="w-full flex items-center justify-center gap-2"
              onClick={sendCode}
              disabled={loading}
            >
              {loading && <Loader2 className="animate-spin" size={18} />}
              {loading ? "Sending..." : "Send Verification Code"}
            </Button>
          </div>
        )}

        {/* Step 2: OTP Verification */}
        {step === 2 && (
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-center">
              📩 Verify Code
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              Enter the 6-digit code sent to your email
            </p>
            <div
              className="flex justify-center gap-3 mt-4 mb-2"
              onPaste={handlePaste}
            >
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  placeholder="•"
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-12 h-14 text-center text-xl font-semibold rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm">
              Didn't receive a code?{" "}
              <button
                type="button"
                onClick={sendCode}
                className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
              >
                Resend code
              </button>
            </p>
            <Button
              type="button"
              className="w-full flex items-center justify-center gap-2 mt-2"
              onClick={verifyCode}
              disabled={loading}
            >
              {loading && <Loader2 className="animate-spin" size={18} />}
              {loading ? "Verifying..." : "Verify & Continue"}
            </Button>
          </div>
        )}

        {/* Step 3: New Password */}
        {step === 3 && (
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-center">
              🔒 Create New Password
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
              Choose a strong password for your account
            </p>

            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <Input
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className="pl-10 py-3"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <Input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter new password"
                className="pl-10 py-3"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <Button
              type="submit"
              className="w-full flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading && <Loader2 className="animate-spin" size={18} />}
              {loading ? "Resetting..." : "Reset Password"}
            </Button>
          </div>
        )}
      </form>
    </section>
  );
};

export default ForgotPasswordPage;
