import React from "react";
import bg from "@/assets/testimonial.jpg";
import Image from "next/image";
import { Star } from "lucide-react";
import comma from "@/assets/quote-down-bg.png";

const Testimonial = () => {
  return (
    <div className="relative w-full h-[863px]" id="Testimonials">
      <Image
        src={bg}
        alt=""
        className="rounded-[50px] absolute h-[863px] object-cover"
      />
      <div
        className=" opacity-30 mt-[116px]"
        style={{
          backgroundImage: "linear-gradient(45deg, #222, #333)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Star decoration left */}
        <div className="absolute left-16 top-1/4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="rgba(255,255,255,0.2)"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Star decoration right */}
        <div className="absolute right-16 top-1/3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="rgba(255,255,255,0.2)"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* Heading */}
        <div className="text-center mb-[96px] max-w-3xl mx-auto">
          <h2 className="text-[48px] -tracking-[1.5%] leading-[100%] md:text-5xl font-medium text-white mb-4">
            Testimonials That{" "}
            <span className="inline-block">
              Speak to <span className="text-rose-500">My Results</span>
            </span>
          </h2>
          <p className="text-[#F9FAFB] text-[20px] -tracking-[1.5%] leading-[100%] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </p>
        </div>

        {/* Testimonials */}
        <div className="flex gap-x-6 w-full overflow-x-scroll hidden-scrollbar">
          {/* First testimonial */}
          <div className="bg-gray-800 bg-opacity-70 px-[21px] pt-[12px]  relative min-w-[784px]  min-h-[262px] rounded-[24px]">
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
          </div>

          {/* Second testimonial */}
          <div className="bg-gray-800 bg-opacity-70 px-[21px] pt-[12px]  relative min-w-[784px] min-h-[262px] rounded-[24px]">
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

          <div className="bg-gray-800 bg-opacity-70 px-[21px] pt-[12px]  relative min-w-[784px] min-h-[262px] rounded-[24px]">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
