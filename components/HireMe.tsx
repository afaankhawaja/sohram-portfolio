import React from "react";
import Image from "next/image";

const HireMe = () => {
  return (
    <section id="Introduction" className="w-full mx-auto max-w-[1440px] max-md:w-[95%] h-full md:mt-20">
      <div className="lg:h-[806px] bg-[#F2F4F7] rounded-[50px] mt-5 w-[95%] mx-auto flex flex-row-reverse max-lg:flex-col max-lg:gap-y-5 justify-center items-center gap-x-2">
        {/* <Image width={603} height={600} src={logo} alt=''/> */}

        <div className="flex w-[80%] h-[60%] lg:w-[630px] md:h-[448px] rounded-lg max-lg:mt-10">
          <video
            poster="/assets/poster-image.png"
            controls
            className="rounded-[20px] lg:h-[448px] w-[630px]"
          ></video>
        </div>
        <div className="flex flex-col max-md:w-[80%] md:max-w-[696px] max-lg:mt-10 max-lg:mb-10 px-5">
          <div className="md:text-[64px] text-[20px] font-bold  max-w-[800px] -tracking-[1.5%] leading-[100%] text-left">
            Our <span className="text-[#AA253D]">Introduction</span>
          </div>
          <p className="my-[26px] text-[14px] md:text-[20px] text-[#98A2B3] -tracking-[1.5%] leading-[100%]">
          Watch how we craft impactful digital experiences. We are a dedicated UI/UX design and full-stack development agency, building intuitive web and mobile applications that drive results. See our passion for user-centered design and robust coding in action.
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

            <div className="flex flex-col gap-5 gap-y-[10px]">
              <p className="-tracking-[1.5%] leading-[100%] text-[36px] font-medium text-[#1D2939]">
                30+
              </p>
              <p className="-tracking-[1.5%] leading-[100%]  text-[14px] md:text-[20px] font-normal text-[#667085] md:w-[203px]">
                Clients who have had a positive experience
              </p>
            </div>
          </div>
          <button className="max-w-[215px] max-md:min-w-[180px]  max-md:mx-auto max-h-[104px] text-[#151515] border border-[#151515] rounded-[32px] mt-[47px] md:text-[32px] font-semibold -tracking-[1.5%] leading-[100%] text-center content- md:px-[59px] px-[20px] md:py-[33px] py-[15px] hover:bg-[#AA253D] transition-all duration-300 hover:text-white">
            Hire us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
