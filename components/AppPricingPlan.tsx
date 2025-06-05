import React from "react";
import Image from "next/image";
import active from "@/assets/check-circle-1.svg";
import check from "@/assets/Path.svg";
import frame from "@/assets/cards/custom-card.svg"
import ai from "@/assets/cards/Ai powered 1.svg"
interface props {
  setOpen: (e: boolean) => void;
  setMessage: (e: string) => void;
}
const AppPricingPlan = ({ setOpen, setMessage }: props) => {
  return (
    <div className="w-full max-w-[1246px] mx-auto py-10 flex flex-col xl:flex-row justify-between items-end">
      {/* Left 2 Cards: Intro + Base (merged container) */}
      <div className="flex flex-col max-xl:mb-10 lg:flex-row bg-white border border-r-0 max-xl:rounded-r-xl rounded-r-none rounded-xl overflow-hidden w-full h-[1100px] lg:h-[560px]  lg:min-w-[610px] shadow-md">
        {/* Intro Card */}
        <div className="relative flex-1 p-[10px] min-h-fit md:p-[32px] ">
          <h3 className="mt-[17px] text-[28px] text-[#231D4F] leading-[100%]">
            $850 <span className="text-[17px]">/ Project</span>
          </h3>
          <p className="mt-4 text-[28px] text-[#231D4F] leading-[100%] font-normal">
            Intro{" "}
            <span className="pl-[19px] text-[15px] tracking-[0px] leading-[100%] text-[#AA253D]">
              10-day delivery
            </span>
          </p>
          <p className="text-[15px] text-[#848199] mt-[14px] mb-[54px] md:mb-[24px] font-medium h-[54px]">
            Ideal startups, small businesses, or those looking to test a new app
            idea with essential features.
          </p>
          <ul className="space-y-[15px] text-[15px] text-[#848199] leading-[100%] tracking-[0px]">
            <li className="flex items-center space-x-[10.65px] h-[22.5px]">
              <Image src={active} alt="" />
              <span>Concept Validation & Scope</span>
            </li>
            <li className="flex items-center space-x-[10.65px] h-[22.5px]">
              <Image src={active} alt="" />{" "}
              <span className=" text-[#848199]">Upto 10 screens</span>
            </li>
            <li className="flex items-center space-x-[10.65px] h-[22.5px]">
              <Image src={active} alt="" />
              <span>Core functionalities</span>
            </li>
            <li className="flex items-start space-x-[10.65px] h-[22.5px]">
              <Image src={active} alt="" />
              <span className="leading-[110%] tracking-[0px] text-[#848199]">
                Single platform deployment (iOS or Android)
              </span>
            </li>
            <li className="flex items-start space-x-[10.65px] pt-1.5 h-[22.5px]">
              <Image src={active} alt="" />
              <span>Basic testing and quality assurance</span>
            </li>
            <li className="flex items-start space-x-[10.65px] pt-2 h-[22.5px]">
              <Image src={active} alt="" />
              <span>App/Play store submission assistance </span>
            </li>
          </ul>
          <button
            onClick={() => {
              setOpen(true);
              setMessage("App Development Intro Package");
            }}
            className="absolute bottom-8 md:bottom-5 mt-[14px] md:mt-[34px] w-[90%] md:w-[220px] mx-auto py-3 rounded-full bg-[#AA253D] text-white hover:bg-[#94273b] transition-all duration-200"
          >
            Choose plan
          </button>
        </div>

        {/* Base Card */}
        <div className="relative flex-1 p-[10px] max-md:-mt-5 md:p-[32px]">
          <h3 className="md:mt-[17px] mt-6 text-[28px] text-[#231D4F] leading-[100%]">
            $1200 <span className="text-[17px] font-normal">/ Project</span>
          </h3>
          <p className="mt-4 text-[28px] text-[#231D4F] leading-[100%] font-normal">
            Base{" "}
            <span className="ml-[19px] text-[15px] tracking-[0px] leading-[100%] text-[#AA253D]">
              15-day delivery
            </span>
          </p>
          <p className="text-[15px] text-[#848199] mt-[14px] mb-[45px] md:mb-[24px] font-medium  md:w-[253px] h-[54px]">
            Best for businesses aiming for a more robust and scalable solution
            with a broader set of features.
          </p>
          <ul className="space-y-[15px] text-[15px] text-[#848199] leading-[100%] tracking-[0px] max-md:mb-20">
            <li className="flex items-center space-x-[10.65px] h-[22.5px]">
              <Image src={active} alt="" />
              <span>Concept Validation & Scope</span>
            </li>
            <li className="flex items-center space-x-[10.65px] h-[22.5px]">
              <Image src={active} alt="" />
              <span>Upto 20 screens</span>
            </li>
            <li className="flex items-center space-x-[10.65px] h-[22.5px]">
              <Image src={active} alt="" />
              <span>Integration with basic analytics</span>
            </li>
            <li className="flex items-start space-x-[10.65px] h-[22.5px]">
              <Image src={active} alt="" />
              <span className=" text-[#848199]">
                Cross platform deployment (ios & android)
              </span>
            </li>
            <li className="flex items-start pt-1 space-x-[10.65px] h-[22.5px]">
              <Image src={active} alt="" />
              <span>Admin panel for content management</span>
            </li>
            <li className="flex items-start pt-1 space-x-[10.65px] h-[22.5px]">
              <Image src={active} alt="" />
              <span>Comprehensive testing across multiple devices</span>
            </li>
            <li className="flex items-start pt-1 space-x-[10.65px] h-[22.5px]">
              <Image src={active} alt="" />
              <span>App/Play store submission assistance </span>
            </li>
          </ul>
          <button
            onClick={() => {
              setOpen(true);
              setMessage("App Development Base Package");
            }}
            className="absolute bottom-5 mt-[34px] w-[90%] md:w-[220px] mx-auto py-3 rounded-full bg-[#AA253D] text-white hover:bg-[#94273b] transition-all duration-200"
          >
            Choose plan
          </button>
        </div>
      </div>

      {/* Pro Card (SEPARATE) */}
      <div className="relative max-xl:mb-10 bg-gradient-to-b from-[#AA253D] to-[#5D0554] mb-2 text-white p-[10px] md:p-[32px] rounded-xl shadow-xl max-xl:w-[100%] w-[100%] md:min-w-[311px] md:h-[607px] max-md:pb-20 flex flex-col justify-between scale-[1.03]">
        <div className="absolute top-[18px] right-[18px]  bg-[#75112E] text-white px-3 py-1 rounded-full text-[10px] font-normal">
          MOST POPULAR
        </div>
        <div className="w-full mt-[15px]">
          <h3 className="text-[36px] leading-[46px] tracking-[0px]">
            $1800 <span className="text-[17px] font-normal">/ Project</span>
          </h3>
          <p className="mt-2 text-[28px]">
            Pro{" "}
            <span className="ml-[19px] text-[15px] tracking-[0px] leading-[100%] text-white">
              25-day delivery
            </span>
          </p>
          <p className="text-[15px] text-white mt-[14px] mb-[22px] font-medium md:w-[284px]">
            Established organizations requiring a comprehensive application with
            complex features and integrations..
          </p>
          <ul className="space-y-[10.65px]  text-[15px] text-white leading-[105%] tracking-[0px]">
            <li className="flex items-start space-x-[8.7px]">
              <span className="w-[21.3px] h-[21.3px] bg-[#0000001A] rounded-[50%] content-center">
                <Image src={check} alt="" className="flex mx-auto" />
              </span>
              <span className="w-[212px]">
                Unlimited content pages and complex layouts
              </span>
            </li>
            <li className="flex items-start space-x-[8.7px]">
              <span className="w-[21.3px] h-[21.3px] bg-[#0000001A] rounded-[50%] content-center">
                <Image src={check} alt="" className="flex mx-auto" />
              </span>
              <span className="w-[212px]">
                Complex integrations (e.g., payment gateways, external APIs)
              </span>
            </li>
            <li className="flex items-start space-x-[8.7px]">
              <span className="w-[21.3px] h-[21.3px] bg-[#0000001A] rounded-[50%] content-center">
                <Image src={check} alt="" className="flex mx-auto" />
              </span>
              <span className="w-[212px]">
                Advanced functionality (Chat systems, Live features etc)
              </span>
            </li>
            <li className="flex items-start space-x-[8.7px]">
              <span className="w-[21.3px] h-[21.3px] bg-[#0000001A] rounded-[50%] content-center">
                <Image src={check} alt="" className="flex mx-auto" />
              </span>
              <span className="w-[212px]">Real-time data synchronization</span>
            </li>

            <li className="flex items-start space-x-[8.7px]">
              <span className="w-[21.3px] h-[21.3px] bg-[#0000001A] rounded-[50%] content-center">
                <Image src={check} alt="" className="flex mx-auto" />
              </span>
              <span>Enhanced security measures.</span>
            </li>
            <li className="flex items-start space-x-[8.7px]">
              <span className="w-[21.3px] h-[21.3px] bg-[#0000001A] rounded-[50%] content-center">
                <Image src={check} alt="" className="flex mx-auto" />
              </span>
              <span>App/Play store submission assistance </span>
            </li>
          </ul>
        </div>
        <button
          onClick={() => {
            setOpen(true);
            setMessage("App Development Pro Package");
          }}
          className="absolute max-md:-bottom-4 max-md:w-[90%] bottom-8  md:w-[220px] max-xl:w-full mx-auto md:-mb-[10px] max-md:mb-10  py-3 rounded-full text-[15px] font-normal border-white border text-white hover:border-[2px] transition-all duration-100 hover:bg-gradient-to-r from-[#dc2430] to-[#7b4397]"
        >
          Choose plan
        </button>
      </div>

      {/* Final Card (Enterprise) — continues merged layout */}
      <div className="relative bg-white border rounded-xl border-l-0 rounded-l-none max-xl:rounded-l-xl p-[10px] md:p-[32px] ml-[6px] w-full max-xl:w-[100%] md:h-[560px] shadow-md">
        <h3 className="mt-[17px] text-[28px] text-[#231D4F] leading-[100%]">
          Custom quote{" "}
          <span className="text-[17px] font-normal">/ Project</span>
        </h3>
        <p className="mt-4 text-[28px] text-[#231D4F] leading-[100%] md:flex gap-5 items-center font-normal">
          Enterprise
          <Image src={ai} alt="" className="max-md:mt-3" />
        </p>
        <p className="text-[15px] text-[#848199] mt-[14px] mb-[55px] font-medium md:w-[253px] h-[72px] ">
          Large organizations, complex business models, or those needing a
          highly customized, high-performance solution with ongoing strategic
          partnership.
        </p>
        <Image className="max-md:mb-20 max-w-[214px] max-h-[185px]" src={frame} alt="" />
        <button
          onClick={() => {
            setOpen(true);
            setMessage("App Development Enterprise Package");
          }}
          className="absolute max-md:w-[90%] bottom-5 mt-[20px] w-full md:w-[220px] max-xl:w-full max-xl:mx-auto ml-[24px]  max-md:mt-10 max-md:pb-[10px] py-3 rounded-full bg-[#AA253D] text-white hover:bg-[#94273b] transition-all duration-200"
        >
          Choose plan
        </button>
      </div>
    </div>
  );
};

export default AppPricingPlan;
