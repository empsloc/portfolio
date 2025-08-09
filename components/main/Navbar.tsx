import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-6 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        {/* Logo */}
        <Link href="/" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50}
            height={50}
            className="cursor-pointer hover:animate-slowspin sm:w-[60px] sm:h-[60px] md:w-[70px] md:h-[70px]"
          />
          <div className="font-bold ml-[10px] hidden md:block text-gray-300 text-sm sm:text-base md:text-lg">
            empsloc
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden sm:flex w-auto md:w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[10px] sm:mr-[15px] px-[10px] sm:px-[15px] md:px-[20px] py-[6px] sm:py-[8px] md:py-[10px] rounded-full text-gray-200 text-sm sm:text-base">
            <Link href="/terminal">Terminal</Link>
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row gap-3 sm:gap-4 md:gap-5">
          <a className="cursor-pointer" href="https://github.com/empsloc">
            <FaGithub
              color="white"
              size={20}
              className="sm:size-[22px] md:size-[25px]"
            />
          </a>
          <a
            className="cursor-pointer"
            href="https://discordapp.com/users/fewbe"
          >
            <FaDiscord
              color="white"
              size={20}
              className="sm:size-[22px] md:size-[25px]"
            />
          </a>
          <a
            className="cursor-pointer"
            href="https://www.linkedin.com/in/atharva-bokade-249871226/"
          >
            <FaLinkedin
              color="white"
              size={20}
              className="sm:size-[22px] md:size-[25px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

