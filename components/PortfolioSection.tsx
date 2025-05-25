import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PortfolioSection() {
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
        <Link
          href="#"
          className="bg-[#AA253D] max-md:w-fit hover:bg-[#94273b] text-white px-6 py-3 text-center rounded-full text-nowrap transition-colors"
        >
          See All
        </Link>
      </div>

      <div className="flex max-md:flex-col gap-6 mb-12 max-lg:items-center ">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-gray-200 max-w-[415px] rounded-[16px] max-h-[302px] overflow-hidden"
          >
            <Image
              src="/placeholder.svg?height=300&width=400"
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
        We pour our hearts into every project at our agency. we're a team of  passionate UI/UX designers and full-stack developers dedicated to crafting impactful digital solutions. We believe in thoughtful design and meticulous coding to build meaningful user interfaces and seamless user journeys for exceptional web and mobile experiences. Let's bring your vision to life with heart and expertise.
        </p>
      </div>
    </section>
  );
}
