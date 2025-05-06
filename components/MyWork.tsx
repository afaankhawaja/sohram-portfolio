import React from 'react'
import poster from "@/assets/placeholder.png"

const MyWork = () => {
  return (
    <section>
        <div className='mt-[98px] mb-[34px] text-[60px] font-bold max-w-[800px] -tracking-[1.5%] leading-[100%] text-center mx-auto'>
        Introduction <span className="text-[#AA253D]">to my work </span>
        </div>
        <div>
        <video
      poster="/assets/placeholder.png"
      width="1298"
      height="756"
      controls
      className='rounded-[40px] mb-[53px]'
    >

      {/* You can optionally add <source> elements here if you plan to load a video later */}
    </video>
        </div>
    </section>
  )
}

export default MyWork