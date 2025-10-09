"use client";

import { assets, nav_links } from "@/assets/assets";
import { FooterSlideUp, SlideUp } from "@/hooks/Animation";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  YoutubeIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  const socialIcons = [
    { icon: Facebook, label: "Facebook" },
    { icon: Instagram, label: "Instagram" },
    { icon: Twitter, label: "Twitter" },
    { icon: YoutubeIcon, label: "YouTube" },
    { icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="pt-12 px-6 sm:px-12 lg:px-20 relative overflow-hidden bg-gray-900 text-white rounded-t-2xl mt-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        {/* Logo */}
        <motion.img
          variants={SlideUp(0.2)}
          initial="hidden"
          whileInView="visible"
          src={assets.logo}
          alt="Company Logo"
          className="h-12 w-auto mb-6 shadow"
        />

        {/* Navigation Links */}
        <motion.nav
          variants={SlideUp(0.35)}
          initial="hidden"
          whileInView="visible"
          className="mb-6 w-full"
        >
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-base font-medium">
            {nav_links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path || "#"}
                  className="relative hover:text-orange-300 transition-colors font-light text-[15px]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Social Icons */}
        <motion.div
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="visible"
          className="my-6 flex flex-wrap justify-center gap-4"
        >
          {socialIcons.map(({ icon: Icon, label }, idx) => (
            <span
              key={idx}
              aria-label={label}
              className="p-2 rounded-md bg-white/20 hover:bg-white/40 transition-colors duration-300 cursor-pointer"
            >
              <Icon size={20} className="text-white" />
            </span>
          ))}
        </motion.div>

        {/* Footer Text */}
        <motion.div
         variants={FooterSlideUp(0.7)}
          initial="hidden"
          whileInView="visible"
          className="border-t  border-white/30 w-full mt-6 py-6"
        >
          <p className="text-center text-white/80">
            &copy; {new Date().getFullYear()} All rights reserved by{" "}
            <b>❤️ Foodie Restaurant ❤️</b>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
