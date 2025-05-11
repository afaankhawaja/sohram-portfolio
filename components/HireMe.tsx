import React from "react";
import Image from "next/image";

const HireMe = () => {
  return (
    <section id="Introduction">
      <div className="h-[806px] bg-[#F2F4F7] rounded-[50px] mt-5 w-screen flex flex-row-reverse max-lg:flex-col max-lg:gap-y-5 justify-center items-center gap-x-2">
        {/* <Image width={603} height={600} src={logo} alt=''/> */}

        <div className="flex w-[630px] h-[448px] rounded-lg">
          <video
            poster="/assets/poster-image.png"
            controls
            className="rounded-[20px] h-[448px] w-[630px]"
          ></video>
        </div>
        <div className="flex flex-col max-w-[696px]">
          <div className="text-[64px] font-bold max-w-[800px] -tracking-[1.5%] leading-[100%] text-left">
            Our <span className="text-[#AA253D]">Introduction</span>
          </div>
          <p className="my-[26px] text-[20px] text-[#98A2B3] -tracking-[1.5%] leading-[100%]">
            As a Lead UI/UX Designer, I manage the full product design
            lifecycle, including rigorous Design QA, functionality, and bug
            testing. I've led mobile app design for sensitive areas (ClearMinds
            w/ RAG AI) and contributed to AI platforms (Medianest). I deliver
            impactful, user-centered products from concept to completion.
          </p>
          <div className="flex gap-x-2">
            <div className="flex flex-col gap-5 gap-y-[10px] w-[343px]">
              <p className="-tracking-[1.5%] leading-[100%] text-[36px] font-medium text-[#1D2939]">
                10+
              </p>
              <p className="-tracking-[1.5%] leading-[100%] text-[20px] font-normal text-[#667085]">
                Team members
              </p>
            </div>

            <div className="flex flex-col gap-5 gap-y-[10px]">
              <p className="-tracking-[1.5%] leading-[100%] text-[36px] font-medium text-[#1D2939]">
                30+
              </p>
              <p className="-tracking-[1.5%] leading-[100%] text-[20px] font-normal text-[#667085] w-[203px]">
                Clients who have had a positive experience
              </p>
            </div>
          </div>
          <button className="max-w-[215px] max-h-[104px] text-[#151515] border border-[#151515] rounded-[32px] mt-[47px] text-[32px] font-semibold -tracking-[1.5%] leading-[100%] text-center content- px-[59px] py-[33px] hover:bg-[#AA253D] transition-all duration-300 hover:text-white">
            Hire us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
