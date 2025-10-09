import { motion } from "framer-motion";

import { about_data, assets } from "@/assets/assets";
import { SlideUp } from "@/hooks/Animation";

const About = () => {
  return (
    <section id="about-us" className="mt-20 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ stiffness: 100, delay: 0.1 }}
            src={assets.about_image}
            alt="About us"
            className="w-full h-[430px] rounded-2xl object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <motion.h1
            variants={SlideUp(0.1)}
            initial="hidden"
            whileInView="visible"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Why People <span className="text-orange-600">Choose Us?</span>
          </motion.h1>

          <div className="space-y-6">
            {about_data.map((about, index) => (
              <motion.div
                variants={SlideUp(about.delay)}
                initial="hidden"
                whileInView="visible"
                key={index}
                className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl shadow hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-orange-100 rounded-full">
                  <img src={about.icon} alt={about.title} className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {about.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {about.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
