"use client";
import Image from "next/image";
import webdev from "@/assets/cards/the cards/Updated service cards svg/Web development glass.svg";
import uiux from "@/assets/cards/the cards/Updated service cards svg/UI UX glass.svg";
import appdev from "@/assets/cards/the cards/Updated service cards svg/App development glass.svg";
import webdevhover from "@/assets/cards/the cards/Updated service cards svg/Web development red glass.svg";
import uiuxhover from "@/assets/cards/the cards/Updated service cards svg/UI UX red glass.svg";
import appdevhover from "@/assets/cards/the cards/Updated service cards svg/App development red glass.svg";

import { useState } from "react";
import bg from "@/assets/testimonial.jpg";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, SplitText);
const services = [
  {
    title: "UI UX Design",
    image: uiux,
    hoverImage: uiuxhover,
    alt: "User flow and Prototyping illustration",
    id: 0,
    path: "/hire-us",
  },
  {
    title: "Web Development",
    image: webdev,
    hoverImage: webdevhover,
    alt: "Web Design illustration",
    id: 1,
    path: "/hire-us",
  },
  {
    title: "App Development",
    image: appdev,
    hoverImage: appdevhover,
    alt: "Application Design illustration",
    id: 2,
    path: "/hire-us",
  },
];

export default function Services() {
  useGSAP(() => {
    SplitText.create("#ServiceHeading", {
      type: "words, chars",
      onSplit(self) {
        // runs every time it splits
        gsap.from(self.chars, {
          scrollTrigger: {
            trigger: "#ServiceHeading",
            start: "top 80%",
          },
          duration: 1,
          x: -50,
          autoAlpha: 0,
          stagger: 0.05,
        });
      },
    });
  });

  const router = useRouter();

  return (
    <div
      className="relative pb-5 w-full mx-auto xl:content-center max-w-[1440px] min-h-[100vh] overflow-hidden"
      id="Services"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={bg}
          alt=""
          fill
          className="rounded-[50px] object-cover"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 md:px-[60px] px-4 pt-[60px] pb-[60px]">
        {/* Header Section */}
        <div className="flex justify-between max-lg:flex-col max-lg:items-center gap-y-5 mb-8 lg:mb-14">
          <h2
            id="ServiceHeading"
            className="md:text-[48px] text-[32px] text-white font-bold leading-[100%] -tracking-[1.5%] mt-[56px]"
          >
            Our <span className="text-[#AA253D]">Services</span>
          </h2>
          <p className="text-white text-[14px] md:text-[20px] font-medium leading-[130%] -tracking-[1.5%] max-xl:max-w-[475px] max-w-[675px] lg:mt-[37px]">
            We deliver exceptional user experiences for web, web applications,
            and mobile applications. Our expert UI/UX design seamlessly
            integrates with full-stack development for both web and mobile
            platforms, creating powerful and intuitive digital solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 w-full">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative group cursor-pointer max-md:w-[100%] max-lg:w-[60%] max-lg:mx-auto w-full aspect-[4/5] min-h-[400px] lg:min-h-[450px] xl:min-h-[508px]"
              onClick={() => router.push(service.path)}
            >
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <Image
                  src={service.hoverImage}
                  alt={service.alt + " hover"}
                  fill
                  className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
