"use client";
import React from "react";
import logo1 from "@/assets/mail.svg";
import logo2 from "@/assets/whatsapp.svg";
import Image from "next/image";
import star from "@/assets/star.svg";
import tick from "@/assets/shield-tick.svg";
import HandLoaderAnimation from "@/components/HandLoaderAnimation"


const Contact = () => {
  return (
    <section id="contact" className="max-w-[1440px] mx-auto max-md:w-[95%]">
      <div className="mt-[98px] text-[42px] md:text-[64px] max-w-[800px] h-[150px] -tracking-[1.5%] leading-[100%] text-center mx-auto">
        Have an Awesome Project Idea?{" "}
        <span className="text-[#AA253D]">Let’s Discuss </span>
      </div>
      <div className="flex justify-center gap-x-[34px] mt-[30px]">
        <div className="w-[78px] h-[78px] flex justify-center items-center rounded-full bg-[#AA253D] hover:bg-[#94273b]">
          <a
            href="mailto:sohrammalik@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={logo1} alt="" />
          </a>
        </div>
        <div className="w-[78px] h-[78px] flex justify-center items-center rounded-full bg-[#AA253D] hover:bg-[#94273b]">
          <a
            href="https://wa.me/923330542400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image className="hover:text-[#AA253D]" src={logo2} alt="" />
          </a>
        </div>
      </div>

      <div className="flex gap-x-[37px] mt-[50px] justify-center mb-[21px] max-w-[446px] mx-auto pl-[2px] max-md:px-5">
        <div className="md:flex gap-x-1">
          <Image src={star} alt="" />
          <span>4.9/5 Average Ratings</span>
        </div>
        <div className="md:flex gap-x-1">
          <Image src={tick} alt="" />
          <span>Certified Product Designer</span>
        </div>
      </div>
      <div className="flex justify-center mb-[16px] lg:ml-[33px] max-h-[168px] mx-auto  items-center ">
        <div className=" flex justify-center items-center h-full content-center mx-auto  max-w-[302px]">
          <HandLoaderAnimation
            loop={true} // The animation will loop
            autoplay={true} // The animation will play automatically
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
