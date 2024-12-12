import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'

interface Props {
    className?:string;
    title:string;
    subtitle:string;
}
const logo = ({className, title, subtitle}: Props) => {
  return (
    <div className="group">
        <Link href={'/'}>
            <h2 className={cn("font-semibold tracking-wide text-3xl hover:text-hoverColor hoverEffect mt-2",className)}>
                {title}
                <span className="text-lightSky group-hover:text-white hoverEffect">
                    {subtitle}
                </span>
            </h2>
        </Link>
    </div>
  )
}

export default logo
