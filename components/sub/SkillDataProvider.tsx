"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
interface Props{
    src:string,
    width:number,
    height:number,
    index:number
}
function SkillDataProvider({src, width,height,index}:Props) {
    const{ref,inView} = useInView({
        triggerOnce:true
    })
    const imageVarients = {
        hidden:{opacity:0},
        visible:{opacity:1}
    }
    const animationDelay=0.3
  return (
   <motion.div
   ref={ref} initial="hidden" variants={imageVarients} animate={inView?"visible":"hidden"} custom={index} transition={{delay:index*animationDelay}}>
    <Image src={src} width={width} height={height} alt='skill image'/>
   </motion.div>
  )
}

export default SkillDataProvider