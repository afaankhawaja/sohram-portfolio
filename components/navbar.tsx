"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Service", href: "/service" },
  { name: "UI UX Portfolio", href: "/portfolio", highlight: true },
  { name: "Resume", href: "/resume" },
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
]

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home")

  return (
    <div className="w-screen items-center flex h-[86px] justify-center mt-[15px]">
      <nav className="max-w-[1298px] pl-[10xp] pr-[31px] w-full h-[86px] bg-black rounded-full flex items-center justify-between px-2">
        <ul className="flex items-center justify-between w-full space-x-8 font-inter">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  "px-4 rounded-full text-white text-[20px] h-[64px] leading-[100%] -tracking-[1.5%] transition-colors",
                  activeItem === item.name ? "bg-[#C30052]  text-white" : "",
                  
                )}
                onClick={() => setActiveItem(item.name)}
              >
                {
                  item.highlight && <span className="w-[46px] h-[64px] bg-[#AA253D] px-[5px] py-[5px] text-white mr-[10.5px] rounded-[50px] text-[20px] -tracking-[1.5%]">SM</span>
                }
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
