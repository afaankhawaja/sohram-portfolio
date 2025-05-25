"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import icon from "@/assets/Ellipse 17576.svg";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Service", href: "#Service" },
  { name: "RedSpark Tech", href: "/", highlight: true },
  { name: "Testimonials", href: "#Testimonials" },
  { name: "Introduction", href: "#Introduction" },
  { name: "Lets connect", href: "/", icon: true },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");
  const [hover,setHover]=useState(false)

  return (
    <div className="max-md:w-[95%] max-md:mx-auto overflow-scroll hidden-scrollbar relative items-center flex h-[86px] justify-center mt-[15px] px-4 ">
      <nav className="max-w-[1298px] border-white border-[2px] overflow-x-scroll hidden-scrollbar pl-[10xp] pr-[31px] w-full h-full bg-black rounded-full flex items-center justify-between">
        <ul className="flex items-center justify-between h-[50px] md:h-[64px] w-full space-x-8 font-inter pl-[10px]">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} onClick={() => setActiveItem(item.name)}>
                <div
                onMouseEnter={()=>{
                  item.highlight && setHover(true)}}
                onMouseLeave={()=>setHover(false)}
                  className={cn(
                    "px-4 rounded-full text-white text-[12px]  md:text-[20px] justify-center text-nowrap flex items-center h-[50px] md:h-[64px] min-w-[132px] text-center leading-[100%] -tracking-[1.5%] transition-colors",
                    activeItem === item.name ? "bg-[#AA253D]  text-white" : "",item.highlight && 'w-[200px] text-left transition-all duration-500'
                  )}
                >
                  {item.highlight && (
                    <div className="w-[46px] h-[46px] content-center bg-[#AA253D] px-[10px] flex items-center justify-center py-[5px] text-white mr-[10.5px] rounded-[50px] text-[20px] -tracking-[1.5%]">
                      SM
                    </div>
                  )}
                  {item.icon && (
                    <Image className="mr-[6px]" src={icon} alt={"icon"} />
                  )}

                  {item.highlight
                   && hover ? (
                     <> <div><div className="text-[12px] text-gray-500">Designed by</div>Sohram Malik</div></>):
                    <div>{item.name}</div>
                   }
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
