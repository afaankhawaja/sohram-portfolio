"use client";
import React from "react";
import Image from "next/image";
import svg1 from "@/assets/Frame (1).svg";
import svg2 from "@/assets/Frame.svg";
import PricingPlans from "./PricingPlans";
import { useRouter } from "next/navigation";
import back from "@/assets/cards/ep_back.svg"

const UIAndUX = () => {
  const Router = useRouter();
  return (
    <section className="max-w-[1246px] mt-10 mx-auto mb-[26px] max-xl:px-10">
      <button
        onClick={() => {
          Router.push("/");
        }}
        className="mt-2 flex cursor-pointer items-center gap-x-[7px] w-[172px] h-[58px] bg-[#AA253D] hover:bg-[#94273b] text-white text-[24px] font-semibold  pl-4 pr-[21px] py-2 rounded-[30px]"
      >
        <Image src={back} alt="" className="py-[10px]"/>
        Go back
      </button>

      <div className="flex justify-between max-xl:flex-col ">
        <div className="text-[95.57px] leading-[100%] mt-[68px] -tracking-[1.5%] w-[523px] text-nowrap">
          UI UX <span className="text-[#AA253D]">Design</span>
        </div>
        <div className="flex mt-[22px] gap-x-[26px] max-xl:justify-end max-md:flex-col gap-y-[23px]">
          <Image src={svg2} alt="" />
          <Image src={svg1} alt="" />
        </div>
      </div>
      <div className="flex text-[20px] leading-[100%] mt-[23px] mb-[21px] -tracking-[1.5%] text-[#98A2B3]">
        As a Lead UI/UX Designer, I manage the full product design lifecycle,
        including rigorous Design QA, functionality, and bug testing. I've led
        mobile app design for sensitive areas (ClearMinds w/ RAG AI) and
        contributed to AI platforms (Medianest). I deliver impactful,
        user-centered products from concept to completion.
      </div>
      <PricingPlans />
    </section>
  );
};

export default UIAndUX;
