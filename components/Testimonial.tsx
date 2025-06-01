'use client'
import React, { useRef, useState, useCallback } from "react";
import Image from "next/image";
import bg from "@/assets/testimonial.jpg";
import card from "@/assets/cards/testimonial1.svg";
import vector from "@/assets/cards/Vector 1.svg";
import star1 from "@/assets/cards/Vector (1).svg";
import star2 from "@/assets/cards/Vector.svg";

const Testimonial: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef<number>(0);
  const scrollLeft = useRef<number>(0);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDragging || !scrollRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX.current) * 2; // scroll speed
      scrollRef.current.scrollLeft = scrollLeft.current - walk;
    },
    [isDragging]
  );

  return (
    <div
      className="relative mx-auto max-w-[1440px] max-md:w-[95%] rounded-[50px] bg-black w-full min-h-full max-md:pb-10 md:h-[863px]"
      id="Testimonials"
    >
      <Image
        src={bg}
        alt=""
        className="rounded-[50px] absolute min-h-full min-w-full md:h-[863px] object-cover"
      />
      <div
        className="opacity-30"
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
            <Image src={vector} alt="" className="absolute -top-5 -right-5" />
          </h2>
          <p className="relative text-[#F9FAFB] text-[14px] md:text-[20px] -tracking-[1.5%] leading-[100%] max-md:min-w-full max-w-[742px] mx-auto">
            We're proud of the strong relationships we've built with our
            clients. Hear firsthand how our UI/UX design and development
            services have helped them succeed.
            <Image src={star1} alt="star" className="absolute -bottom-8" />
            <Image
              src={star2}
              alt="star"
              className="absolute -right-8 max-lg:-right-2 -top-8"
            />
          </p>
        </div>

        {/* Draggable Testimonials */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="max-md:flex-col gap-y-6 flex gap-x-6 w-full md:min-w-full md:min-h-[264.84px] md:items-center overflow-x-scroll hidden-scrollbar cursor-grab active:cursor-grabbing"
        >
          <Image
            src={card}
            alt=""
            className="w-full object-cover h-full bg-[#FFFFFF24] rounded-[24px]"
          />
          <Image
            src={card}
            alt=""
            className="h-full object-contain w-full bg-[#FFFFFF24] rounded-[24px]"
          />
          <Image
            src={card}
            alt=""
            className="h-full object-cover w-full bg-[#FFFFFF24] rounded-[24px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
