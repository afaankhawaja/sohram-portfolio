import React from 'react'
import logo1 from '@/assets/mail.svg'
import logo2 from "@/assets/whatsapp.svg"
import Image from 'next/image'
import star from "@/assets/star.svg"
import tick from "@/assets/shield-tick.svg"
import bg from "@/assets/contact-image.png"

const Contact = () => {
  return (
    <section>
        <div className='mt-[98px] text-[64px] max-w-[800px] -tracking-[1.5%] leading-[100%] text-center mx-auto'>
        Have an Awsome Project Idea? <span className="text-[#AA253D]">Let’s Discuss </span>
        </div>
        <div className="flex justify-center gap-x-[34px] mt-[30px]">
            <div className="w-[78px] h-[78px] flex justify-center items-center rounded-full bg-[#AA253D] hover:bg-[#e6526d]">
                <Image src={logo1} alt=''/>
            </div>
            <div className="w-[78px] h-[78px] flex justify-center items-center rounded-full bg-[#AA253D] hover:bg-[#e6526d]">
                <Image className='hover:text-[#AA253D]' src={logo2} alt=''/>
            </div>
        </div>

        <div className="flex gap-x-[37px] mt-[50px] justify-center mb-[45px]">
        <div className='flex gap-x-1'>
            <Image src={star} alt=''/>
            <span>4.9/5 Average Ratings</span>
        </div>
        <div className='flex gap-x-1'>
            <Image src={tick} alt=''/>
            <span>Certified Product Designer</span>
        </div>
        </div>

        <Image src={bg} alt='' className='w-screen h-fit'/>
    </section>
  )
}

export default Contact