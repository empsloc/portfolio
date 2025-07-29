"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
function Encryption() {
  return (
    <div className='flex flex-row relative items-center justify-center w-full h-full'>
        <div className='absolute w-auto h-auto top-0 z-[5]'>
            <motion.div className='text-[80px] font-medium text-center text-gray-200'>
            Performance
            <span className='text-transparent bg-clip-text  bg-gradient-to-r from-purple-500 to-cyan-500'>
            {" "}&{" "}
            </span>
            Commitment
            </motion.div>
        </div>
        <div className='flex flex-col items-center justify-between translate-y-[-50px] absolute z-[20] w-auto h-auto'>
                    <div className='flex flex-col items-center group cursor-pointer w-auto h-auto'>
                        <Image src="/LockTop.png" alt='lock top ' width={50} height={50} className='translate-y-5 transition-all duration-200 group-hover:translate-y-11'/>
                        <Image src="/LockMain.png" alt='lock main ' width={70} height={70} className='z-10'/>
                        {/* <div className='Welcome-box px-[15px] py-[4xp] z-[20] border my-[20px] border-[#7042f88b] opacity-[0.9]'><h2 className='welcome-text text-[12px]'>Encryption</h2>           </div> */}
                    </div> 
                    <div className='absolute z-[20] bottom-[10px] px-[10px]'>
                    <div className='cursive text-[20px] font-medium text-center text-gray-300'>
                        {/* Secure your data with end-to-end encryption */}
                    </div>
                    </div>
        </div>
        <div className='w-full flex items-start justify-center absolute'>
            <video loop muted autoPlay playsInline preload='false' className='w-full h-auto' src="/encryption.webm"/>
        </div>
        
    </div>
  )
}

export default Encryption