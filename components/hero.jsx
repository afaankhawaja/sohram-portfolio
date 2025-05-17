"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import WelcomeImage from "@/assets/welcome.svg";
import sohram from "@/assets/sohram-hero.png";
import stars from "@/assets/stars.png";
import comma from "@/assets/quote-up.svg";
import { useEffect, useState } from "react";
import clsx from "clsx";
import arow from "@/assets/up right.svg";
import { useRouter } from "next/navigation";
import bg from "@/assets/hero-image.png";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Portfolio");
  const [hoverTab, setHoverTab] = useState(null);
  const router = useRouter();
  const isTabActive = (tabName) => {
    if (hoverTab !== null) {
      return hoverTab === tabName;
    }
    return activeTab === tabName;
  };

  // Build the Tailwind classes for each button
  const buttonClasses = (tabName) =>
    `${isTabActive(tabName) ? "bg-[#AA253D]" : "bg-transparent"}`;

  return (
    <div className="max-w-full w-[1298px] mx-auto max-md:w-[85%] max-md:px-0 flex flex-col items-center mt-[37px]">
      <div className="relative w-full flex flex-col">
        {/* Welcome text with decoration */}
        <div className="relative mb-2 mx-auto">
          <Image src={WelcomeImage} alt="Decoration" className="" />
        </div>

        {/* Main heading */}

        <div className="lg:flex max-lg:flex-col max-lg:space-y-4 max-lg:mx-auto lg:justify-between w-full mt-[25px]">
          <div className="md:w-[531px]">
            <div className="lg:text-[80px] text-[60px] font-semibold leading-[100%] -tracking-[0%] md:w-[531px] mb-5 h-full w-full lg:h-[384px]">
              A Design that delights &{" "}
              <span className="text-[#C30052]">a code that performs.</span>
              <br />
            </div>
            <div className="text-[12px] md:text-[22px] md:leading-[37px] text-black max-md:mb-5 max-w-screen">
              Our Design agency helps businesses grow and succeed through a
              range of services including development services for web and
              applications .
            </div>
          </div>

          <div className="relative mb-[74px] mx-auto  md:max-w-[627px]">
            <Image
              src={bg}
              alt="Sohram"
              width={627}
              height={524}
              className="md:w-[627px] max-lg:mb-5 "
            />
            <div className="absolute bottom-[38px] justify-center items-center flex right-7 md:right-32  gap-x-[10px] backdrop-blur-[15px] mt-8 border-[2px]  text-[14px] md:text-[26px] font-medium leading-[100%] -tracking-[1.5%] border-[#C9C9C9] rounded-[50px] md:p-[10px] md:h-[82px] md:w-[367px] max-md:w-[80%]  transition-all duration-300">
              <button
                onMouseEnter={() => setHoverTab("Portfolio")}
                onMouseLeave={() => setHoverTab(null)}
                onClick={() => {
                  setActiveTab("Portfolio");
                  router.push("#Portfolio");
                }}
                className={clsx(
                  buttonClasses("Portfolio"),
                  `md:min-w-[135px] md:px-8 text-white rounded-full h-[62px] flex items-center justify-center gap-2 transition-all duration-300  text-nowrap hover:w-[208px] max-md:hover::w-fit${
                    activeTab === "Portfolio" && "w-[208px] max-md:w-[135px]"
                  } ${hoverTab === "Hire me" && "w-[135px] max-md:w-fit"}`,
                )}
              >
                Portfolio
                {activeTab === "Portfolio"
                  ? (hoverTab == "Portfolio" || hoverTab == null) && (
                      <Image src={arow} alt="" className="max-md:hidden" />
                    )
                  : hoverTab == "Portfolio" && <Image src={arow} alt="" />}
              </button>

              <button
                onMouseEnter={() => setHoverTab("Hire me")}
                onMouseLeave={() => setHoverTab(null)}
                onClick={() => {
                  setActiveTab("Hire me");
                  router.push("/hire-us");
                }}
                className={clsx(
                  buttonClasses("Hire me"),
                  `md:min-w-[129px] text-white rounded-full h-[62px] flex items-center justify-center gap-2 transition-all duration-300  text-nowrap hover:w-[202px] max-md:hover::w-fit${
                    activeTab === "Hire me" && "w-[202px] max-md:w-fit"
                  } ${hoverTab === "Portfolio" && "w-[129px] max-md:w-fit"}`,
                )}
              >
                Hire me
                {activeTab === "Hire me"
                  ? (hoverTab === "Hire me" || hoverTab == null) && (
                      <Image src={arow} alt="" />
                    )
                  : hoverTab === "Hire me" && <Image src={arow} alt="" className="max-md:hidden"/>}
              </button>
            </div>
          </div>
        </div>

        {/* Left side decoration */}
        {/* <div className="absolute z-10 left-4 xl:left-[71px] h-full translate-y-1/2">
          <div className="flex flex-col items-start gap-6 w-[368px]">
            <Image src={comma} alt=""/>
            <p className="text-[20px] font-medium text-[#344054] max-w-[380px]">
            Crafting intuitive and meaningful experiences
            that connect users with technology
              <br />
              Highly Recommended!
            </p>
          </div>
        </div> */}

        {/* Profile image with circular background */}

        {/* Right side rating */}
        {/* <div className="absolute right-4 xl:right-[71px] h-full translate-y-1/2">
          <Image
          src={stars}
          alt=""
          />

        </div> */}

        {/* Action buttons */}
        {/* <div className="absolute bottom-10 flex gap-x-[10px] backdrop-blur-[15px] mt-8 border-[2px] border-[#C9C9C9] rounded-[50px] p-[10px] h-[82px] items-center transition-all duration-300">
          <button onClick={()=>setActiveTab('Portfolio')} className={`${activeTab ==="Portfolio" && 'bg-[#C30052]' } text-white rounded-full h-[62px] w-[208px] flex items-center justify-center gap-2`}>
            Portfolio <ArrowRight size={16} className={`${activeTab ==="Portfolio" && '-rotate-45 transition-all duration-200'} `} />
          </button>
          <button onClick={()=>setActiveTab('Hire me')} className={`${activeTab ==="Hire me" && 'bg-[#C30052]' } text-white backdrop-blur-[15px] rounded-full h-[62px] w-[129px] flex items-center justify-center gap-2 `}>
            Hire me 
          </button>
        </div> */}
      </div>
    </div>
  );
}
