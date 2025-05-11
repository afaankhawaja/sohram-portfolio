"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"
import icon from "@/assets/Ellipse 17576.svg"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/" },
  { name: "Service", href: "/" },
  { name: "RedSpark Tech", href: "/", highlight: true },
  { name: "Testimonials", href: "/" },
  { name: "Introduction", href: "/" },
  { name: "Lets connect", href: "/" ,icon:true},
]

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home")

  return (
    <div className="w-full items-center flex h-[86px] justify-center mt-[15px] px-4">
      <nav className="max-w-[1298px] overflow-x-scroll hidden-scrollbar pl-[10xp] pr-[31px] w-full h-full bg-black rounded-full flex items-center justify-between">
        <ul className="flex items-center justify-between h-[64px] w-full space-x-8 font-inter pl-[10px]">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setActiveItem(item.name)}
              >
                <div className={cn(
                  "px-4 rounded-full text-white text-[20px] justify-center text-nowrap flex items-center h-[64px] min-w-[132px] text-center leading-[100%] -tracking-[1.5%] transition-colors",
                  activeItem === item.name ? "bg-[#C30052]  text-white" : "",
                  
                )}>
                {
                  item.highlight && <div className="w-[46px] h-[46px] content-center bg-[#AA253D] px-[5px] py-[5px] text-white mr-[10.5px] rounded-[50px] text-[20px] -tracking-[1.5%]">SM</div>
                }
                {
                  item.icon && <Image className="mr-[6px]" src={icon} alt={'icon'}/>
                }
                {item.name}
                </div>
               
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
