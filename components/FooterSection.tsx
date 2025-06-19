"use client";
import Link from "next/link";
import Image from "next/image";
import logo1 from "@/assets/cards/x.svg";
import logo2 from "@/assets/mdi_linkedin.svg";
import linkedin from "@/assets/mdi_linkedin 2.svg";
import arow from "@/assets/up right.svg";
import { useState } from "react";
import logo from "@/assets/cards/A.svg"
import { useRouter } from "next/navigation";

export default function FooterSection() {
  const [hover, setHover] = useState(false);  
  const [hoverlog,setHoverLogo]=useState(true)
  const router=useRouter()

  return (
    <footer className="w-full max-md:mx-auto max-md:w-[95%] mt-1">
      <div className="bg-[#272727] text-white py-12 rounded-t-[24px] max-lg:px-5 ">
        <div className=" md:max-w-[1298px] mx-auto">
          {/* Top section with heading and hire button */}
          <div className="md:flex justify-between items-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold max-md:mb-8">
              Lets Connect there
            </h2>
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={() => router.push(`/hire-us`)}
              className="bg-[#AA253D] cursor-pointer text-[26px] md:text-[26px] leading-[100%] text-nowrap -tracking-[1.5%] hover:bg-[#94273b] text-white px-[10px] md:px-[43px] py-2 md:py-3 justify-center rounded-full flex items-center gap-2 transition-all duration-200"
            >
              Hire us
              <Image
                className={`md:h-[42px] md:w-[42px]   ${
                  hover && "rotate-[45deg]"
                }`}
                src={arow}
                alt=""
              />
            </div>
          </div>

          {/* Divider */}
          <div className="border-t-[2px] border-[#475467] my-[55px]"></div>

          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column */}
            <div>
              {/* Logo and name */}
              <div className="flex items-center gap-3 mb-[34px] text-[20px] leading-[100%] -tracking-[1.5%] h-[86px]">
                <div
                  className={`min-w-[46px] h-[46px] ${
                    !hoverlog && "outline outline-white"
                  } bg-[#AA253D] flex items-center justify-center text-white mr-[4.5px] rounded-[50px] `}
                >
                  <Image className="object-cover" src={logo} alt="logo" />
                </div>
                <div
                  onMouseEnter={() => setHoverLogo(false)}
                  onMouseOut={() => setHoverLogo(true)}
                  onMouseLeave={() => setHoverLogo(true)}
                  className="flex items-center min-h-[60px] transition-all duration-200 cursor-pointer"
                >
                  {hoverlog ? (
                    <span className="text-xl font-semibold">The Apex UI</span>
                  ) : (
                    <div
                      onMouseLeave={() => setHoverLogo(true)}
                      onMouseEnter={() => setHoverLogo(false)}
                      className="flex flex-col gap-[-2px]"
                    >
                      <div className="text-[14px] text-white">Designed by</div>
                      Our Team
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-[#FCFCFD] text-[20px] leading-[100%] -tracking-[1.5%]">
                Follow our work and updates on our
              </p>
              <p className="mb-8 text-[#FCFCFD] text-[20px] leading-[100%] -tracking-[1.5%]">
                social media accounts.
              </p>

              {/* Social icons */}
              <div className="flex gap-x-[13px]">
                <Link href="#" aria-label="WhatsApp">
                  {/* <MessageCircle className="w-5 h-5" /> */}
                  <Image src={logo1} alt={""} />
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  {/* <Linkedin className="w-5 h-5" /> */}
                  <Image src={logo2} alt={""} />
                </Link>
                <Link href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0 0 48 48"
                  >
                    <path d="M44,24H4c0,0.338,0,1.662,0,2c0,11.028,8.972,20,20,20s20-8.972,20-20C44,25.662,44,24.338,44,24z"></path>
                    <circle cx="24" cy="24" r="19" fill="#fff"></circle>
                    <path d="M24,44C12.972,44,4,35.028,4,24S12.972,4,24,4s20,8.972,20,20S35.028,44,24,44z M24,6C14.075,6,6,14.075,6,24	s8.075,18,18,18s18-8.075,18-18S33.925,6,24,6z"></path>
                    <path d="M26.573,29.038h4.921l0.765-4.993h-5.686V21.31c0-2.078,0.675-3.913,2.618-3.913h3.122v-4.363	c-0.549-0.072-1.709-0.234-3.895-0.234c-4.579,0-7.26,2.411-7.26,7.917v3.329h-4.696v4.993h4.696v13.728	C22.093,42.901,23.028,43,24,43c0.873,0,1.727-0.081,2.573-0.198V29.038z"></path>
                  </svg>
                </Link>
                <Link href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="25"
                    height="25"
                    viewBox="0 0 48 48"
                  >
                    <path d="M17,43h14c5.523,0,10-4.477,10-10v-2H7v2C7,38.523,11.477,43,17,43z"></path>
                    <path
                      fill="#fff"
                      d="M32,40H16c-4.418,0-8-3.582-8-8V16c0-4.418,3.582-8,8-8h16c4.418,0,8,3.582,8,8v16	C40,36.418,36.418,40,32,40z"
                    ></path>
                    <path d="M32,41H16c-4.962,0-9-4.038-9-9V16c0-4.962,4.038-9,9-9h16c4.962,0,9,4.038,9,9v16C41,36.962,36.962,41,32,41z M16,9	c-3.86,0-7,3.14-7,7v16c0,3.86,3.14,7,7,7h16c3.86,0,7-3.14,7-7V16c0-3.86-3.14-7-7-7H16z"></path>
                    <path d="M24,15c-4.962,0-9,4.038-9,9s4.038,9,9,9s9-4.038,9-9S28.962,15,24,15z M24,31c-3.86,0-7-3.14-7-7s3.14-7,7-7s7,3.14,7,7	S27.86,31,24,31z"></path>
                    <circle cx="33.5" cy="14.5" r="1.5"></circle>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right column */}
            <div className="flex md:justify-end justify-start">
              <div>
                <h3 className="text-[#AA253D] text-xl font-semibold mb-6">
                  Contact
                </h3>
                <ul className="space-y-4 text-[#FCFCFD] text-[16px] leading-[100%] -tracking-[1.5%]">
                  <li>+92 333 0542400</li>
                  <li>contact@theapexui.com</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom divider */}
          <div className="border-t-[2px] border-[#475467] mt-12"></div>
        </div>
      </div>
      <div className="h-[120px] flex justify-center bg-white">
        {/* <Image src={linkedin} alt="linkedin" /> */}
      </div>
    </footer>
  );
}
