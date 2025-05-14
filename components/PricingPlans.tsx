import React from "react";
import Image from "next/image";
import active from "@/assets/check-circle-1.svg";
import inactive from "@/assets/check-circle-2.svg";
import check from "@/assets/Path.svg";

const PricingPlans = () => {
  return (
    <div className="w-full max-w-[1246px] mx-auto px-4 py-10 flex flex-col lg:flex-row justify-between items-end">
      {/* Left 2 Cards: Intro + Base (merged container) */}
      <div className="flex flex-col lg:flex-row bg-white border border-r-0 rounded-r-none rounded-xl overflow-hidden w-full h-[480px] lg:w-[77%] shadow-md">
        {/* Intro Card */}
        <div className="flex-1 p-[32px]">
          <h3 className="mt-[17px] text-[28px] text-[#231D4F] leading-[100%]">
            $200 <span className="text-[17px]">/ Project</span>
          </h3>
          <p className="mt-4 text-[28px] text-[#231D4F] leading-[100%] font-normal">
            Intro
          </p>
          <p className="text-[15px] text-[#848199] mt-[14px] mb-[24px] font-medium">
            For most businesses that want to optimize web queries
          </p>
          <ul className="space-y-[15px] text-[15px] text-[#848199] leading-[100%] tracking-[0px]">
            <li className="flex items-start space-x-2">
              <Image src={active} alt="" />
              <span>2 Reruns</span>
            </li>
            <li className="flex items-start space-x-2">
              <Image src={inactive} alt="" />{" "}
              <span className=" text-gray-400">Basic Prototyping</span>
            </li>
            <li className="flex items-start space-x-2">
              <Image src={active} alt="" />
              <span>10 screens</span>
            </li>
            <li className="flex items-start space-x-2">
              <Image src={inactive} alt="" />
              <span className=" text-gray-400">Chat Support</span>
            </li>
            <li className="flex items-start space-x-2">
              <Image src={active} alt="" />
              <span>Responsive Design</span>
            </li>
          </ul>
          <button className="mt-[34px] mb-[35px] w-[220px] mx-auto py-3 rounded-full bg-[#AA253D] text-white hover:bg-[#94273b] transition-all duration-200">
            Choose plan
          </button>
        </div>

        {/* Base Card */}
        <div className="flex-1 p-[32px]">
          <h3 className="mt-[17px] text-[28px] text-[#231D4F] leading-[100%]">
            $312 <span className="text-[17px] font-normal">/ Project</span>
          </h3>
          <p className="mt-4 text-[28px] text-[#231D4F] leading-[100%] font-normal">
            Base
          </p>
          <p className="text-[15px] text-[#848199] mt-[14px] mb-[24px] font-medium">
            For most businesses that want to optimize web queries
          </p>
          <ul className="space-y-[15px] text-[15px] text-[#848199] leading-[100%] tracking-[0px]">
            <li className="flex items-start space-x-2">
              <Image src={active} alt="" />
              <span>3 Reruns + 1 Resend</span>
            </li>
            <li className="flex items-start space-x-2">
              <Image src={active} alt="" />
              <span>Basic Prototyping</span>
            </li>
            <li className="flex items-start space-x-2">
              <Image src={active} alt="" />
              <span>15 screens</span>
            </li>
            <li className="flex items-start space-x-2">
              <Image src={inactive} alt="" />
              <span className=" text-gray-400">Chat Support</span>
            </li>
            <li className="flex items-start space-x-2">
              <Image src={active} alt="" />
              <span>Responsive Design</span>
            </li>
          </ul>
          <button className="mt-[34px] w-[220px] mx-auto mb-[35px] py-3 rounded-full bg-[#AA253D] text-white hover:bg-[#94273b] transition-all duration-200">
            Choose plan
          </button>
        </div>
      </div>

      {/* Pro Card (SEPARATE) */}
      <div className="relative bg-gradient-to-b from-[#AA253D] to-[#5D0554] mb-2 text-white p-[32px] rounded-xl shadow-xl min-w-[311px] h-[527px] flex flex-col justify-between scale-[1.03]">
        <div className="absolute top-[18px] right-[18px]  bg-[#75112E] text-white px-3 py-1 rounded-full text-[10px] font-normal">
          MOST POPULAR
        </div>
        <div className="w-full mt-[25px]">
          <h3 className="text-[36px] leading-[46px] tracking-[0px]">
            $650 <span className="text-[17px] font-normal">/ Project</span>
          </h3>
          <p className="mt-4 text-[28px]">Pro</p>
          <p className="text-[15px] text-white mt-[14px] mb-[22px] font-medium">
            For most businesses that want to optimize web queries
          </p>
          <ul className="space-y-[10px] text-[15px] text-white leading-[100%] tracking-[0px]">
            <li className="flex items-start space-x-2">
              <span className="w-[21.3px] h-[21.3px] bg-[#0000001A] rounded-[50%] content-center">
                <Image src={check} alt="" className="flex mx-auto" />
              </span>
              <span>7 Reruns + 1 Resend</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-[21.3px] h-[21.3px] bg-[#0000001A] rounded-[50%] content-center">
                <Image src={check} alt="" className="flex mx-auto" />
              </span>
              <span>Advanced Prototyping</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-[21.3px] h-[21.3px] bg-[#0000001A] rounded-[50%] content-center">
                <Image src={check} alt="" className="flex mx-auto" />
              </span>
              <span>20 screens</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-[21.3px] h-[21.3px] bg-[#0000001A] rounded-[50%] content-center">
                <Image src={check} alt="" className="flex mx-auto" />
              </span>
              <span>Chat Support</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="w-[21.3px] h-[21.3px] bg-[#0000001A] rounded-[50%] content-center">
                <Image src={check} alt="" className="flex mx-auto" />
              </span>
              <span>Responsive Design</span>
            </li>
          </ul>
        </div>
        <button className="mt-[50px] w-[220px] mx-auto -mb-[10px]  py-3 rounded-full text-[15px] font-normal border-white border text-white hover:border-[2px] transition-all duration-100">
          Choose plan
        </button>
      </div>

      {/* Final Card (Enterprise) — continues merged layout */}
      <div className="bg-white border rounded-xl border-l-0 rounded-l-none p-[32px] w-full lg:w-[42%] h-[480px] shadow-md">
        <h3 className="mt-[17px] text-[28px] text-[#231D4F] leading-[100%]">
          $1200 <span className="text-[17px] font-normal">/ Project</span>
        </h3>
        <p className="mt-4 text-[28px] text-[#231D4F] leading-[100%] font-normal">
          Enterprise
        </p>
        <p className="text-[15px] text-[#848199] mt-[14px] mb-[24px] font-medium">
          For most businesses that want to optimize web queries
        </p>
        <ul className="space-y-[15px] text-[15px] text-[#848199] leading-[100%] tracking-[0px]">
          <li className="flex items-start space-x-2">
            <Image src={active} alt="" />
            <span>Unlimited Reruns + 2 Resends</span>
          </li>
          <li className="flex items-start space-x-2">
            <Image src={active} alt="" />
            <span>Advanced Prototyping + User flow</span>
          </li>
          <li className="flex items-start space-x-2">
            <Image src={active} alt="" />
            <span>35 Screens</span>
          </li>
          <li className="flex items-start space-x-2">
            <Image src={active} alt="" />
            <span>Chat Support + Developer Support</span>
          </li>
          <li className="flex items-start space-x-2">
            <Image src={active} alt="" />
            <span>
              Responsive Design + Quality Assurance Testing For Design
            </span>
          </li>
        </ul>
        <button className="mt-[24px] w-[220px] ml-[24px]  mb-[35px] py-3 rounded-full bg-[#AA253D] text-white hover:bg-[#94273b] transition-all duration-200">
          Choose plan
        </button>
      </div>
    </div>
  );
};

export default PricingPlans;
