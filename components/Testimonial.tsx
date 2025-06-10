"use client";
import React, { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import bg from "@/assets/testimonial.jpg";
import card1 from "@/assets/cards/the cards/Component 13 (1).svg";
import card2 from "@/assets/cards/the cards/Component 12.svg";
import card3 from "@/assets/cards/the cards/Component 10.svg";

import vector from "@/assets/cards/Vector 1.svg";
import star1 from "@/assets/cards/Vector (1).svg";
import star2 from "@/assets/cards/Vector.svg";

const Testimonial: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const animationRef = useRef<number>(0);
  const lastMoveTime = useRef<number>(0);
  const lastMoveX = useRef<number>(0);

  // Momentum scrolling effect
  useEffect(() => {
    if (!isDragging && Math.abs(velocity) > 0.5) {
      const animate = () => {
        if (!scrollRef.current) return;

        setVelocity((prev) => prev * 0.95); // Friction
        scrollRef.current.scrollLeft -= velocity;

        if (Math.abs(velocity) > 0.5) {
          animationRef.current = requestAnimationFrame(animate);
        }
      };
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDragging, velocity]);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    setVelocity(0);

    lastMoveTime.current = Date.now();
    lastMoveX.current = e.pageX;

    // Cancel any ongoing momentum animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    // Prevent text selection
    e.preventDefault();
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

      const currentTime = Date.now();
      const currentX = e.pageX;
      const x = currentX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 1.5; // Reduced multiplier for smoother feel

      // Calculate velocity for momentum
      if (lastMoveTime.current && lastMoveX.current) {
        const timeDiff = currentTime - lastMoveTime.current;
        const xDiff = currentX - lastMoveX.current;
        if (timeDiff > 0) {
          setVelocity((xDiff / timeDiff) * 16); // Normalize to 60fps
        }
      }

      scrollRef.current.scrollLeft = scrollLeft - walk;

      lastMoveTime.current = currentTime;
      lastMoveX.current = currentX;
    },
    [isDragging, startX, scrollLeft]
  );

  // Global mouse events for better drag experience
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging || !scrollRef.current) return;

      e.preventDefault();

      const currentTime = Date.now();
      const currentX = e.pageX;
      const x = currentX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 1.5;

      // Calculate velocity
      if (lastMoveTime.current && lastMoveX.current) {
        const timeDiff = currentTime - lastMoveTime.current;
        const xDiff = currentX - lastMoveX.current;
        if (timeDiff > 0) {
          setVelocity((xDiff / timeDiff) * 16);
        }
      }

      scrollRef.current.scrollLeft = scrollLeft - walk;

      lastMoveTime.current = currentTime;
      lastMoveX.current = currentX;
    };

    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleGlobalMouseMove);
      document.addEventListener("mouseup", handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isDragging, startX, scrollLeft]);

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
          className="max-md:flex-col gap-y-6 flex gap-x-6 w-full md:min-w-full md:min-h-[264.84px] md:items-center overflow-x-scroll hidden-scrollbar cursor-grab active:cursor-grabbing select-none"
          style={{
            scrollBehavior: isDragging ? "auto" : "smooth",
            userSelect: "none",
            WebkitUserSelect: "none",
            MozUserSelect: "none",
            msUserSelect: "none",
          }}
        >
          <Image
            src={card1}
            alt=""
            className="w-full object-cover h-full bg-[#FFFFFF24] rounded-[24px] pointer-events-none"
            draggable={false}
          />
          <Image
            src={card2}
            alt=""
            className="h-full object-contain w-full bg-[#FFFFFF24] rounded-[24px] pointer-events-none"
            draggable={false}
          />
          <Image
            src={card3}
            alt=""
            className="h-full object-cover w-full bg-[#FFFFFF24] rounded-[24px] pointer-events-none"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;