// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import icon from "@/assets/Ellipse 17576.svg";
// import logo from "@/assets/cards/A.svg"

// const navItems = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "#about" },
//   { name: "Services", href: "#Service" },
//   { name: "The Apex UI", href: "/", highlight: true },
//   { name: "Testimonials", href: "#Testimonials" },
//   { name: "Introduction", href: "#Introduction" },
//   { name: "Lets connect", href: "/", icon: true },
// ];

// export default function Navbar() {
//   const [activeItem, setActiveItem] = useState("Home");
//   const [hover,setHover]=useState(false)

//   return (
//     <div className="max-md:w-[95%] max-md:mx-auto overflow-scroll hidden-scrollbar relative items-center flex h-[86px] justify-center mt-[15px] px-4 ">
//       <nav className="max-w-[1298px] border-white border-[2px] overflow-x-scroll hidden-scrollbar pl-[10xp] pr-[31px] w-full h-full bg-black rounded-full flex items-center justify-between">
//         <ul className="flex items-center justify-between h-[50px] md:h-[64px] w-full space-x-8 font-inter pl-[10px]">
//           {navItems.map((item) => (
//             <li key={item.name}>
//               <Link href={item.href} onClick={() => setActiveItem(item.name)}>
//                 <div
//                 onMouseEnter={()=>{
//                   item.highlight && setHover(true)}}
//                 onMouseLeave={()=>setHover(false)}
//                   className={cn(
//                     "px-4 rounded-full text-white text-[12px]  md:text-[20px] justify-center text-nowrap flex items-center h-[50px] md:h-[64px] min-w-[132px] text-center leading-[100%] -tracking-[1.5%] transition-colors",
//                     activeItem === item.name ? "bg-[#AA253D]  text-white" : "",item.highlight && 'w-[200px] text-left transition-all duration-500'
//                   )}
//                 >
//                   {item.highlight && (
//                     <div className={`min-w-[46px] h-[46px] ${hover && 'outline outline-white'}  bg-[#AA253D] flex items-center justify-center text-white mr-[10.5px] rounded-[50px] `}>
//                       <Image className="object-cover" src={logo} alt="logo"/>
                      
//                     </div>
//                   )}
//                   {item.icon && (
//                     <Image className="mr-[6px]" src={icon} alt={"icon"} />
//                   )}

//                   {item.highlight
//                    && hover ? (
//                      <> <div><div className="text-[12px] text-white">Designed by</div>Our Team</div></>):
//                     <div>{item.name}</div>
//                    }
//                 </div>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import icon from "@/assets/Ellipse 17576.svg";
import logo from "@/assets/cards/A.svg";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#Service" },
  { name: "The Apex UI", href: "/", highlight: true },
  { name: "Testimonials", href: "#Testimonials" },
  { name: "Introduction", href: "#Introduction" },
  { name: "Lets connect", href: "/", icon: true },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");
  const [hover, setHover] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Navbar */}
      <div className="md:hidden  w-full px-4 py-3 flex justify-between items-center bg-black border-b border-white">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-[#AA253D] flex items-center justify-center rounded-full mr-3">
            <Image className="object-cover w-6 h-6" src={logo} alt="logo" />
          </div>
          <span className="text-white font-bold">The Apex UI</span>
        </div>
        
        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-white p-2 focus:outline-none"
        >
          {mobileOpen ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black border-t h-[calc(100vh-80px)] hidden-scrollbar  overflow-scroll border-white">
          <ul className="py-2 px-4 space-y-2 h-[100%]">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href} 
                  onClick={() => {
                    setActiveItem(item.name);
                    setMobileOpen(false);
                  }}
                >
                  <div className={cn(
                    "px-4 py-3 rounded-full text-white flex items-center",
                    activeItem === item.name && "bg-[#AA253D] text-white"
                  )}>
                    {item.icon && (
                      <Image className="mr-3" src={icon} alt={"icon"} width={16} height={16} />
                    )}
                    {item.highlight ? (
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-[#AA253D] flex items-center justify-center rounded-full mr-3">
                          <Image className="object-cover w-4 h-4" src={logo} alt="logo"/>
                        </div>
                        <span>{item.name}</span>
                      </div>
                    ) : (
                      <span>{item.name}</span>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Original Desktop Navbar (unchanged) */}
      <div className="hidden mx-auto max-md:w-[95%] max-md:mx-auto overflow-scroll hidden-scrollbar relative items-center md:flex h-[86px] justify-center mt-[15px] px-4 ">
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
                      <div className={`min-w-[46px] h-[46px] ${hover && 'outline outline-white'}  bg-[#AA253D] flex items-center justify-center text-white mr-[10.5px] rounded-[50px] `}>
                        <Image className="object-cover" src={logo} alt="logo"/>
                      </div>
                    )}
                    {item.icon && (
                      <Image className="mr-[6px]" src={icon} alt={"icon"} />
                    )}

                    {item.highlight
                     && hover ? (
                       <> <div><div className="text-[12px] text-white">Designed by</div>Our Team</div></>):
                      <div>{item.name}</div>
                     }
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}