import Link from "next/link"
import { ArrowUpRight} from "lucide-react"
import Image from "next/image"
import logo1 from "@/assets/whatsapp-icon.svg"
import logo2 from "@/assets/mdi_linkedin.svg"
import { log } from "node:util"
import linkedin from "@/assets/mdi_linkedin 2.svg"
import arow from "@/assets/up right.svg"

export default function FooterSection() {
  return (
    <footer className="w-full max-xl:px-5 mt-5">
    <div className="bg-[#272727] text-white py-12 rounded-t-[24px] ">
      <div className=" max-w-[1298px] mx-auto">
        {/* Top section with heading and hire button */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold">Lets Connect there</h2>
          <Link
            href="#contact"
            className="bg-rose-700 hover:bg-rose-800 text-white px-[43px] py-3 rounded-full flex items-center gap-2 transition-colors"
          >
            <span className="text-[26px] leading-[100%] -tracking-[1.5%]">Hire us</span><Image
            className="h-[42px] w-[42px]"
          src={arow}
          alt=""
          />
          </Link>
        </div>

        {/* Divider */}
        <div className="border-t-[2px] border-[#475467] my-[55px]"></div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column */}
          <div>
            {/* Logo and name */}
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-rose-700 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                SM
              </div>
              <span className="text-xl font-semibold">UI UX Portfolio</span>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-8 max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
            </p>

            {/* Social icons */}
            <div className="flex gap-1">
              <Link
                href="#"
                aria-label="WhatsApp"
              >
                {/* <MessageCircle className="w-5 h-5" /> */}
                <Image src={logo1} alt={''}/>
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
              >
                {/* <Linkedin className="w-5 h-5" /> */}
                <Image src={logo2} alt={''}/>
              </Link>
            </div>
          </div>

          {/* Right column */}
          <div className="flex justify-end">
            <div>
              <h3 className="text-rose-500 text-xl font-semibold mb-6">Contact</h3>
              <ul className="space-y-4 text-gray-300">
                <li>+92 333 0542400</li>
                <li>sohrammalik@gmail.com</li>
                <li>fawziulux.com</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="border-t-[2px] border-[#475467] mt-12"></div>
      </div>   
    </div>
    <div className="h-[40px] flex justify-center bg-transparent">
        <Image src={linkedin} alt="linkedin"/>
      </div>
    </footer>
  )
}
