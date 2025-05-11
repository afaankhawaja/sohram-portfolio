import React from 'react'
import Image from 'next/image'
import svg1 from "@/assets/Frame (1).svg"
import svg2 from "@/assets/Frame.svg"
import PricingPlans from './PricingPlans'

const UIAndUX = () => {
  return (
    <section className='max-w-[1246px] mx-auto mb-[26px]'>
        <div className="flex justify-between ">
            <div className='text-[95.57px] leading-[100%] mt-[68px] -tracking-[1.5%] w-[523px] text-nowrap'>UI UX <span className='text-[#AA253D]'>Design</span></div>
            <div className="flex mt-[22px] gap-x-[26px]">
                <Image src={svg2} alt=''/>
                <Image src={svg1} alt=''/>
            </div>
        </div>
        <div className="flex text-[20px] leading-[100%] mt-[23px] mb-[21px] -tracking-[1.5%] text-[#98A2B3]">
        As a Lead UI/UX Designer, I manage the full product design lifecycle, including rigorous Design QA, functionality, and bug testing. I've led mobile app design for sensitive areas (ClearMinds w/ RAG AI) and contributed to AI platforms (Medianest). I deliver impactful, user-centered products from concept to completion.
        </div>
        <PricingPlans/>
    </section>
)
}

export default UIAndUX