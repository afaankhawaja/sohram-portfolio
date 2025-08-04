"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import con from "@/assets/cards/con.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);
const HireMe = () => {
  const router = useRouter();
  const clientsRef = useRef<HTMLDivElement>(null);
  const membersRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    SplitText.create("#introText", {
      type: "lines",
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.lines, {
          scrollTrigger: {
            trigger: "#Introduction",
            start: "top 80%",
            end: "70% 60%",
            scrub: true,
          },
          duration: 1,
          y: 50,
          autoAlpha: 0,
          stagger: 0.05,
          ease: "elastic.inOut",
        });
      },
    });
    const clients = { value: 0 };
    gsap.to(clients, {
      value: 30,
      duration: 2,
      scrollTrigger: {
        trigger: "#introText",
        start: "top 60%",
        end: "100% 35%",
        scrub: true,
        markers: true,
      },
      onUpdate: () => {
        if (!clientsRef.current) return;
        clientsRef.current.innerText = `${Math.round(clients.value)} +`;
      },
    });
    const members = { value: 0 };
    gsap.to(members, {
      value: 10,
      duration: 2,
      scrollTrigger: {
        trigger: "#introText",
        start: "top 60%",
        end: "100% 35%",
        scrub: true,
        markers: true,
      },
      onUpdate: () => {
        if (!membersRef.current) return;
        membersRef.current.innerText = `${Math.round(members.value)} +`;
      },
    });
  });

  return (
    <section
      id="Introduction"
      className="w-full mx-auto max-w-[1440px] max-md:w-[100%] h-full mt-3 max-md:mt-20"
    >
      <div className="lg:h-[806px] bg-[#F2F4F7] rounded-[50px] w-[100%] mx-auto flex flex-row-reverse max-lg:flex-col max-lg:gap-y-5 justify-center items-center gap-x-2">
        {/* VIDEO CONTAINER */}
        <div className="flex mx-auto w-[80%] h-[60%] lg:w-[630px] md:h-[448px] rounded-lg max-lg:mt-10 overflow-hidden shadow-lg">
          <video
            src="/videos/intro.mp4"
            poster="/assets/poster-image.png"
            controls
            preload="metadata"
            className="rounded-[20px] object-cover w-full h-full"
          >
            Sorry, your browser doesn’t support embedded videos.
          </video>
        </div>

        {/* TEXT + STATS + BUTTON */}
        <div className="flex flex-col max-md:w-[80%] mx-auto -mt-2 lg:max-w-[696px] max-lg:mt-10 max-lg:mb-10 px-5">
          <div
            id="introText"
            className="md:text-[64px] text-[28px] font-bold md:max-w-[800px] -tracking-[1.5%] leading-[100%] text-left"
          >
            Our <span className="text-[#AA253D]">Introduction</span>
          </div>
          <p
            id="introText"
            className="mt-[26px] mb-[50px] text-[14px] md:text-[20px] text-[#98A2B3] -tracking-[1.5%] leading-[100%]"
          >
            Watch how we craft impactful digital experiences. We are a dedicated
            UI/UX design and full-stack development agency, building intuitive
            web and mobile applications that drive results. See our passion for
            user-centered design and robust coding in action.
          </p>

          <div className="flex gap-x-2">
            <div className="flex flex-col gap-5 gap-y-[10px] w-[343px] mt-4">
              <p
                id="members"
                ref={membersRef}
                className="-tracking-[1.5%] leading-[100%] text-[36px] font-medium text-[#1D2939]"
              >
                10+
              </p>
              <p className="-tracking-[1.5%] leading-[100%] text-[14px] md:text-[20px] font-normal text-[#667085]">
                Team members
              </p>
            </div>

            <div className="flex flex-col gap-y-[2px]">
              <Image src={con} alt="icon" className="-ml-2" />
              <div className="flex flex-col gap-5 gap-y-[10px]">
                <p
                  id="clients"
                  ref={clientsRef}
                  className="-tracking-[1.5%] leading-[100%] text-[36px] font-medium text-[#1D2939]"
                >
                  30+
                </p>
                <p className="-tracking-[1.5%] leading-[100%] text-[14px] md:text-[20px] font-normal text-[#667085] md:w-[203px]">
                  Clients who have had a positive experience
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => router.push(`/hire-us`)}
            className="max-w-[215px] text-nowrap max-md:min-w-[180px] max-md:mx-auto max-h-[104px] text-[#151515] border border-[#151515] rounded-[32px] mt-[25px] md:text-[32px] font-semibold -tracking-[1.5%] leading-[100%] text-center md:px-[59px] px-[20px] md:py-[33px] py-[15px] hover:bg-[#AA253D] transition-all duration-300 hover:text-white"
          >
            Hire us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
