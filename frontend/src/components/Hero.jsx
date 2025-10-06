import { assets } from "@/assets/assets";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section id="home" className="mt-15">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Desire{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-800 bg-clip-text text-transparent inline-flex items-center">
              Food
              <span
                role="img"
                aria-label="plate and cutlery"
                className="ml-2 text-2xl"
              >
                🍽️
              </span>
            </span>{" "}
            for Your Taste
          </h1>

          <p className="text-gray-700 text-sm md:text-base">
            🍽️ Food is what we eat to stay alive and stay healthy 🏃‍♂️💪. It comes
            in many different forms and flavors 😋, from 🍎 fruits and 🥦
            vegetables to 🍗 meats and 🌾 grains.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="destructive">
              <a href="#foods">Order Now</a>
            </Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>

        {/* Right Image with Orange BG */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="bg-[#FF9E0C] rounded-2xl w-72 h-60 md:w-96 md:h-80 flex items-center justify-center relative">
            <img
              src={assets.hero_image}
              alt="Delicious food"
              className="w-60 md:w-80 object-cover absolute bottom-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
