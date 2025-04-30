import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import WelcomeImage from "@/assets/welome-text.svg"
import sohram from "@/assets/sohram.png"
import stars from "@/assets/stars.png"

export default function Hero() {
  return (
    <div className="w-full max-w-[1440px] flex flex-col items-center mt-[37px] mb-16">
      <div className="relative w-full flex flex-col items-center">
        {/* Welcome text with decoration */}
        <div className="relative mb-2">
          <Image
            src={WelcomeImage}
            alt="Decoration"
            
            className=""
          />
        </div>

        {/* Main heading */}
        <h1 className="text-[96px] font-semibold text-center leading-[100%] -tracking-[1.5%]">
          Hi I'm <span className="text-[#C30052]">Sohram,</span>
          <br />A UI UX Designer
        </h1>

        {/* Left side decoration */}
        <div className="absolute z-10 left-[71px] h-full translate-y-1/2">
          <div className="flex flex-col items-start gap-1 w-[368px]">
            <span className="font-bold">5/5</span>
            <p className="text-[20px] font-medium text-[#344054] max-w-[380px]">
            Crafting intuitive and meaningful experiences
            that connect users with technology
              <br />
              Highly Recommended!
            </p>
          </div>
        </div>

        {/* Profile image with circular background */}
        <div className="relative mt-20 ">
          <div className="h-[480px] w-full overflow-hidden  ">
            <div className="w-[660px] h-[660px] pt-40 rounded-full bg-[#C30052]"></div>
          </div>
          
        <Image
            src={sohram}
            alt="Sohram"
            width={650}
            height={630}
            className="absolute top-1/2 -mt-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          /> 
        </div>

        {/* Right side rating */}
        <div className="absolute right-[71px] h-full translate-y-1/2">
          <Image
          src={stars}
          alt=""
          />

        </div>

        {/* Action buttons */}
        <div className="flex gap-x-[10px] backdrop-blur-[15px] mt-8 border-[2px] border-[#C9C9C9] rounded-[50px] p-[10px] h-[82px] items-center">
          <Button className=" bg-[#C30052] text-white hover:bg-[#333] rounded-full h-[62px] w-[208px] flex items-center justify-center gap-2">
            Portfolio <ArrowRight size={16} />
          </Button>
          <Button className=" text-white backdrop-blur-[15px] rounded-full h-[62px] w-[129px] flex items-center justify-center gap-2">
            Hire me 
          </Button>
        </div>
      </div>
    </div>
  )
}
