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
const PricingPlans = ({ setOpen, setMessage }: props) => {
  return (
    <div className="w-full max-w-[1246px] mx-auto py-10 flex flex-col xl:flex-row justify-between items-end">
      {/* Left 2 Cards: Intro + Base (merged container) */}
      <div className="flex flex-col max-xl:mb-10 lg:flex-row bg-white border border-r-0 max-xl:rounded-r-xl rounded-r-none rounded-xl overflow-hidden w-full h-[1100px] lg:h-[560px]  lg:min-w-[610px] shadow-md">
        {/* Intro Card */}
        <div className="relative flex-1 p-[10px] min-h-fit md:p-[32px] ">
          <h3 className="mt-[17px] text-[28px] text-[#231D4F] leading-[100%]">
            $800 <span className="text-[17px]">/ Project</span>
          </h3>
          <p className="mt-4 text-[28px] text-[#231D4F] leading-[100%] font-normal">
            Intro{" "}
            <span className="pl-[19px] text-[15px] tracking-[0px] leading-[100%] text-[#AA253D]">
              5-day delivery
            </span>
          </p>
          <p className="text-[15px] text-[#848199] mt-[14px] mb-[54px] md:mb-[24px] font-medium h-[54px]">
            best simple online presence for individuals, startups, or small
            businesses (info/portfolio).{" "}
          </p>
          <ul className="space-y-[15px] text-[15px] text-[#848199] leading-[100%] tracking-[0px]">
            <li className="flex items-center space-x-[10.65px] h-[22.5px]">
              <Image src={active} alt="" />
              <span>Up to 10 static content pages</span>
            </li>
            <li className="flex items-center space-x-[10.65px] h-[22.5px]">
              <Image src={active} alt="" />{" "}
              <span className=" text-gray-400">Web app friendly design</span>
            </li>
            <li className="flex items-center space-x-[10.65px] h-[22.5px]">
              <Image src={active} alt="" />
              <span>Social media link integration</span>
            </li>
            <li className="flex items-center space-x-[10.65px] h-[22.5px]">
              <Image src={active} alt="" />
              <span className=" text-gray-400">Clean & Responsive layout</span>
            </li>
            <li className="flex items-center space-x-[10.65px] h-[22.5px]">
              <Image src={active} alt="" />
              <span>1 rerun on the design.</span>
            </li>
          </ul>
          <button
            onClick={() => {
              setOpen(true);
              setMessage("Web Development Intro Package");
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
            best for Growing businesses needing a more robust and interactive
            website with some dynamic elements.
          </p>
          <ul className="space-y-[15px] text-[15px] text-[#848199] leading-[100%] tracking-[0px] max-md:mb-20">
            <li className="flex items-center space-x-[10.65px] h-[22.5px]">
              <Image src={active} alt="" />
              <span>Up to 20 static content pages</span>
            </li>
            <li className="flex items-center space-x-[10.65px] h-[22.5px]">
              <Image src={active} alt="" />
              <span>Content management system </span>
            </li>
            <li className="flex items-center space-x-[10.65px] h-[22.5px]">
              <Image src={active} alt="" />
              <span>Integration with basic analytics</span>
            </li>
            <li className="flex items-center space-x-[10.65px] h-[22.5px]">
              <Image src={active} alt="" />
              <span className=" text-gray-400">
                Image galleries or slideshows.
              </span>
            </li>
            <li className="flex items-center space-x-[10.65px] h-[22.5px]">
              <Image src={active} alt="" />
              <span>2 reruns on the design</span>
            </li>
            <li className="flex items-center space-x-[10.65px] h-[22.5px]">
              <Image src={active} alt="" />
              <span>Basic security setup.</span>
            </li>
            <li className="flex items-center space-x-[10.65px] h-[22.5px]">
              <Image src={active} alt="" />
              <span>Social media link integration</span>
            </li>
          </ul>
          <button
            onClick={() => {
              setOpen(true);
              setMessage("Web Development Base Package");
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
            Established organizations needing fully customized websites with
            advanced features and third-party integrations.
          </p>
          <ul className="space-y-[10.65px]  text-[15px] text-white leading-[100%] tracking-[0px]">
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
                Advanced Content management system
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
              <span className="w-[212px]">
                Detailed analytics tracking and reporting setup.(google
                analytics ,Monster Insights etc)
              </span>
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
              <span>Performance optimization</span>
            </li>
            <li className="flex items-start space-x-[8.7px]">
              <span className="w-[21.3px] h-[21.3px] bg-[#0000001A] rounded-[50%] content-center">
                <Image src={check} alt="" className="flex mx-auto" />
              </span>
              <span>Responsive Design</span>
            </li>
          </ul>
        </div>
        <button
          onClick={() => {
            setOpen(true);
            setMessage("Web Development Pro Package");
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
        <p className="mt-4 text-[28px] text-[#231D4F] leading-[100%] flex gap-5 items-center font-normal">
          Enterprise
          <Image src={ai} alt="" className="" />
        </p>
        <p className="text-[15px] text-[#848199] mt-[14px] mb-[35px] font-medium md:w-[253px] h-[72px] ">
          Advanced & Scalable Web Solutions: Expertly built for complex,
          high-impact projects with significant growth potential.
        </p>
        <Image className="max-md:mb-20" src={frame} alt="" />
        <button
          onClick={() => {
            setOpen(true);
            setMessage("Web Development Enterprise Package");
          }}
          className="absolute max-md:w-[90%] bottom-5 mt-[20px] w-full md:w-[220px] max-xl:w-full max-xl:mx-auto ml-[24px]  max-md:mt-10 max-md:pb-[10px] py-3 rounded-full bg-[#AA253D] text-white hover:bg-[#94273b] transition-all duration-200"
        >
          Choose plan
        </button>
      </div>
    </div>
  );
};

export default PricingPlans;
