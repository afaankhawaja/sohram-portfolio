'use client'
import React from 'react'
import { motion } from "framer-motion";
import loop1 from "@/assets/loop.png";
import Image from 'next/image';

const Motion = () => {
  return (
    <div className="no-scrollbar whitespace-nowrap scrollbar-hidden overflow-hidden h-[140px] min-w-dvw rounded-br-[24px] rounded-tl-[24px] bg-[#AA253D] ">
      <motion.div
        className="flex h-[107px]"
        style={{ width: "200%" }}
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 4, // 10s per loop
          ease: "linear", // constant speed
          repeat: Infinity, // endless
        }}
      >
        <Image
          src={loop1}
          alt="scrolling bg"
          className="w-[100%] max-md:w-[90%] rounded-t-[24px]"
        />
      </motion.div>
    </div>
  );
}

export default Motion