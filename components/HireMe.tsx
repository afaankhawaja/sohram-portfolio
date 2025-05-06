import React from 'react'
import Image from 'next/image'
import logo from "@/assets/hireme.png"

const HireMe = () => {
  return (
    <section>
        <div className='h-[806px] bg-[#F2F4F7] rounded-[50px] mt-5 w-screen flex max-lg:flex-col max-lg:gap-y-5 justify-center items-center gap-x-2'>
        <Image width={603} height={600} src={logo} alt=''/>
        <div className="flex flex-col max-w-[696px]">
        <div className='mt-[98px] mb-[34px] text-[60px] font-bold max-w-[800px] -tracking-[1.5%] leading-[100%] text-left'>
        Why <span className="text-[#AA253D]">Hire me? </span>
        </div>
        <p className='my-[25px] text-[20px] text-[#98A2B3] -tracking-[1.5%] leading-[100%]'>As a Lead UI/UX Designer, I manage the full product design lifecycle, including rigorous Design QA, functionality, and bug testing. I've led mobile app design for sensitive areas (ClearMinds w/ RAG AI) and contributed to AI platforms (Medianest). I deliver impactful, user-centered products from concept to completion.</p>
       <div className="flex gap-x-2">

       <div className="flex flex-col gap-5 w-[343px]">
        <p className='-tracking-[1.5%] leading-[100%] text-[36px] font-medium text-[#1D2939]'>30+</p>
        <p className='-tracking-[1.5%] leading-[100%] text-[20px] font-normal text-[#667085]'>Project Completed</p>
       </div>

       <div className="flex flex-col gap-5">
        <p className='-tracking-[1.5%] leading-[100%] text-[36px] font-medium text-[#1D2939]'>30+</p>
        <p className='-tracking-[1.5%] leading-[100%] text-[20px] font-normal text-[#667085] w-[203px]'>Clients who have had a 
        positive experience</p>
       </div>
       </div>
       <button className='w-[226px] h-[104px] text-[#151515] border border-[#151515] rounded-[32px] mt-[25px] text-[32px] font-semibold -tracking-[1.5%] leading-[100%] text-center content-center'>
        Hire me
       </button>
        </div>
         </div>
    </section>
  )
}

export default HireMe