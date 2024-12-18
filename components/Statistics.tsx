"use client";
import { statsData } from '@/constants'
import React from 'react'
import CountUp from 'react-countup';

const Statistics = () => {
  return (
    <div className='flex flex-row items-center gap-2.5 md:gap-5'>
      {statsData?.map((item,index)=> (
        <div key={index} className='flex flex-1 gap-2 md:gap-4 flex-col md:flex-row items-center justify-center lg:justify-start'>
            <CountUp end={item?.num} duration={5} delay={0.4} className='text-4xl lG:text-6xl font-extrabold text-white'/>
            {/* <p className='text-4xl lG:text-6xl font-extrabold text-white'>{item?.num}</p> */}
            <p className='leading-snug text-sm'>{item?.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Statistics
