import { Github, LinkedinIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

const socialData=[
    {title:"Github", icon:<Github/>, href:"https://github.com/Ap-Too"},
    {title:"LinkedIn", icon:<LinkedinIcon/>, href:"https://www.linkedin.com/in/benjamin-allen-nc/"},
];

const SocialLinks = () => {
  return (
    <TooltipProvider>
        <div>
            <div className='flex items-center justify-center gap-3'>
                {socialData?.map((item)=>(
                    <Tooltip key={item?.title}>
                        <TooltipTrigger asChild>
                            <div className='text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/10 hover:border-lightSky hoverEffect'>
                                <Link href={item?.href} target="_blank">
                                    <span>{item?.icon}</span>
                                </Link>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent className='bg-hoverColor text-black font-semibold'>
                            {item?.title}
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
        </div>
        
    </TooltipProvider>
  )
}

export default SocialLinks