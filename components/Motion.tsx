'use client'
import React from 'react'
import { motion } from "framer-motion";
import loop1 from "@/assets/loop.png";
import Image from 'next/image';

const Motion = () => {
  return (
<div className="no-scrollbar whitespace-nowrap scrollbar-hidden overflow-hidden">
        <motion.div
          className="flex h-[147px] min-w-screen bg-[#AA253D] "
          style={{ width: "200%" }}
          initial={{ x: "0%" }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 15, // 10s per loop
            ease: "linear", // constant speed
            repeat: Infinity, // endless
          }}
        >
          <Image src={loop1} alt="scrolling bg" className="w-[100%] max-md:w-[90%]" />
        </motion.div>
      </div>
  )
}

export default Motion