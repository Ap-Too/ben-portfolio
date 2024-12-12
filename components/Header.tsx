"use client";
import Link from "next/link"
import Container from "./Container"
import Logo from './Logo'
import { navbarData } from "@/constants"
import { usePathname } from "next/navigation"
import Sidebar from "./Sidebar";
import { useState } from "react";
import { Download, EllipsisVertical, Mail } from "lucide-react";
import SocialLinks from "./SocialLinks";


const Header = () => {
  const pathname = usePathname();
  const [isSidebarOpen,setIsSidebarOpen] = useState(false);
  return (
    <header className='bg-bodyColor text-white/80 sticky top-0 z-50'>
        <Container className='py-5 flex items-center justify-between '>
          <div className="flex flex-row gap-6">
            <Logo title="Ben " subtitle="Allen"/>
            <div>
              <SocialLinks className=''/>
            </div>
          </div>
            <div className="hidden md:inline-flex items-center gap-7 text-sm uppercase tracking-wide font-medium">
                {navbarData?.map((item)=>(
                  <Link key={item?.title} href={item?.href} className={`hover:text-hoverColor hoverEffect relative group overflow-x-hidden ${pathname === item?.href && 'text-hoverColor'}`}>
                    {item?.title}
                    <span className={`w-full h-px bg-hoverColor inline-block absolute left-0 bottom-0 group-hover:translate-x-0 hoverEffect  ${pathname === item?.href ? "translate-x-0":"-translate-x-[105%]"}`}/>
                  </Link>
                ))}
                <Link href={'/resume.pdf'} target="_blank" rel="noopener noreferrer" className="text-sm bg-lightSky/10 px-4 py-2 rounded-md border
                   border-hoverColor/10 hover:border-hoverColor hover:bg-hoverColor hover:text-black hoverEffect">
                    <div className="flex gap-2 m-auto items-center justify-center">
                      Download CV <Download/>
                    </div>
                </Link>
                <a href="mailto:ben.allen.02.11@gmail.com" className="text-sm bg-lightSky/10 px-4 py-2 rounded-md border border-hoverColor/10 hover:border-hoverColor hover:bg-hoverColor hover:text-black hoverEffect h-[42px]">
                    <div className="flex gap-2 m-auto items-center justify-center">
                      CONTACT ME <Mail />
                    </div>
                </a>
            </div>
            <button aria-label="Toggle menu" onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="inline-flex md:hidden relative hover:text-hoverColor hoverEffect">
              <EllipsisVertical />
            </button>
        </Container>
        {<div className="md:hidden">
            <Sidebar isOpen={isSidebarOpen}
                     onClose={() => setIsSidebarOpen(false)}
                     pathname={pathname}/>
        </div>}
    </header>
    
  )
}

export default Header
