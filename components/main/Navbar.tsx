
import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link
          href="/"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <div className="font-bold ml-[10px] hidden md:block text-gray-300">
            empsloc
          </div>
        </Link>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
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

        <div className="flex flex-row gap-5">
          {/* {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))} */}
          <a className="cursor-pointer" href="https://github.com/empsloc"><FaGithub color="white" size={25}/></a>
          <a className="cursor-pointer" href="https://discordapp.com/users/fewbe"> <FaDiscord color="white" size={25}/></a>
          <a className="cursor-pointer" href="https://www.linkedin.com/in/atharva-bokade-249871226/"><FaLinkedin color="white" size={25}/></a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;