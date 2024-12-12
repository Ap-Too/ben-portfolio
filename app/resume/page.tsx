"use client";
import { Mail, MapPinCheck, Phone, Briefcase, GraduationCap, Calendar } from 'lucide-react'
import React from 'react'
import Logo from '@/components/Logo'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import SocialLinks from '@/components/SocialLinks';
import PageLayout from '@/components/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from "motion/react"; 
import { Badge } from '@/components/ui/badge';
import Skills from '@/components/Skills';

const infoData = [
  {
    title: "Phone",
    description: "(+1) 226 387-1417",
    href: "tel:+12263871417",
    tip: "Call me",
    icon: <Phone/>
  },
  {
    title: "Email",
    description: "ben.allen.02.11@gmail.com",
    href: "mailto:ben.allen.02.11@gmail.com",
    tip: "Send an Email",
    icon: <Mail/>
  },
  {
    title: "Address",
    description: "St. Catharines, ON",
    href: "",
    tip: "Located in St. Catharines, ON",
    icon: <MapPinCheck/>
  },
]

const tabMenu = [
  { title: "Experience", value: "experience", icon: Briefcase },
  { title: "Education", value: "education", icon: GraduationCap },
]

const tabContent = {
  experience: {
    title: "Professional Experience",
    items: [
      {
        role: "IT Service Desk",
        company: "Niagara College Canada",
        period: "Sept 2023 - Present",
        description: "",
        highlights: ["",]
      }
    ]
  },
  education: {
    title: "Educational Background",
    items: [
      {
        degree: "Computer Programming and Analysis (Co-op)",
        institution: "Niagara College Canada",
        period: "Sept 2022 - Present",
        description: "",
        achievements: ["",]
      }
    ]
  }
}

const ResumePage = () => {
  return (
    <div>
      <PageLayout>
        <div className='py-6 md:py-12 flex flex-col md:flex-row gap-6 md:gap-14'>
          {/* Sticky Name and info */}
          <div className='sticky w-full flex flex-col gap-4 md:gap-8'>
            <Logo className="text-6xl" title="Ben " subtitle="Allen"/>
            <div className='flex flex-row gap-4'>
              <TooltipProvider>
                {infoData?.map((item)=>(
                  <Tooltip key={item?.title}>
                    <TooltipTrigger>
                      <Link href={item?.href} className='flex items-center space-x-4'>
                        <span className='bg-lightSky/5 p-4 rounded-md'>{item.icon}</span>
                        <div className='hidden md:block'>
                          <h3>{item?.title}</h3>
                          <p>{item?.description}</p>
                        </div>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent className='bg-white text-black font-semibold'>
                      {item?.tip}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>
        </div>
        {/* Different related Work experiences */}
        <div className='flex flex-col justify-center pb-4'>
              <Tabs defaultValue='experience' className='w-full flex flex-col md:flex-row gap-6'>
                <TabsList className='flex md:flex-col h-full bg-transparent md:w-64'>
                  {tabMenu?.map((item)=>(
                    <TabsTrigger key={item?.value} value={item?.value} className='bg-white/10 w-full py-2.5 text-white data-[state=active]:bg-hoverColor hover:bg-lightSky/50 text-xs sm:text-sm font-medium'>
                      <div className='flex items-center gap-1.5 md:w-[50%] md:gap-3'>
                        <item.icon className='w-4 h-4 md:w-5 md:h-5'/>
                        {item?.title}
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
                <div className='flex-1 min-h-[400px]'>
                  {/* Work Experience */}
                  <TabsContent value="experience">
                    {/* <motion.h2 initial={{opacity: 0}} animate={{opacity:1}}
                    className='text-2xl font-bold mb-6 text-lightSky'>
                      {tabContent.experience.title}
                    </motion.h2> */}
                    <div className='space-y-6'>
                      {tabContent?.experience?.items.map((item,index)=>(
                        <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{delay: index * 0.1}}
                        key={index} className='border rounded-lg border-x-8 border-y-4 border-lightSky/20 p-6'>
                          <div className='flex items-start justify-between mb-4'>
                            <div>
                              <h3 className='text-lg font-semibold'>{item?.role}</h3>
                              <p className='text-muted-foreground'>{item?.company}</p>
                            </div>
                            <div className='flex items-center text-muted-foreground'>
                              <Calendar className='h-4 w-4 mr-2'/>
                              {item?.period}
                            </div>
                          </div>
                          <p className='md-4 text-white'>{item?.description}</p>
                          <div className='flex flex-wrap gap-2'>
                            {item?.highlights.map((highlight,i)=>(
                              <Badge key={i}
                              variant='secondary'
                                className='bg-hoverColor/30 text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/10 hover:border-lightSky hoverEffect min-w-[100px] justify-center items-center m-1'>
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                  {/* Education and Certifications */}
                  <TabsContent value="education">
                    {/* <motion.h2 initial={{opacity: 0}} animate={{opacity:1}}
                    className='text-2xl font-bold mb-6 text-lightSky'>
                      {tabContent.experience.title}
                    </motion.h2> */}
                    <div className='space-y-6'>
                      {tabContent?.education?.items.map((item,index)=>(
                        <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{delay: index * 0.1}}
                        key={index} className='border rounded-lg border-x-8 border-y-4 border-lightSky/20 p-6'>
                          <div className='flex items-start justify-between mb-4'>
                            <div>
                              <h3 className='text-lg font-semibold'>{item?.degree}</h3>
                              <p className='text-muted-foreground'>{item?.institution}</p>
                            </div>
                            <div className='flex items-center text-muted-foreground'>
                              <Calendar className='h-4 w-4 mr-2'/>
                              {item?.period}
                            </div>
                          </div>
                          <p className='md-4 text-white'>{item?.description}</p>
                          <div className='flex flex-wrap gap-2'>
                            {item?.achievements.map((achievement,i)=>(
                              <Badge key={i}
                              variant='secondary'
                                className='bg-hoverColor/30 text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/10 hover:border-lightSky hoverEffect min-w-[100px] justify-center items-center m-1'>
                                {achievement}
                              </Badge>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
          </div>
        <div>
          <Skills/>
        </div>
        <div className="sticky bottom-8 hidden md:block left-full">
          <SocialLinks/>
        </div>
      </PageLayout>
    </div>
  )
}

export default ResumePage
