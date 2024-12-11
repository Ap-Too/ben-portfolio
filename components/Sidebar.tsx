import { useOutsideClick } from '@/hooks/use-outside-click';
import { Download, X, Mail } from 'lucide-react';
import React from 'react'
import Logo from './Logo'
import { navbarData } from '@/constants';
import Link from 'next/link';
import SocialLinks from './SocialLinks';

interface Props{
    isOpen:boolean;
    onClose: () => void;
    pathname:string;
}

const Sidebar:React.FC<Props> = ({isOpen, onClose, pathname}) => {
    const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
    return (
        <div ref={sidebarRef}
             className={`fixed inset-y-0 right-0 z-50 min-w-72 max-w-96 bg-bodyColor shadow-xl transform ${isOpen ? "translate-x-0":"translate-x-full"} transition-transform duration-300 ease-in-out`}>
            <div>
                <button onClick={onClose}
                        className="hover:text-red-600 hoverEffect float-right" aria-label="Close sidebar">
                    <X/>
                </button>
            </div>
            <nav className='flex flex-col px-5 gap-7 text-sm uppercase tracking-wide font-medium mt-2'>
                <Logo title="Ben " subtitle='Allen'/>
                {navbarData?.map((item)=> (
                    <Link key={item?.title} href={item?.href} className={`hover:text-hoverColor hoverEffect ${pathname === item?.href && "text-hoverColor}"}`} onClick={onClose}>
                        {item?.title}
                    </Link>
                ))}
                <Link href={'/resume.pdf'} target="_blank" rel="noopener noreferrer" className="text-sm bg-lightSky/10 px-4 py-2 rounded-md border
                   border-hoverColor/10 hover:border-hoverColor hover:bg-hoverColor hover:text-black text-center hoverEffect">
                    <div className="flex gap-2 m-auto items-center justify-center">
                        Download CV <Download />
                    </div>
                </Link>
                <a href="mailto:ben.allen.02.11@gmail.com" className="text-sm bg-lightSky/10 px-4 py-2 rounded-md border border-hoverColor/10 hover:border-hoverColor hover:bg-hoverColor hover:text-black hoverEffect h-[42px]">
                    <div className="flex gap-2 m-auto items-center justify-center">
                      CONTACT ME <Mail />
                    </div>
                </a>
                <div className='flex items-center justify-center'>
                    <SocialLinks/>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar
