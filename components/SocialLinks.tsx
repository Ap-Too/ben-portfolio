import { Github, LinkedinIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { cn } from '@/lib/utils';

interface Props {
    className?:string;
}

const socialData=[
    {title:"Github", icon:<Github/>, href:"https://github.com/Ap-Too"},
    {title:"LinkedIn", icon:<LinkedinIcon/>, href:"https://www.linkedin.com/in/benjamin-allen-nc/"},
];

const SocialLinks = ({className}: Props) => {
  return (
    <TooltipProvider>
        <div>
            <div className='flex items-center md:items-end justify-center md:justify-end gap-3'>
                {socialData?.map((item)=>(
                    <Tooltip key={item?.title}>
                        <TooltipTrigger asChild>
                            <div className={cn('text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full bg-bodyColor hover:bg-lightSky/10 hover:border-lightSky hoverEffect',className)}>
                                <Link href={item?.href} target="_blank">
                                    <span className={cn(className)}>{item?.icon}</span>
                                </Link>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent className='bg-white text-black font-semibold'>
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
