"use client";
import React from "react";
import Image from "next/image";
import svg1 from "@/assets/Frame (1).svg";
import svg2 from "@/assets/Frame.svg";
import PricingPlans from "./PricingPlans";
import { useRouter } from "next/navigation";

const UIAndUX = () => {
  const Router = useRouter();
  return (
    <section className="max-w-[1246px] mt-10 mx-auto mb-[26px]">
      <button
        onClick={() => {
          Router.push("/");
        }}
        className="mt-2 flex cursor-pointer items-center gap-x-[10px] font-semibold bg-[#AA253D] text-white w-fit px-3 py-2 rounded-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-undo2-icon lucide-undo-2"
        >
          <path d="M9 14 4 9l5-5" />
          <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
        </svg>
        Go back
      </button>

      <div className="flex justify-between ">
        <div className="text-[95.57px] leading-[100%] mt-[68px] -tracking-[1.5%] w-[523px] text-nowrap">
          UI UX <span className="text-[#AA253D]">Design</span>
        </div>
        <div className="flex mt-[22px] gap-x-[26px]">
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
      <button
        onClick={() => {
          Router.push("/");
        }}
        className="mt-2 flex justify-end w-full cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#AA253D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-undo2-icon lucide-undo-2"
        >
          <path d="M9 14 4 9l5-5" />
          <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" />
        </svg>
      </button>
    </section>
  );
};

export default UIAndUX;
