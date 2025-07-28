"use client";
import Link from "next/link";
import Image from "next/image";
import arow from "@/assets/up right.svg";
import { useState } from "react";
import logo from "@/assets/cards/A.svg";
import { useRouter } from "next/navigation";

export default function FooterSection() {
  const [hover, setHover] = useState(false);
  const [hoverlog, setHoverLogo] = useState(true);
  const router = useRouter();

  return (
    <footer className="w-full max-md:mx-auto max-md:w-[95%] mt-1">
      <div className="bg-[#171717] text-white py-12 rounded-t-[24px] max-lg:px-5 ">
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
          <div className="border-t-[2px] border-gray-600 my-[55px]"></div>

          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column */}
            <div>
              {/* Logo and name */}
              <div className="flex items-center gap-3 mb-[34px] text-[20px] leading-[100%] -tracking-[1.5%] h-[86px]">
                <div
                  className={`min-w-[46px] h-[46px] ${
                    !hoverlog && ""
                  }  flex items-center justify-center text-white mr-[4.5px] rounded-[50px] `}
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
                Social media.
              </p>

              {/* Social icons */}
              <div className="flex gap-x-[13px]">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="x"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_55331_1391"
                      // style={ "mask-type:luminance"}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <path d="M0 0H24V24H0V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_55331_1391)">
                      <path
                        d="M18.9 1.125H22.5806L14.5406 10.3376L24 22.8759H16.5943L10.7897 15.273L4.15543 22.8759H0.471429L9.07029 13.0187L0 1.12671H7.59429L12.8331 8.07471L18.9 1.125ZM17.6057 20.6679H19.6457L6.48 3.21814H4.29257L17.6057 20.6679Z"
                        fill="white"
                      />
                    </g>
                  </svg>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/the-apex-ui/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.3333 0C22.0406 0 22.7189 0.280951 23.219 0.781048C23.719 1.28115 24 1.95942 24 2.66667V21.3333C24 22.0406 23.719 22.7189 23.219 23.219C22.7189 23.719 22.0406 24 21.3333 24H2.66667C1.95942 24 1.28115 23.719 0.781048 23.219C0.280951 22.7189 0 22.0406 0 21.3333V2.66667C0 1.95942 0.280951 1.28115 0.781048 0.781048C1.28115 0.280951 1.95942 0 2.66667 0H21.3333ZM20.6667 20.6667V13.6C20.6667 12.4472 20.2087 11.3416 19.3936 10.5264C18.5784 9.71128 17.4728 9.25333 16.32 9.25333C15.1867 9.25333 13.8667 9.94667 13.2267 10.9867V9.50667H9.50667V20.6667H13.2267V14.0933C13.2267 13.0667 14.0533 12.2267 15.08 12.2267C15.5751 12.2267 16.0499 12.4233 16.3999 12.7734C16.75 13.1235 16.9467 13.5983 16.9467 14.0933V20.6667H20.6667ZM5.17333 7.41333C5.76742 7.41333 6.33717 7.17733 6.75725 6.75725C7.17733 6.33717 7.41333 5.76742 7.41333 5.17333C7.41333 3.93333 6.41333 2.92 5.17333 2.92C4.57571 2.92 4.00257 3.1574 3.57999 3.57999C3.1574 4.00257 2.92 4.57571 2.92 5.17333C2.92 6.41333 3.93333 7.41333 5.17333 7.41333ZM7.02667 20.6667V9.50667H3.33333V20.6667H7.02667Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link
                  href="https://www.facebook.com/share/1B8i4TXhaB/"
                  aria-label="facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0C5.39999 0 0 5.40964 0 12.0723C0 18.0964 4.39199 23.0964 10.128 24V15.5663H7.07999V12.0723H10.128V9.40964C10.128 6.38554 11.916 4.72289 14.664 4.72289C15.972 4.72289 17.34 4.95181 17.34 4.95181V7.92771H15.828C14.34 7.92771 13.872 8.85542 13.872 9.80723V12.0723H17.208L16.668 15.5663H13.872V24C16.6997 23.5516 19.2746 22.103 21.1319 19.9157C22.9892 17.7284 24.0064 14.9466 24 12.0723C24 5.40964 18.6 0 12 0Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/theapexui?igsh=dmE5MzA3cTZ3dHN4"
                  aria-label="instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6667 4.83301C20.4952 4.83301 21.1667 5.50458 21.1667 6.33301C21.1667 7.16144 20.4952 7.83301 19.6667 7.83301C18.8383 7.83301 18.1667 7.16144 18.1667 6.33301C18.1667 5.50458 18.8383 4.83301 19.6667 4.83301Z"
                      stroke="white"
                    />
                    <path
                      d="M18.3333 1C22.0133 1 25 3.98667 25 7.66667V18.3333C25 22.0133 22.0133 25 18.3333 25H7.66667C3.98667 25 1 22.0133 1 18.3333V7.66667C1 3.98667 3.98667 1 7.66667 1H13H18.3333Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.0001 7.66699C15.9467 7.66699 18.3334 10.0537 18.3334 13.0003C18.3334 15.947 15.9467 18.3337 13.0001 18.3337C10.0534 18.3337 7.66675 15.947 7.66675 13.0003C7.66675 10.0537 10.0534 7.66699 13.0001 7.66699Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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
          <div className="border-t-[2px] border-gray-600 mt-12"></div>
        </div>
      </div>
    </footer>
  );
}
