"use client";
import Link from "next/link";
import Image from "next/image";
import logo1 from "@/assets/cards/x.svg";
import logo2 from "@/assets/mdi_linkedin.svg";
import linkedin from "@/assets/mdi_linkedin 2.svg";
import arow from "@/assets/up right.svg";
import { useState } from "react";
import logo from "@/assets/cards/A.svg"

export default function FooterSection() {
  const [hover, setHover] = useState(false);  
  const [hoverlog,setHoverLogo]=useState(false)

  return (
    <footer className="w-full max-md:mx-auto max-md:w-[95%] mt-5">
      <div className="bg-[#272727] text-white py-12 rounded-t-[24px] max-lg:px-5 ">
        <div className=" md:max-w-[1298px] mx-auto">
          {/* Top section with heading and hire button */}
          <div className="md:flex justify-between items-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold max-md:mb-8">
              Lets Connect there
            </h2>
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() =>  setHover(false) }
              
              className="bg-[#AA253D] cursor-pointer text-[26px] md:text-[26px] leading-[100%] text-nowrap -tracking-[1.5%] hover:bg-[#94273b] text-white px-[10px] md:px-[43px] py-2 md:py-3 justify-center rounded-full flex items-center gap-2 transition-all duration-200"
            >   
                Hire us
              <Image
                className={`md:h-[42px] md:w-[42px]   ${hover && "rotate-[45deg]"}`}
                src={arow}
                alt=""
              />
            </div>
          </div>

          {/* Divider */}
          <div className="border-t-[2px] border-[#475467] my-[55px]"></div>

          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column */}
            <div>
              {/* Logo and name */}
  <div className="flex items-center gap-3 mb-[34px] text-[20px] leading-[100%] -tracking-[1.5%] h-[86px]">
 
              <div  className="min-w-[46px] h-[46px]  bg-[#AA253D] flex items-center justify-center text-white mr-[4.5px] rounded-[50px] ">
                      <Image className="object-cover" src={logo} alt="logo"/>
                      
                    </div>
                    <div onMouseEnter={()=>setHoverLogo(false)} onMouseOut={()=>setHoverLogo(true)} onMouseLeave={()=>setHoverLogo(true)} className="flex items-center min-h-[60px] transition-all duration-200 cursor-pointer">
                 {   hoverlog ?  <span className="text-xl font-semibold">The Apex UI</span> :
              <div onMouseLeave={()=>setHoverLogo(true)} onMouseEnter={()=>setHoverLogo(false)} className="flex flex-col gap-[-2px]"><div className="text-[14px] text-gray-500">Designed by</div>Our Team</div>}       
              </div>
              </div>

              {/* Description */}
              <p className="text-[#FCFCFD] text-[20px] leading-[100%] -tracking-[1.5%]">
              Follow our work and updates on our 
              
              </p>
              <p className="mb-8 text-[#FCFCFD] text-[20px] leading-[100%] -tracking-[1.5%]">LinkedIn and X accounts.</p>

              {/* Social icons */}
              <div className="flex gap-x-[13px]">
                <Link href="#" aria-label="WhatsApp">
                  {/* <MessageCircle className="w-5 h-5" /> */}
                  <Image src={logo1} alt={""} />
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  {/* <Linkedin className="w-5 h-5" /> */}
                  <Image src={logo2} alt={""} />
                </Link>
              </div>
            </div>

            {/* Right column */}
            <div className="flex md:justify-end justify-start">
              <div>
                <h3 className="text-[#AA253D] text-xl font-semibold mb-6">
                  Contact
                </h3>
                <ul className="space-y-4 text-[#FCFCFD] text-[16px] leading-[100%] -tracking-[1.5%]">
                  <li>+92 333 0542400</li>
                  <li>sohrammalik@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom divider */}
          <div className="border-t-[2px] border-[#475467] mt-12"></div>
        </div>
      </div>
      <div className="h-[120px] flex justify-center bg-white">
        {/* <Image src={linkedin} alt="linkedin" /> */}
      </div>
    </footer>
  );
}
