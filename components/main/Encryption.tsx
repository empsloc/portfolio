"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Encryption() {
  return (
    <div className="relative flex flex-col lg:flex-row items-center mt-52 justify-center w-full px-4 py-12 md:py-16 lg:py-20">
      {/* Main Heading */}
      <div className="absolute top-4 lg:top-6 z-[5] px-2">
        <motion.div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-center text-gray-200 leading-tight max-w-[90%] mx-auto">
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Commitment
        </motion.div>
      </div>

      {/* Lock Section */}
      <div className="flex flex-col items-center justify-between -translate-y-6 lg:-translate-y-10 absolute z-[20]">
        <div className="flex flex-col items-center group cursor-pointer">
          <Image
            src="/LockTop.png"
            alt="lock top"
            width={35}
            height={35}
            className="sm:w-[40px] sm:h-[40px] translate-y-2 sm:translate-y-3 transition-all duration-200 group-hover:translate-y-6"
          />
          <Image
            src="/LockMain.png"
            alt="lock main"
            width={50}
            height={50}
            className="sm:w-[60px] sm:h-[60px] z-10"
          />
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
          className="w-full h-auto max-h-[300px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[420px] object-cover"
          src="/encryption.webm"
        />
      </div>
    </div>
  );
}

export default Encryption;
