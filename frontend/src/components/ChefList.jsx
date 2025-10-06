import { chef_list } from "@/assets/assets";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { Facebook, Instagram, Twitter } from "lucide-react";
import SectionTitle from "./SectionTitle";

const ChefList = () => {
  return (
    <section className="mt-20 lg:px-12">
      <SectionTitle
        title={"👨‍🍳 Meet Our Amazing Chefs 🍴"}
        description={`      🌟 Discover the talented chefs 👨‍🍳👩‍🍳 who bring passion ❤️, creativity
          🎨, and experience 🏅 to our kitchen every day 🍲🔥. Join us and taste
          the magic ✨!`}
      />

      <Carousel
        className="w-full mt-10"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {chef_list?.map((chef) => (
            <CarouselItem
              key={chef.id}
              className="pl-6 md:basis-1/2 lg:basis-1/3"
            >
              <div className="flex flex-col items-center p-6 rounded-2xl text-center border border-gray-200 shadow-xs">
                <img
                  className="w-28 h-28 object-cover rounded-full border-4 border-orange-500 mb-4"
                  src={chef.image}
                  alt={chef.name}
                />
                <h2 className="text-lg font-semibold uppercase">{chef.name}</h2>
                <span className="text-gray-500 mb-4">{chef.position}</span>

                {/* Social Icons */}
                <div className="flex items-center gap-3 mt-2">
                  <a
                    target="_blank"
                    href={chef.facebook || "#"}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    target="_blank"
                    href={chef.twitter || "#"}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-400 text-white hover:bg-sky-500 transition"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    target="_blank"
                    href={chef.instagram || "#"}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={"hidden lg:flex"} />
        <CarouselNext className={"hidden lg:flex"} />
      </Carousel>
    </section>
  );
};

export default ChefList;
