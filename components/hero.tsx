'use client'
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import WelcomeImage from "@/assets/welome-text.svg"
import sohram from "@/assets/sohram-hero.png"
import stars from "@/assets/stars.png"
import comma from '@/assets/quote-up.svg'
import { useState } from "react"

export default function Hero() {
  const [activeTab,setActiveTab]=useState('Portfolio')
  return (
    <div className="w-full max-w-[1298px] flex flex-col items-center mt-[37px]">
      <div className="relative w-full flex flex-col items-center">
        {/* Welcome text with decoration */}
        <div className="relative mb-2">
          <Image
            src={WelcomeImage}
            alt="Decoration"
            
            className=""
          />
        </div>

        {/* Main heading */}
        <h1 className="text-[96px] font-semibold text-center leading-[100%] -tracking-[1.5%]">
          Hi I'm <span className="text-[#C30052]">Sohram,</span>
          <br />A UI UX Designer
        </h1>

        {/* Left side decoration */}
        <div className="absolute z-10 left-4 xl:left-[71px] h-full translate-y-1/2">
          <div className="flex flex-col items-start gap-6 w-[368px]">
            <Image src={comma} alt=""/>
            <p className="text-[20px] font-medium text-[#344054] max-w-[380px]">
            Crafting intuitive and meaningful experiences
            that connect users with technology
              <br />
              Highly Recommended!
            </p>
          </div>
        </div>

        {/* Profile image with circular background */}
        <div className="relative  ">
          
          
        <Image
            src={sohram}
            alt="Sohram"
            width={943}
            height={636}
            className=""
          /> 
        </div>

        {/* Right side rating */}
        <div className="absolute right-4 xl:right-[71px] h-full translate-y-1/2">
          <Image
          src={stars}
          alt=""
          />

        </div>

        {/* Action buttons */}
        <div className="absolute bottom-10 flex gap-x-[10px] backdrop-blur-[15px] mt-8 border-[2px] border-[#C9C9C9] rounded-[50px] p-[10px] h-[82px] items-center transition-all duration-300">
          <button onClick={()=>setActiveTab('Portfolio')} className={`${activeTab ==="Portfolio" && 'bg-[#C30052]' } text-white rounded-full h-[62px] w-[208px] flex items-center justify-center gap-2`}>
            Portfolio <ArrowRight size={16} className={`${activeTab ==="Portfolio" && '-rotate-45 transition-all duration-200'} `} />
          </button>
          <button onClick={()=>setActiveTab('Hire me')} className={`${activeTab ==="Hire me" && 'bg-[#C30052]' } text-white backdrop-blur-[15px] rounded-full h-[62px] w-[129px] flex items-center justify-center gap-2 `}>
            Hire me 
          </button>
        </div>
      </div>
    </div>
  )
}
