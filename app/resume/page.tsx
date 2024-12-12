"use client";
import { Mail, MapPinCheck, Phone, Briefcase, GraduationCap, Calendar } from 'lucide-react'
import React from 'react'
import Logo from '@/components/Logo'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
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
        role: "IT Service Desk Technician",
        company: "Niagara College Canada",
        period: "Sept 2023 - Present",
        description: 
          "As an IT Help Desk Technician, I specialized in providing technical support to end-users, troubleshooting hardware, software, and network issues to ensure seamless daily operations. My role involves diagnosing and resolving technical problems, assisting with system configurations, and guiding users in utilizing software and systems effectively.",
        contributions: 
        [
          "Delivered prompt and effective first-line technical support via phone, email, and in-person interactions.",
          "Resolved hardware and software issues, including operating system errors, network connectivity, and peripheral setup.",
          "Ensured accurate documentation of technical issues, resolutions, and system changes.",
          "Collaborated with teams to escalate and resolve complex issues, minimizing downtime.",
        ],
        highlights: ["Troubleshooting","Communication","Documentation","User Support","Problem-Solving", "Collaboration"]
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
        description: 
          "A comprehensive program focused on developing in-demand skills in software development, systems analysis, and application design. This hands-on program emphasizes practical learning through real-world projects and paid co-operative work placements.",
        highlights: [
          "Mastered programming languages and technologies including Python, Java, JavaScript, and SQL.",
          "Gained experience in web development, mobile app development, and database management.",
          "Developed expertise in systems analysis, software design, and project management to build scalable and efficient applications.",
          "Collaborated on full-stack development projects, creating enterprise-level applications and solutions.",
        ],
        achievements: ["President's Honour Roll",]
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
          <div className='flex flex-row gap-6'>
            <div className='w-full flex flex-col gap-4 md:gap-8'>
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
            <div className='mt-8 border rounded-lg border-x-8 border-y-4 border-lightSky/20 py-6 px-2 h-fit'>
              <Skills/>
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
                          <p className='ml-4 md-4 text-white'>{item?.description}</p>
                          <h4 className='text-lg font-medium my-4 text-white/80'>Highlights</h4>
                          <ul className='flex flex-col ml-4 gap-4'>
                            {item?.contributions?.map((contribute,ind)=>(
                              <li key={ind}>
                                {contribute}
                              </li>
                            ))}
                          </ul>
                          <div className='flex flex-wrap gap-2'>
                            {item?.highlights.map((highlight,i)=>(
                              <Badge key={i}
                              variant='secondary'
                                className='bg-hoverColor/30 text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/10 hover:border-lightSky hoverEffect min-w-[100px] justify-center items-center mt-4'>
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
                          <p className='ml-4 mb-4 text-white'>{item?.description}</p>
                          <h3 className='text-lg font-medium my-4 text-white/80'>Highlights</h3>
                          <ul className='flex flex-col ml-4 gap-4'>
                            {item?.highlights?.map((highlight,ind)=>(
                              <li key={ind}>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                          <div className='flex flex-wrap gap-2'>
                            {item?.achievements.map((achievement,i)=>(
                              <Badge key={i}
                              variant='secondary'
                                className='bg-hoverColor/30 text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/10 hover:border-lightSky hoverEffect min-w-[100px] justify-center items-center mt-4'>
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
      </PageLayout>
    </div>
  )
}

export default ResumePage
