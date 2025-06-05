"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import con from "@/assets/cards/con.svg";

const HireMe = () => {
  const router = useRouter();

  return (
    <section
      id="Introduction"
      className="w-full mx-auto max-w-[1440px] max-md:w-[100%] h-full mt-3 max-md:mt-20"
    >
      <div className="lg:h-[806px] bg-[#F2F4F7] rounded-[50px] w-[100%] mx-auto flex flex-row-reverse max-lg:flex-col max-lg:gap-y-5 justify-center items-center gap-x-2">
        {/* VIDEO CONTAINER */}
        <div className="flex mx-auto w-[80%] h-[60%] lg:w-[630px] md:h-[448px] rounded-lg max-lg:mt-10 overflow-hidden shadow-lg">
          <video
            src="/videos/intro.mp4"
            poster="/assets/poster-image.png"
            controls
            preload="metadata"
            className="rounded-[20px] object-cover w-full h-full"
          >
            Sorry, your browser doesn’t support embedded videos.
          </video>
        </div>

        {/* TEXT + STATS + BUTTON */}
        <div className="flex flex-col max-md:w-[80%] mx-auto -mt-2 lg:max-w-[696px] max-lg:mt-10 max-lg:mb-10 px-5">
          <div className="md:text-[64px] text-[28px] font-bold md:max-w-[800px] -tracking-[1.5%] leading-[100%] text-left">
            Our <span className="text-[#AA253D]">Introduction</span>
          </div>
          <p className="mt-[26px] mb-[50px] text-[14px] md:text-[20px] text-[#98A2B3] -tracking-[1.5%] leading-[100%]">
            Watch how we craft impactful digital experiences. We are a dedicated
            UI/UX design and full-stack development agency, building intuitive
            web and mobile applications that drive results. See our passion for
            user-centered design and robust coding in action.
          </p>

          <div className="flex gap-x-2">
            <div className="flex flex-col gap-5 gap-y-[10px] w-[343px]">
              <p className="-tracking-[1.5%] leading-[100%] text-[36px] font-medium text-[#1D2939]">
                10+
              </p>
              <p className="-tracking-[1.5%] leading-[100%] text-[14px] md:text-[20px] font-normal text-[#667085]">
                Team members
              </p>
            </div>

            <div className="flex flex-col gap-y-[2px]">
              <Image src={con} alt="icon" className="-ml-2" />
              <div className="flex flex-col gap-5 gap-y-[10px]">
                <p className="-tracking-[1.5%] leading-[100%] text-[36px] font-medium text-[#1D2939]">
                  30+
                </p>
                <p className="-tracking-[1.5%] leading-[100%] text-[14px] md:text-[20px] font-normal text-[#667085] md:w-[203px]">
                  Clients who have had a positive experience
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => router.push(`/hire-us`)}
            className="max-w-[215px] max-md:min-w-[180px] max-md:mx-auto max-h-[104px] text-[#151515] border border-[#151515] rounded-[32px] mt-[47px] md:text-[32px] font-semibold -tracking-[1.5%] leading-[100%] text-center md:px-[59px] px-[20px] md:py-[33px] py-[15px] hover:bg-[#AA253D] transition-all duration-300 hover:text-white"
          >
            Hire us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
