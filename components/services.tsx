// 'use client'
// import Image from "next/image";
// import webdev from "@/assets/cards/the cards/Updated service cards svg/Web development glass.svg";
// import uiux from "@/assets/cards/the cards/Updated service cards svg/UI UX glass.svg";
// import appdev from "@/assets/cards/the cards/Updated service cards svg/App development glass.svg";
// import webdevhover from "@/assets/cards/the cards/Updated service cards svg/Web development red glass.svg";
// import uiuxhover from "@/assets/cards/the cards/Updated service cards svg/UI UX red glass.svg";
// import appdevhover from "@/assets/cards/the cards/Updated service cards svg/App development red glass.svg";

// import { useState } from "react";
// import bg from "@/assets/testimonial.jpg";
// import { useRouter } from 'next/navigation'



// const services = [
//   {
//     title: "UI UX Design",
//     image: uiux,
//     hoverImage:uiuxhover,
//     alt: "User flow and Prototyping illustration",
//     id:0,
//     path:"/hire-us/#UiUx"
//   },
//   {
//     title: "Web Developement",
//     image: webdev,
//     hoverImage:webdevhover,
//     alt: "Web Design illustration",
//     id:1,
//     path:"/hire-us/#web"
//   },
//   {
//     title: "App Developement",
//     image: appdev,
//     hoverImage:appdevhover,
//     alt: "Application Design illustration",
//     id:2,
//     path:"/hire-us/#app",
//   },
 
// ];

// export default function Services() {
//   const [hover,setHover]=useState<number|null>()
//   const router=useRouter()
//   return (
//     <div
//       className="relative pb-5 w-full mx-auto max-w-[1440px] min-h-[100%] max-md:min-h-[100%] max-md:w-[95%]"
//       id="Service"
//     >
//       <Image
//         src={bg}
//         alt=""
//         className="rounded-[50px] absolute min-h-full xl:h-[878px] object-cover"
//       />
//       <div className="md:px-[60px] max-md:mx-auto max-md:w-[80%]">
//      <div className="flex justify-between max-lg:flex-col max-lg:items-center gap-y-5 max-lg:mb-14">
//      <h2 className="md:text-[48px] text-[32px] text-white font-bold leading-[100%] -tracking-[1.5%] relative mt-[116px] pl-[10.5px] lg:mb-[86px]">
//         Our <span className="text-[#C30052]">Services</span>
//       </h2>
//       <p className="text-white text-[12px] md:text-[20px] font-medium leading-[100%] -tracking-[1.5%] lg:mt-[97px] max-w-[675px] relative">
//       We deliver exceptional user experiences for web, web applications, and mobile applications. Our expert UI/UX design seamlessly integrates with full-stack development for both web and mobile platforms, creating powerful and intuitive digital solutions.
//       </p>
//      </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 min-h-fit min-w-full pb-10">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="relative flex flex-col h-full mt-3  min-h-[508px] min-w-[100%] mx-auto"
//           >
//             <div className={`w-full h-full `}
//             onClick={()=>{router.push(service.path)}}
//             onMouseEnter={()=>setHover(service.id)}
//             onMouseLeave={()=>setHover(null)}>
              
//               <Image
//                 src={hover===index? service.hoverImage: service.image || "/placeholder.svg"}
//                 alt={service.alt}
//                 fill
//                 className="object-cover w-full h-full  transition-all duration-200"
//               />

//             </div>
//           </div>
//         ))}
//       </div>
//       </div>
     

//     </div>
//   );
// }
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

const services = [
  {
    title: "UI UX Design",
    image: uiux,
    hoverImage: uiuxhover,
    alt: "User flow and Prototyping illustration",
    id: 0,
    path: "/hire-us/#UiUx",
  },
  {
    title: "Web Development",
    image: webdev,
    hoverImage: webdevhover,
    alt: "Web Design illustration",
    id: 1,
    path: "/hire-us/#web",
  },
  {
    title: "App Development",
    image: appdev,
    hoverImage: appdevhover,
    alt: "Application Design illustration",
    id: 2,
    path: "/hire-us/#app",
  },
];

export default function Services() {
  const [hover, setHover] = useState<number | null>(null);
  const router = useRouter();

  return (
    <div
      className="relative pb-5 w-full mx-auto max-w-[1440px] min-h-[100vh] overflow-hidden"
      id="Service"
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
          <h2 className="md:text-[48px] text-[32px] text-white font-bold leading-[100%] -tracking-[1.5%] mt-[56px]">
            Our <span className="text-[#C30052]">Services</span>
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
          {services.map((service, index) => (
            <div
              key={service.id}
              className="relative group cursor-pointer max-md:w-[100%] max-lg:w-[60%] max-lg:mx-auto w-full aspect-[4/5] min-h-[400px] lg:min-h-[450px] xl:min-h-[508px]"
              onClick={() => {
                router.push(service.path);
              }}
              onMouseEnter={() => setHover(service.id)}
              onMouseLeave={() => setHover(null)}
            >
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <Image
                  src={
                    hover === service.id ? service.hoverImage : service.image
                  }
                  alt={service.alt}
                  fill
                  className="object-contain transition-all duration-300 ease-in-out"
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