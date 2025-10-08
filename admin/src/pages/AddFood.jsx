import { food_menu } from "@/assets/assets";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { AppContext } from "@/contexts/AppContext";
import axios from "axios";
import { LoaderCircle } from "lucide-react";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

const AddFood = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const [loading, setLoading] = useState(false);

  const { backendUrl } = useContext(AppContext);

  const addFoodHandler = async (e) => {
    e.preventDefault();
    if (!name || !description || !image || !category || !price) {
      return toast.error("All fields are required");
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("image", image);
      formData.append("price", price);
      formData.append("category", category);

      const { data } = await axios.post(`${backendUrl}/food/add`, formData);

      if (data.success) {
        toast.success(data.message);
        setName("");
        setDescription("");
        setImage(null);
        setPrice("");
        setCategory("");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-screen">
      <div className="hidden lg:block lg:w-1/6 border-r bg-white">
        <Sidebar />
      </div>

      <div className="flex-1 pt-3 lg:mt-1 lg:pl-3 lg:p-4">
        <form onSubmit={addFoodHandler} className="max-w-2xl space-y-6">
          <div className="grid gap-2">
            <Label htmlFor="image">Image</Label>
            <Input
              id="image"
              type="file"
              className="cursor-pointer"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Enter food name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Write short description..."
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="grid gap-2">
              <Label>Product Category</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {food_menu.map((menu) => (
                    <SelectItem key={menu.id} value={menu.name}>
                      {menu.icon} {menu.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>

          {/* Submit */}
          <Button disabled={loading} type="submit" className="w-full md:w-auto">
            {loading ? (
              <span className="flex items-center gap-2">
                <LoaderCircle className="animate-spin" /> Adding..
              </span>
            ) : (
              "Add Food"
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default AddFood;
