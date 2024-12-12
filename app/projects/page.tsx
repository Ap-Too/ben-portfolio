"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React, { useState } from 'react'
import PageLayout from '@/components/PageLayout'
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { projects } from '@/constants';
import SocialLinks from '@/components/SocialLinks';


const ProjectPage = () => {
  const [currentIndex, setCurrentIndex]=useState(0)
  const handleSlideChange=(index:number)=>{
    setCurrentIndex(index)
  }
  return (
    <div className='py-6 md:py-12'>
      <PageLayout>
        <Carousel opts={{align:'start', loop: true}}
                  className="w-full" onSelect={()=>{
                    const index = 0;
                    if (typeof index === 'number'){
                      handleSlideChange(index);
                    }
                  }}>
          <CarouselContent>
            {
              projects?.map((project)=>(
                <CarouselItem key={project.id}>
                  <Card className='bg-bodyColor border-lightSky/20 border-x-8 border-y-4'>
                    <CardContent className='p-6'>
                      <div className='flex flex-col md:flex-row md:items-center md:space-x-8 group'>
                        {/* description */}
                        <div className='w-full md:w-1/2 order-2 md:order-1 mb-8 md:mb-0'>
                          <div className='space-y-3 md:space-y-6 mt-4 md:mt-0 md:mb-auto'>
                            <h2 className='text-4xl md:text-8xl leading-none font-extrabold text-white'>
                              {project?.id}
                            </h2>
                            <h3 className='text-xl md:text-3xl font-bold leading-none text-white/80 group-hover:text-lightSky hoverEffect'>
                              {project?.title} 
                            </h3>
                            <span className='text-normal md:text-xl font-semibold leading-none text-white/60'>
                              {project?.category} project
                            </span>
                            <p className='text-white/60 text-sm md:text-base leading-6 md:leading-normal '>
                              {project?.description}
                            </p>
                          </div>
                          <Separator className='bg-white/20' />
                        </div>
                        {/* image */}
                        <div className='w-full md:w-1/2 order-1 md:order-2'>
                          <div className='relative h-64 md:h-96 bg-gray-700 rounded-lg overflow-hidden'>
                            <Image src={project?.image} alt={project.title} fill className='object-cover'/>
                          </div>
                        </div>
                      </div>
                      <div className='flex flex-col md:flex-row'>
                        <TooltipProvider >
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button className='bg-lightSky/5 text-white/80 border border-lightSky/20 hover:border-lightSky hover:text-hoverColor hoverEffect mr-auto mt-4 md:mt-7 order-2 md:order-1'>
                                <Link href={project?.detailURL} >
                                  <ArrowUpRight />{" "} <span className='sr-only'>Details</span>
                                </Link>
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent className='bg-white text-black font-semibold'>
                              <p>{project?.tip}</p>
                            </TooltipContent>
                          </Tooltip>
                          {/* <Tooltip>
                            <TooltipTrigger asChild>
                              <Button className='bg-lightSky/5 text-white/80 border border-lightSky/20 hover:border-lightSky hover:text-hoverColor hoverEffect mr-auto mt-4 md:mt-7 order-2 md:order-1'>
                                <Link href={project?.detailURL} >
                                  <ArrowUpRight />{" "} <span className='sr-only'>Details</span>
                                </Link>
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent className='bg-white text-black font-semibold'>
                              <p>View Details Page</p>
                            </TooltipContent>
                          </Tooltip> */}
                        </TooltipProvider>
                        <div className='grid-flow-row md:flex flex-row gap-2 items-center justify-end  md:mt-7 overflow-clip md:order-2'>
                          {project?.stack?.map((item,index)=>(
                            <Badge key={index} 
                                className='bg-hoverColor/30 text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/10 hover:border-lightSky hoverEffect min-w-[100px] justify-center items-center m-1'>
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))
            }
          </CarouselContent>
          <div className='absolute -bottom-8 right-1/2'>
            <CarouselPrevious className='rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect'/>
            <CarouselNext className='rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect' />
          </div>
        </Carousel>
        <div className="sticky bottom-0 hidden md:block mt-6">
          <SocialLinks/>
        </div>
      </PageLayout>
    </div>
  )
}

export default ProjectPage