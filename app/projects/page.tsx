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


const ProjectPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currentIndex, setCurrentIndex]=useState(0)
  const handleSlideChange=(index:number)=>{
    setCurrentIndex(index)
  }
  return (
    <div className='py-4'>
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
                            <h3 className='text-xl md:text-3xl font-bold leading-none text-white/80 group-hover:text-lightSky hoverEffect'>
                              {project?.title} 
                            </h3>
                            <span className='text-normal md:text-xl font-semibold leading-none text-white/60'>
                              {project?.category} project
                            </span>
                            <div className='grid-flow-row md:flex flex-row items-center justify-start  md:mt-7 md:order-2'>
                              {project?.stack?.map((item,index)=>(
                                <Badge key={index} 
                                    className='text-white/80 text-md rounded-md min-w-[80px] justify-center items-start'>
                                  {item}
                                </Badge>
                              ))}
                            </div>
                            <p className='text-white/60 text-sm md:text-base leading-6 md:leading-normal ml-4'>
                              {project?.description}
                            </p>
                            <h4 className='text-2xl font-medium my-4 text-white'>Challenges</h4>
                            <dl className='ml-4'>
                              {project?.challenges?.map((item,index)=>(
                                <div key={index}>
                                  <dt className='text-white/80'>
                                    {item.title}
                                  </dt>
                                  <dd className='text-muted-foreground ml-2 mt-2'>{item?.details?.map((detail, i)=>(
                                    <div key={i} className='my-2'>
                                      {detail}
                                    </div>
                                  ))}</dd>
                                </div>
                              ))}
                            </dl>
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
                                <Link href={project?.detailURL} target="_blank" >
                                <div className='flex flex-row gap-2'>
                                  {project?.tip}
                                  <ArrowUpRight />
                                </div>
                                   <span className='sr-only'>Details</span>
                                </Link>
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent className='bg-white text-black font-semibold'>
                              <p>{project?.tip}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))
            }
          </CarouselContent>
          <div className='hidden lg:block'>
            <CarouselPrevious className='rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect'/>
            <CarouselNext className='rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect' />
          </div>
          <div className='absolute -bottom-8 right-12 lg:hidden'>
            <CarouselPrevious className='rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect'/>
            <CarouselNext className='rounded-md bg-transparent border border-lightSky/20 hover:bg-hoverColor/20 hover:text-white hover:border-hoverColor p-5 hoverEffect' />
          </div>
        </Carousel>
      </PageLayout>
    </div>
  )
}

export default ProjectPage