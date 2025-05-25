import React from "react";
import bg from "@/assets/testimonial.jpg";
import Image from "next/image";
import { Star } from "lucide-react";
import star1 from "@/assets/cards/Vector (1).svg"
import star2 from "@/assets/cards/Vector.svg"
import vector from "@/assets/cards/Vector 1.svg"
import comma from "@/assets/quote-down-bg.png";
import card from "@/assets/cards/testimonial1.svg"

const Testimonial = () => {
  return (
    <div className="relative mx-auto max-w-[1440px] max-md:w-[95%] rounded-[50%] bg-black w-full min-h-full max-md:pb-10 md:h-[863px]" id="Testimonials">
      <Image
        src={bg}
        alt=""
        className="rounded-[50px] absolute min-h-full min-w-full md:h-[863px] object-cover"
      />
      <div
        className=" opacity-30 "
        style={{
          backgroundImage: "linear-gradient(45deg, #222, #333)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute rounded-[50px] inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 pt-[116px] relative z-10">


        {/* Heading */}
        <div className="text-center mb-[96px] mx-auto max-w-[1299px] min-h-[191px] px-4">
          <h2 className="relative text-[32px] md:text-[48px] -tracking-[1.5%] leading-[100%] mt-10 font-medium text-white md:mb-4 mb-16 md:max-w-[430px] mx-auto">
            Testimonials That{" "}
            <span className="inline-block">
              Speak to <span className="text-[#AA253D]">our Results</span>
            </span>
            <Image src={vector} alt="" className="absolute -top-5 -right-5"/>
          </h2>
          <p className="relative text-[#F9FAFB] text-[14px] md:text-[20px] -tracking-[1.5%] leading-[100%] max-md:min-w-full max-w-[742px] mx-auto">
          We're proud of the strong relationships we've built with our clients. Hear firsthand how our UI/UX design and development services have helped them succeed.
          <Image src={star1} alt="star" className="absolute -bottom-8"/>
          <Image src={star2} alt="star" className="absolute -right-8 max-lg:-right-2 -top-8"/>

          </p>
        </div>

        {/* Testimonials */}
        <div className="max-md:flex-col gap-y-6 max-md:pl-5 flex gap-x-6 w-full md:min-w-full md:min-h-[264.84px] md:items-center  overflow-x-scroll hidden-scrollbar">
          <Image src={card} alt="" className="w-full object-cover h-full bg-[#FFFFFF24] rounded-[24px]"/>
          <Image src={card} alt="" className="h-full object-contain w-full bg-[#FFFFFF24] rounded-[24px]"/>
          <Image src={card} alt="" className="h-full object-cover w-full bg-[#FFFFFF24] rounded-[24px]"/>
          {/* First testimonial */}
          {/* <div className="bg-gray-800 bg-opacity-70 px-[21px] pt-[12px]  relative min-w-[500px] lg:min-w-[784px]  min-h-[262px] rounded-[24px]">
            <div className="flex items-center justify-between mb-[14px]  ">
              <div className="flex gap-x-[12px]">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Fawzi Sayed"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold">Fawzi Sayed</h4>
                  <p className="text-gray-400 text-sm">UI UX Designer</p>
                </div>
              </div>
              <Image src={comma} alt="" />
            </div>
            <div className="flex mb-[14px]">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 fill-rose-500 text-rose-500"
                />
              ))}
              <span className="ml-2 text-white font-bold">5.0</span>
            </div>
            <p className="text-gray-300 w-full pb-[21px]">
              consectetur adipiscing elit. Sed congue interdum ligula a
              dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis
              orci elementum egestas lobortis.
            </p>
          </div> */}
          

          {/* Second testimonial */}
          {/* <div className="bg-gray-800 bg-opacity-70 px-[21px] pt-[12px]  relative min-w-[500px] lg:min-w-[784px] min-h-[262px] rounded-[24px]">
            <div className="flex items-center justify-between gap-x-3 mb-[14px]  ">
              <div className="flex gap-x-[12px]">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Fawzi Sayed"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold">Fawzi Sayed</h4>
                  <p className="text-gray-400 text-sm">UI UX Designer</p>
                </div>
              </div>
              <Image src={comma} alt="" />
            </div>
            <div className="flex mb-[14px] ">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 fill-rose-500 text-rose-500"
                />
              ))}
              <span className="ml-2 text-white font-bold">5.0</span>
            </div>
            <p className="text-gray-300 w-full pb-[21px]">
              consectetur adipiscing elit. Sed congue interdum ligula a
              dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis
              orci elementum egestas lobortis.
            </p>
          </div>

          <div className="bg-gray-800 bg-opacity-70 px-[21px] pt-[12px]  relative min-w-[500px] lg:min-w-[784px] min-h-[262px] rounded-[24px]">
            <div className="flex items-center justify-between gap-3 mb-[14px]  ">
              <div className="flex gap-x-[12px]">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=48&width=48"
                    alt="Fawzi Sayed"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold">Fawzi Sayed</h4>
                  <p className="text-gray-400 text-sm">UI UX Designer</p>
                </div>
              </div>
              <Image src={comma} alt="" />
            </div>
            <div className="flex mb-[14px]">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 fill-rose-500 text-rose-500"
                />
              ))}
              <span className="ml-2 text-white font-bold">5.0</span>
            </div>
            <p className="text-gray-300 w-full pb-[21px]">
              consectetur adipiscing elit. Sed congue interdum ligula a
              dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis
              orci elementum egestas lobortis.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
