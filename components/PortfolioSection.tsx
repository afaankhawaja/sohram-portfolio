// 'use client'
// import Image from "next/image";
// import Link from "next/link";
// import arow from "@/assets/up right.svg";

// import port1 from "@/assets/cards/portfolio1.png"
// import port2 from "@/assets/cards/portfolio2.png"
// import port3 from "@/assets/cards/portfolio3.png"
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// import port1img1 from "@/assets/cards/the cards/portfolio/ai design/1.png"
// import port1img2 from "@/assets/cards/the cards/portfolio/ai design/2.png";
// import port1img3 from "@/assets/cards/the cards/portfolio/ai design/3.png";
// import port1img4 from "@/assets/cards/the cards/portfolio/ai design/4.png"
// import port1img5 from "@/assets/cards/the cards/portfolio/ai design/5.png";


// export default function PortfolioSection() {
//    const [hover, setHover] = useState(false);  
//     const router=useRouter()
//   return (
//     <section
//       className="max-w-[1298px] max-md:w-[95%]  w-full mx-auto mt-[97px] mb-[69px] max-lg:px-5"
//       id="Portfolio"
//     >
//       <div className="flex max-md:flex-col max-md:w-[90%] max-md:mx-auto justify-between gap-y-5 w-full md:items-center mb-[92px]">
//         <h2 className="text-[40px] md:text-[64px]  md:w-[643px] -tracking-[1.5%] leading-[100%] md:text-5xl font-bold text-slate-800">
//           Lets have a look at our{" "}
//           <span className="text-[#AA253D]">Portfolio</span>
//         </h2>
//         <div
//                       onMouseEnter={() => setHover(true)}
//                       onMouseLeave={() =>  setHover(false) }
//                       onClick={()=>router.push(`/hire-us`)}
                      
//                       className="bg-[#AA253D] cursor-pointer text-[26px] md:text-[26px] leading-[100%] text-nowrap -tracking-[1.5%] hover:bg-[#94273b] text-white px-[10px] md:px-[43px] py-2 md:py-3 justify-center rounded-full flex items-center gap-2 transition-all duration-200"
//                     >   
//                         Hire us
//                       <Image
//                         className={`md:h-[42px] md:w-[42px]   ${hover && "rotate-[45deg]"}`}
//                         src={arow}
//                         alt=""
//                       />
//                     </div>
//       </div>

//       <div className="flex max-md:flex-col gap-6 mb-12 max-lg:items-center ">
//         {[port1, port2, port3].map((item,i) => (
//           <div
//             key={i}
//             className="bg-gray-200 max-w-[415px] rounded-[16px] max-h-[302px] overflow-hidden"
//           >
//             <Image
//               src={item}
//               alt={`Portfolio item ${item}`}
//               width={400}
//               height={300}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       <div className="flex flex-wrap justify-center gap-3 mb-16">
//         {[
//           "Landing Page",
//           "Product Design",
//           "Animation",
//           "Glassmorphism",
//           "Cards",
//         ].map((tag) => (
//           <button
//             key={tag}
//             className="bg-gray-100 hover:bg-gray-200 px-5 py-2 rounded-full text-gray-800 transition-colors"
//           >
//             {tag}
//           </button>
//         ))}
//       </div>

//       <div className="max-w-3xl mx-auto text-center">
//         <div className="flex justify-center items-center gap-3 mb-4">
//           <h3 className="text-[#344054] font-bold text-[32px] md:text-[48px] leading-[100%] -tracking-[1.5%]">
//           Our message
//           </h3>

//         </div>
//         <p className="text-[#344054] font-normal text-[14px] md:text-[20px] leading-[100%] -tracking-[1.5%] max-w-[742px] h-[143px]">
//         We pour our hearts into every project at our agency. we're a team of  passionate UI/UX designers and full-stack developers dedicated to crafting impactful digital solutions. We believe in thoughtful design and meticulous coding to build meaningful user interfaces and seamless user journeys for exceptional web and mobile experiences. Let's bring your vision to life with heart and expertise.
//         </p>
//       </div>
//     </section>
//   );
// }

"use client";
import Image from "next/image";
import Link from "next/link";
import arow from "@/assets/up right.svg";

import port1 from "@/assets/cards/portfolio1.png";
import port2 from "@/assets/cards/portfolio2.png";
import port3 from "@/assets/cards/portfolio3.png";
import { useRouter } from "next/navigation";
import { useState } from "react";

import port1img1 from "@/assets/cards/the cards/portfolio/ice cream delivery/1.png";
import port1img2 from "@/assets/cards/the cards/portfolio/ice cream delivery/2.png";
import port1img3 from "@/assets/cards/the cards/portfolio/ice cream delivery/3.png";
import port1img4 from "@/assets/cards/the cards/portfolio/ice cream delivery/4.png";
import port1img5 from "@/assets/cards/the cards/portfolio/ice cream delivery/5.png";
import port1img6 from "@/assets/cards/the cards/portfolio/ice cream delivery/6.png";
import port1img7 from "@/assets/cards/the cards/portfolio/ice cream delivery/7.png";
import port1img8 from "@/assets/cards/the cards/portfolio/ice cream delivery/8.png";
import port1img9 from "@/assets/cards/the cards/portfolio/ice cream delivery/9.png";
import port1img10 from "@/assets/cards/the cards/portfolio/ice cream delivery/10.png";
import port1img11 from "@/assets/cards/the cards/portfolio/ice cream delivery/11.png";
import port1img12 from "@/assets/cards/the cards/portfolio/ice cream delivery/12.png";



import port2img1 from "@/assets/cards/the cards/portfolio/streaming/1.png";
import port2img2 from "@/assets/cards/the cards/portfolio/streaming/2.png";
import port2img3 from "@/assets/cards/the cards/portfolio/streaming/3.png";
import port2img4 from "@/assets/cards/the cards/portfolio/streaming/4.png";
import port2img5 from "@/assets/cards/the cards/portfolio/streaming/5.png";

import port3img1 from "@/assets/cards/the cards/portfolio/ai design/1.png";
import port3img2 from "@/assets/cards/the cards/portfolio/ai design/2.png";
import port3img3 from "@/assets/cards/the cards/portfolio/ai design/3.png";
import port3img4 from "@/assets/cards/the cards/portfolio/ai design/4.png";
import port3img5 from "@/assets/cards/the cards/portfolio/ai design/5.png";


export default function PortfolioSection() {
  const [hover, setHover] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedPortfolio, setSelectedPortfolio] = useState(0);
  const router = useRouter();

  // For now, using the same images for all portfolios - you can replace this later
  const portfolioImages = [
    [
      port1img1,
      port1img2,
      port1img3,
      port1img4,
      port1img5,
      port1img6,
      port1img7,
      port1img8,
      port1img9,
      port1img10,
      port1img11,
      port1img12,
    ],
    [port2img1, port2img2, port2img3, port2img4, port2img5],
    [port3img1, port3img2, port3img3, port3img4, port3img5],
  ];
  const carouselImages = portfolioImages[selectedPortfolio];

  const openModal = (portfolioIndex:number) => {
    setSelectedPortfolio(portfolioIndex);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const goToImage = (index:number) => {
    setCurrentImageIndex(index);
  };

  return (
    <section
      className="max-w-[1298px] max-md:w-[95%]  w-full mx-auto mt-[97px] mb-[69px] max-lg:px-5"
      id="Portfolio"
    >
      <div className="flex max-md:flex-col max-md:w-[90%] max-md:mx-auto justify-between gap-y-5 w-full md:items-center mb-[92px]">
        <h2 className="text-[40px] md:text-[64px]  md:w-[643px] -tracking-[1.5%] leading-[100%] md:text-5xl font-bold text-slate-800">
          Lets have a look at our{" "}
          <span className="text-[#AA253D]">Portfolio</span>
        </h2>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => router.push(`/hire-us`)}
          className="bg-[#AA253D] cursor-pointer text-[26px] md:text-[26px] leading-[100%] text-nowrap -tracking-[1.5%] hover:bg-[#94273b] text-white px-[10px] md:px-[43px] py-2 md:py-3 justify-center rounded-full flex items-center gap-2 transition-all duration-200"
        >
          Hire us
          <Image
            className={`md:h-[42px] md:w-[42px]   ${hover && "rotate-[45deg]"}`}
            src={arow}
            alt=""
          />
        </div>
      </div>

      <div className="flex max-md:flex-col gap-6 mb-12 max-lg:items-center ">
        {[port1, port2, port3].map((item, i) => (
          <div
            key={i}
            className="bg-gray-200 max-w-[415px] rounded-[16px] max-h-[302px] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity duration-200"
            onClick={() => openModal(i)}
          >
            <Image
              src={item}
              alt={`Portfolio item ${item}`}
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {[
          "Landing Page",
          "Product Design",
          "Animation",
          "Glassmorphism",
          "Cards",
        ].map((tag) => (
          <button
            key={tag}
            className="bg-gray-100 hover:bg-gray-200 px-5 py-2 rounded-full text-gray-800 transition-colors"
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center items-center gap-3 mb-4">
          <h3 className="text-[#344054] font-bold text-[32px] md:text-[48px] leading-[100%] -tracking-[1.5%]">
            Our message
          </h3>
        </div>
        <p className="text-[#344054] font-normal text-[14px] md:text-[20px] leading-[100%] -tracking-[1.5%] max-w-[742px] h-[143px]">
          We pour our hearts into every project at our agency. we're a team of
          passionate UI/UX designers and full-stack developers dedicated to
          crafting impactful digital solutions. We believe in thoughtful design
          and meticulous coding to build meaningful user interfaces and seamless
          user journeys for exceptional web and mobile experiences. Let's bring
          your vision to life with heart and expertise.
        </p>
      </div>

      {/* Carousel Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-[#AA253D] bg-opacity-100 hover:bg-opacity-30 text-white rounded-full p-2 transition-all duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Main Image */}
            <div className="relative bg-white lg:rounded-[35px] overflow-hidden shadow-2xl">
              <Image
                src={carouselImages[currentImageIndex]}
                alt={`Portfolio detail ${currentImageIndex + 1}`}
                width={800}
                height={600}
                className="w-full h-auto max-h-[70vh] object-contain"
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#AA253D] hover:bg-[#94273b] text-white rounded-full p-3 transition-all duration-200 opacity-80 hover:opacity-100"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#AA253D] hover:bg-[#94273b] text-white rounded-full p-3 transition-all duration-200 opacity-80 hover:opacity-100"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {carouselImages.length}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-2 mt-4 overflow-x-auto pb-2">
              {carouselImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    index === currentImageIndex
                      ? "border-[#AA253D] opacity-100"
                      : "border-gray-300 opacity-60 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}