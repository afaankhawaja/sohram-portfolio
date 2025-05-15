'use client'
import Image from "next/image";
import webdev from "@/assets/cards/Web development glass mophism.svg";
import uiux from "@/assets/cards/UI UX glass mophism.svg";
import appdev from "@/assets/cards/App development glass morphism.svg";
import { useState } from "react";
import bg from "@/assets/testimonial.jpg";


const services = [
  {
    title: "UI UX Design",
    image: uiux,
    alt: "User flow and Prototyping illustration",
    id:0
  },
  {
    title: "Web Developement",
    image: webdev,
    alt: "Web Design illustration",
    id:1
  },
  {
    title: "App Developement",
    image: appdev,
    alt: "Application Design illustration",
    id:2
  },
 
];

export default function Services() {
  const [hover,setHover]=useState<number|null>()
  return (
    <div
      className="relative w-full max-w-[1440px] min-h-full"
      id="Service"
    >
      <Image
        src={bg}
        alt=""
        className="rounded-[50px] absolute min-h-full xl:h-[878px] object-cover"
      />
      <div className="px-[60px]">
     <div className="flex justify-between max-lg:flex-col max-lg:items-center gap-y-5 max-lg:mb-14">
     <h2 className="text-[48px] text-white font-bold leading-[100%] -tracking-[1.5%] relative mt-[116px] pl-[10.5px] lg:mb-[86px]">
        Our <span className="text-[#C30052]">Services</span>
      </h2>
      <p className="text-white text-[20px] font-medium leading-[100%] -tracking-[1.5%] lg:mt-[97px] max-w-[675px] relative">
      We deliver exceptional user experiences for web, web applications, and mobile. Our expert UI/UX design seamlessly integrates with full-stack development for both web and mobile platforms, creating powerful and intuitive digital solutions.
      </p>
     </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 h-full pb-10 pr-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative rounded-2xl flex flex-col max-w-[416px] w-auto lg:w-full min-w-[370px] h-[508px] min- mx-auto"
          >
            <div className={`relative flex-grow  rounded-[35px] overflow-hidden h-[30%]`}
            onMouseEnter={()=>setHover(service.id)}
            onMouseLeave={()=>setHover(null)}>
              <div className={`absolute inset-0 h-[50%] ${hover===index && "bg-[#AA253D]"}`}></div>
              
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.alt}
                fill
                className="object-cover  transition-all duration-200 hover:scale-105"
              />
              <div className="relative z-10 text-[32px] leading-[100%] -tracking-[1.5%] text-white mt-[44px] mx-auto pl-[37px]">
                {service.title}
              </div>
              <div className="relative z-10 mt-[23px] w-full h-[2px] bg-[#F9FAFB4D]"> </div>
            </div>
            <div className={`absolute w-[114px] h-[114px] z-20 bottom-0 right-1 rounded-[57px] bg-[#1D2939] hover:bg-[#AA253D] ${hover===index && "bg-[#AA253D]"}`}>
              <svg
                id="noName"
                width="114"
                height="114"
                viewBox="0 0 114 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="114"
                  width="114"
                  height="114"
                  rx="57"
                  transform="rotate(-90 0 114)"
                  fill=""
                />
                <path
                  d="M42 72L72 42"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M42 42H72V72"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
      </div>
     

    </div>
  );
}
