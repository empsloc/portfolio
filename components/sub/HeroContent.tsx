"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
function HeroContent() {
  return (
    
    <motion.div
    initial="hidden"
    animate="visible"
    className='flex flex-row items-center justify-between px-20 mt-40 w-full z-[20]'
    ><div className='w-full h-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div
        variants={slideInFromTop}
        className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]' 
        >
            <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
            <h1 className='Welcome-text text-[13px]'>Fullstack Developer</h1>

        </motion.div>
        <motion.div variants={slideInFromLeft(0.5)}
            className='flex flex-col gap-6 mt-6 text-6xl font-bold max-w-[600px] text-white w-auto h-auto'
        >
            <span >
                Atharva Bokade
            Providing
            <span className='text-transparent bg-clip-text  bg-gradient-to-r from-purple-500 to-cyan-500'> the best </span>
            Project experience
            </span>

        </motion.div>
        <motion.p variants={slideInFromLeft(0.8)} className='text-lg text-gray-400 my-5 max-w-[600px]'>
                    I am a Full stack Developer with experience in web, mobile and software development. Check out my projects and skills
        </motion.p>
        <motion.a href='https://github.com/empsloc'  variants={slideInFromLeft(1)} className='py-2 button-primary text-center  text-white cursor-pointer rounded-lg max-w-[200px]'>
                Learn more!
        </motion.a>

    </div>
    <motion.div variants={slideInFromRight(0.8)}
    className='w-full h-full flex justify-center-center items-center'
    >
        <Image src="/mainIconsdark.svg" alt='work icons' height={650} width={650}/>


    </motion.div>

    </motion.div>
  )
}

export default HeroContent