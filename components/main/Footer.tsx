import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaDiscord, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export function Footer (){
  return (
    <div className="w-full relative h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-30 ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                {/* <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaYoutube />
                        <span className="text-[15px] ml-[6px]">Youtube</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxDiscordLogo />
                        <span className="text-[15px] ml-[6px]">Discord</span>    
                    </p>
                </div> */}
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <a href="https://github.com/empsloc" className="text-[15px] ml-[6px]">Github</a>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaDiscord />
                        <a href="https://discordapp.com/users/fewbe" className="text-[15px] ml-[6px]">Discord</a>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaLinkedin />
                        <a href="https://www.linkedin.com/in/atharva-bokade-249871226/" className="text-[15px] ml-[6px]">Linkedin</a>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">Contact me</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
                        <a href="https://github.com/empsloc" className="text-[15px] ml-[6px]">Visit my  Github</a>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">atharva0bokade@gmail.com</span>    
                    </p>
                </div>
            </div>

            <a href="https://github.com/empsloc" className="mb-[20px] flex items-center gap-2  justify-center text-[15px] text-center">
                <FaGithub size={15} color="white"/> empsloc
            </a>
        </div>
    </div>
  )
}

export default Footer