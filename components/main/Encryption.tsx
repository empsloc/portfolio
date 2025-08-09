"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Encryption() {
  return (
    <div className="flex flex-col lg:flex-row relative items-center justify-center w-full h-full px-4">
      {/* Main Heading */}
      <div className="absolute top-4 lg:top-0 z-[5] px-2">
        <motion.div className="text-3xl sm:text-4xl md:text-5xl lg:text-[80px] font-medium text-center text-gray-200 leading-tight">
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Commitment
        </motion.div>
      </div>

      {/* Lock Section */}
      <div className="flex flex-col items-center justify-between -translate-y-8 lg:-translate-y-[50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/LockTop.png"
            alt="lock top"
            width={40}
            height={40}
            className="sm:w-[50px] sm:h-[50px] translate-y-3 sm:translate-y-5 transition-all duration-200 group-hover:translate-y-8"
          />
          <Image
            src="/LockMain.png"
            alt="lock main"
            width={55}
            height={55}
            className="sm:w-[70px] sm:h-[70px] z-10"
          />
        </div>

        {/* Optional Subtext */}
        <div className="absolute z-[20] bottom-[10px] px-[10px]">
          <div className="cursive text-xs sm:text-sm md:text-base lg:text-lg font-medium text-center text-gray-300">
            {/* Secure your data with end-to-end encryption */}
          </div>
        </div>
      </div>

      {/* Background Video */}
      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm"
        />
      </div>
    </div>
  );
}

export default Encryption;

