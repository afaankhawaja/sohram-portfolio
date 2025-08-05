"use client";
import Image from "next/image";
import WelcomeImage from "@/assets/welcome.svg";
import { useState } from "react";
import clsx from "clsx";
import arow from "@/assets/up right.svg";
import { useRouter } from "next/navigation";
import bg from "@/assets/hero-image.png";
import ai from "@/assets/cards/ailogo.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);
export default function Hero() {
  const [activeTab, setActiveTab] = useState("Portfolio");
  const [hoverTab, setHoverTab] = useState(null);
  const router = useRouter();

  const isTabActive = (tabName) => {
    if (hoverTab !== null) {
      return hoverTab === tabName;
    }
    return activeTab === tabName;
  };

  // Build the Tailwind classes for each button
  const buttonClasses = (tabName) =>
    `${isTabActive(tabName) ? "bg-[#AA253D]" : "bg-transparent"}`;

  useGSAP(() => {
    SplitText.create("#Text", {
      type: "words",
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.words, {
          delay: 1,
          duration: 2.5,
          y: 100,
          autoAlpha: 0,
          stagger: 0.05,
          ease: "bounce.inOut",
        });
      },
    });
  });
  return (
    <div className="max-w-full w-[1298px] mx-auto max-md:w-[85%] max-md:px-0 flex flex-col items-center mt-[37px]">
      <div className="relative w-full flex flex-col">
        {/* Welcome text with decoration */}
        <div id="welcomeText" className="relative mb-2 mx-auto opacity-0">
          <Image src={WelcomeImage} alt="Decoration" className="" priority />
        </div>

        {/* Main heading */}

        <div className="lg:flex max-lg:flex-col max-lg:space-y-4 max-lg:mx-auto w-[100%] lg:justify-between mt-[25px]">
          <div id="heroText" className="md:w-[531px] max-lg:mb-20">
            <div
              id="Text"
              className="lg:text-[80px] text-[60px] font-semibold leading-[100%] -tracking-[0%] md:w-[531px] pb-5 h-fit w-full"
            >
              A Design that delights &{" "}
              <span className="text-[#AA253D]">a Code that performs.</span>
              <br />
            </div>
            <div className="text-[12px] md:text-[22px] md:leading-[37px] text-black max-md:mb-5 max-w-screen">
              Our Design agency helps businesses grow and succeed through a
              range of services including development services for web and
              applications .
            </div>
          </div>

          <div
            id="heroImage"
            className="relative opacity-0 mb-[74px] max-lg:mx-auto  md:max-w-[627px] "
          >
            <Image
              src={bg}
              alt="Sohram"
              width={627}
              height={524}
              className="md:w-[627px] max-lg:mb-5 "
            />
            <Image
              className="absolute -top-16 -translate-x-[50%] left-[50%] "
              src={ai}
              alt=""
            />
            <div className="absolute bottom-[38px] justify-center items-center flex left-[50%] -translate-x-[50%]  gap-x-[10px] backdrop-blur-[15px] mt-8 border-[2px]  text-[14px] md:text-[26px] font-medium leading-[100%] -tracking-[1.5%] border-[#C9C9C9] rounded-[50px] md:p-[10px] h-[60.5px] md:h-[82px] md:w-[367px] max-md:w-[70%]  transition-all duration-300">
              <button
                onMouseEnter={() => setHoverTab("Portfolio")}
                onMouseLeave={() => setHoverTab(null)}
                onClick={() => {
                  setActiveTab("Portfolio");
                  router.push("#Portfolio");
                }}
                className={clsx(
                  buttonClasses("Portfolio"),
                  `md:min-w-[135px] max-md:w-[45%] md:px-8 text-white rounded-full max-md:h-[50px] md:h-[62px] flex items-center justify-center gap-2 transition-all duration-300  text-nowrap hover:w-[208px] max-md:hover::w-[45%]${
                    activeTab === "Portfolio" &&
                    "w-[208px] max-md:ml-[3px] max-md:w-[55%]"
                  } ${hoverTab === "Hire me" && "w-[135px] max-md:w-[45%]"}`,
                )}
              >
                Portfolio
                {activeTab === "Portfolio"
                  ? (hoverTab == "Portfolio" || hoverTab == null) && (
                      <Image src={arow} alt="" className="max-md:hidden" />
                    )
                  : hoverTab == "Portfolio" && <Image src={arow} alt="" />}
              </button>

              <button
                onMouseEnter={() => setHoverTab("Hire me")}
                onMouseLeave={() => setHoverTab(null)}
                onClick={() => {
                  setActiveTab("Hire me");
                  router.push("/hire-us");
                }}
                className={clsx(
                  buttonClasses("Hire me"),
                  `md:min-w-[129px] max-md:w-[45%] text-white rounded-full max-md:mx-[3px] max-md:h-[50px] md:h-[62px] flex items-center justify-center gap-2 transition-all duration-300  text-nowrap hover:w-[202px] max-md:hover::w-[45%]${
                    activeTab === "Hire me" &&
                    "w-[202px] max-md:mr-[5px] max-md:w-[45%]"
                  } ${
                    hoverTab === "Portfolio" &&
                    "w-[129px] max-md:mr-[20px]  max-md:w-[45%]"
                  }`,
                )}
              >
                Hire us
                {activeTab === "Hire me"
                  ? (hoverTab === "Hire me" || hoverTab == null) && (
                      <Image src={arow} alt="" />
                    )
                  : hoverTab === "Hire me" && (
                      <Image src={arow} alt="" className="max-md:hidden" />
                    )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
