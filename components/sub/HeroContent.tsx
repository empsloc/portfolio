"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

function HeroContent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-16 lg:px-20 mt-20 sm:mt-28 lg:mt-40 w-full z-[20] gap-10"
    >
      {/* Left Section */}
      <div className="w-full h-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* Welcome Box */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[6px] px-[6px] sm:py-[8px] sm:px-[8px] border border-[#7042f88b] opacity-[0.9] flex items-center gap-2"
        >
          <SparklesIcon className="text-[#b49bff] h-4 w-4 sm:h-5 sm:w-5" />
          <h1 className=" text-gray-300 text-[11px] sm:text-[13px] md:text-sm">
            Fullstack Developer
          </h1>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 sm:gap-6 mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-[600px] text-white w-auto h-auto leading-snug"
        >
          <span>
            Atharva Bokade Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            Project experience
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm sm:text-base md:text-lg text-gray-400 my-4 sm:my-5 max-w-[600px] leading-relaxed"
        >
          I am a Full stack Developer with experience in web, mobile and
          software development. Check out my projects and skills.
        </motion.p>

        {/* Button */}
        <motion.a
          href="https://github.com/empsloc"
          variants={slideInFromLeft(1)}
          className="py-2 px-4 sm:px-5 button-primary text-center text-sm sm:text-base text-white cursor-pointer rounded-lg max-w-[160px] sm:max-w-[200px]"
        >
          Learn more!
        </motion.a>
      </div>

      {/* Right Section - Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="hidden w-full h-full md:flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={450}
          width={450}
          className="w-[250px] sm:w-[350px] md:w-[500px] lg:w-[650px] h-auto"
        />
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;
