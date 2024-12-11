"use client";
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import React, { useState } from 'react'
import PageLayout from '@/components/PageLayout'
import projectOne from "@/images/projectOne/One.png"
import projectTwo from "@/images/projectTwo/One.png"
import projectThree from "@/images/projectThree/One.png"
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const projects = [
  {
    id: "01",
    title: "UWP Video Game",
    category: "Full Stack",
    description: "",
    stack: ["C#", "XAML", "UWP",],
    image: projectOne,
    detailURL: ""
  },
  {
    id: "02",
    title: "Community Project | NCR reporting",
    category: "Front End",
    description: "",
    stack: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "C#", "SQLite"],
    image: projectTwo,
    detailURL: ""
  },
  {
    id: "03",
    title: "Contoso Sales Report",
    category: "Data Analyst",
    description: "",
    stack: ["SQL", "Power BI", "Data Anaysis",],
    image: projectThree,
    detailURL: ""
  },
]

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
                  <Card className='bg-bodyColor border-lightSky/20'>
                    <CardContent className='p-6'>
                      <div className='flex flex-col md:flex-row md:items-center md:space-x-8'>
                        {/* description */}
                        <div className='w-full md:w-1/2 order-2 md:order-1 mb-8 md:mb-0'>
                          <div className='space-y-3 md:space-y-6 mt-4 md:mt-0'>
                            <h2 className='text-4xl md:text-8xl leading-none font-extrabold'>{project?.id}</h2>
                          </div>
                        </div>
                        {/* image */}
                        <div className='w-full md:w-1/2 order-1 md:order-2'>
                          <div className='relative h-64 md:h-96 bg-gray-700 rounded-lg overflow-hidden'>
                            <Image src={project?.image} alt={project.title} fill className='object-cover'/>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))
            }
          </CarouselContent>
        </Carousel>
      </PageLayout>
    </div>
  )
}

export default ProjectPage