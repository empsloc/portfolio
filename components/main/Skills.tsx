import { Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data } from '@/constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

function Skills() {
  return (
    <section style={{transform:"scale(0.9)"}} id='skills' className='flex pb-[900px] flex-col items-center justify-center gap-3 h-full relative  '>
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-auto object-cover -z-10 opacity-50"
        preload="auto"
        playsInline
        loop
        muted
        autoPlay
        src="/cards-video.webm"
      />
        <SkillText/>
        <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
    {Skill_data.map((image,index)=>(
        <SkillDataProvider key={index} index={index} src={image.Image} width={image.width} height={image.height} />
    ))}
</div>
<div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
    {Frontend_skill.map((image,index)=>(
        <SkillDataProvider key={index} index={index} src={image.Image} width={image.width} height={image.height} />
    ))}
</div>
<div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
    {Backend_skill.map((image,index)=>(
        <SkillDataProvider key={index} index={index} src={image.Image} width={image.width} height={image.height} />
    ))}
</div>
<div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
    {Full_stack.map((image,index)=>(
        <SkillDataProvider key={index} index={index} src={image.Image} width={image.width} height={image.height} />
    ))}
</div>
<div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
    {Other_skill.map((image,index)=>(
        <SkillDataProvider key={index} index={index} src={image.Image} width={image.width} height={image.height} />
    ))}

</div>

    </section>
  )
}

export default Skills