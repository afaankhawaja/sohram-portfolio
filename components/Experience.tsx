import React from "react";
import Image from "next/image";
import Group from "@/assets/mart-forum.png";
import logo1 from "@/assets/logo1.png";
import logo2 from "@/assets/logo2.png";
import logo3 from "@/assets/logo3.png";
import threeDots from "@/assets/three-dots.png";

const Experience = () => {
  return (
    <div className="w-screen max-w-[1298px] lg:px-4">
      <div className="flex max-lg:flex-col max-lg:gap-y-[100px] max-lg:justify-center w-full mx-auto justify-end lg:h-[234px] items-center gap-x-[32px]  lg:pr-[193px] ">
        <div className="text-[64px] -tracking-[1.5%] leading-[100%] text-[#AA253D]">
          <span className="text-black">My </span>Work Experince at
        </div>
        <Image src={Group} alt={"text"} />
      </div>
      <div className="flex max-lg:flex-col max-lg:gap-y-[100px] max-lg:items-center justify-between w-full max-lg:mt-[100px]">
        <div className="flex flex-col gap-y-[100px] lg:w-[40%]">
          <Image src={logo1} alt="" />
          <Image src={logo2} alt="" />
          <Image src={logo3} alt="" />
        </div>
        <div className="flex lg:w-[60%] lg:gap-x-[177px] max-lg:px-5 max-lg:gap-x-10">
          <Image src={threeDots} alt="" />
          <div className="flex-col space-y-6">
            <div className="flex-col">
              <h2 className="text-[40px] text-[#344054] -tracking-[1.5%] leading-[100%] font-semibold mb-[14px]">
                Lead UI UX Designer
              </h2>
              <p className="text-[20px] font-medium text-[#98A2B3] -tracking-[1.5%] leading-[100%]">
                As Lead UI/UX Designer at Medelz.com, I handled the design,
                quality assurance (Design QA), and testing (functionality &
                bugs) for their platform, which facilitates brand-sponsored
                creative competitions for artists.
              </p>
            </div>

            <div className="flex-col">
              <h2 className="text-[40px] text-[#344054] -tracking-[1.5%] leading-[100%] font-semibold mb-[14px]">
                UI UX Designer
              </h2>
              <p className="text-[20px] font-medium text-[#98A2B3] -tracking-[1.5%] leading-[100%]">
                Worked as a UI/UX Designer in Medianest.Ai alongside a team of
                senior designers on this AI-powered solution aimed at smarter,
                faster content creation.
              </p>
            </div>

            <div className="flex-col">
              <h2 className="text-[40px] text-[#344054] -tracking-[1.5%] leading-[100%] font-semibold mb-[14px]">
                Lead UI UX Designer
              </h2>
              <p className="text-[20px] font-medium text-[#98A2B3] -tracking-[1.5%] leading-[100%]">
                As Lead UI/UX Designer, I am Working on ClearMinds, a mobile
                application specifically for the KKWAF foundation, providing
                users with drug rehabilitation resources , progress tracking and
                a vital resource platform on drug information, enhanced with an
                integrated RAG chatbot for support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
