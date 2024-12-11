"use client";
import React from 'react'
import { motion } from "motion/react"

const Photo = () => {
  const circleColors = ["#0056B375", "#0056B3", "#4D99FF", "#3399FF", "#3399CC", "#66BFFF", "#B3D8FF", "#FFFFFF" ];
  const circleVariants = {
    initial:{
      strokeDasharray: "24 10 0 0",
      rotate: 0,
      opacity: 0,
    },
    animate:(index:number)=>({
      strokeDasharray: ["15 120 25 25", "4 250 22 22", "16 25 92 72", "8 100 50 70", "16 150 40 60",],
      rotate: [0, 720],
      opacity: 1,
      transition:{
        strokeDasharray: {
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        },
        rotate: {
          duration: 60,
          repeat: Infinity,
          repeatType: "reverse"
        },
        opacity: {
          duration: 0.4,
          delay: 0.5 + (index/5) + 0.2,
          ease: "easeIn"
        }
      }
    })
  }
  return (
    <div className='w-full h-full relative flex items-center justify-center'>
      <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:0.3, duration: 0.4, ease: "easeIn"}}} className='relative'>
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{delay:0.5, duration:0.4, ease:"easeInOut"}}} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
          <div className='w-[250px] h-[250px] lg:w-[500px] lg:h-[520px] mix-blend-lighten overflow-hidden rounded-full'>
            <div className='flex flex-col items-center justify-center w-full h-full'> 
              <h1 className="text-lightSky text-5xl md:text-5xl tracking-normal ">Ben Allen</h1>
              <h2 className="text-2xl mb-2 lg:text-3xl text-white">Software Developer</h2>
            </div>
          </div>
        </motion.div>
        <svg className='w-[500px] lg:w-[625px] h-[500px] lg:h-[625px] mb-8 md:mb-0' viewBox='0 0 506 506' fill="none" xmlns='http"//www.w3.org/2000/svg'>
          {circleColors?.map((color,index)=>(
            <motion.circle 
                key={index} 
                cx='253' 
                cy='253' 
                r={240 - index * 15} 
                stroke={color} 
                strokeWidth={4} 
                strokeLinecap='round' 
                strokeLinejoin='round' 
                variants={circleVariants} 
                initial="initial" 
                animate="animate" 
                custom={index} />
          ))}
        </svg>
      </motion.div>
    </div>
  )
}

export default Photo