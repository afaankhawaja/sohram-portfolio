"use client";
import React from "react";
import Image from "next/image";
import svg1 from "@/assets/cards/down-circle.svg";
import svg2 from "@/assets/appdev.png";
import PricingPlans from "@/components/AppPricingPlan";
import { useRouter } from "next/navigation";
import back from "@/assets/cards/ep_back.svg"
interface props {
  setOpen: (e: boolean) => void;
  setMessage: (e: string) => void;
}
const AppDevelopement = ({ setOpen, setMessage }: props) => {
  const Router = useRouter();

  return (
    <section
      className="max-w-[1246px] mt-10 mx-auto mb-[26px] max-xl:px-10"
      id="app"
    >
      <button
        onClick={() => {
          Router.push("/#Service");
        }}
        className="mt-2 flex cursor-pointer items-center gap-x-[7px] w-[172px] h-[58px] bg-[#AA253D] hover:bg-[#94273b] text-white text-[24px] font-semibold  pl-4 pr-[21px] py-2 rounded-[30px]"
      >
        <Image src={back} alt="" className="py-[10px]" />
        Go back
      </button>

      <div className="flex justify-between max-xl:flex-col max-md:mb-4">
        <div className="lg:text-[95.57px] text-[40px] leading-[100%] mt-[89px] -tracking-[1.5%] md:w-[523px] md:text-nowrap">
          App <span className="text-[#AA253D]">Development</span>
        </div>
        <div className="flex mt-[10px] lg:-mt-[22px] gap-x-[26px] max-xl:justify-end max-md:flex-col gap-y-[23px]">
          <Image src={svg2} alt="" />
        </div>
      </div>
      <div className="flex text-[14px] md:text-[20px] leading-[100%] mt-[23px] mb-[21px] -tracking-[1.5%] text-[#98A2B3]">
        Drive strategic growth with an app development plan focused on
        functionality and engagement. We excel at creating user experiences that
        elevate your mobile app, resulting in improved user satisfaction and
        tangible progress towards your business objectives.
      </div>
      <PricingPlans setOpen={setOpen} setMessage={setMessage} />
      <div onClick={() => Router.push("#uiux")} className="flex w-full justify-end">
        <Image src={svg1} alt="" className="mt-[43px] rotate-180" />
      </div>
    </section>
  );
};

export default AppDevelopement