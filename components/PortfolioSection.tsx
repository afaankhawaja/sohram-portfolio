import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function PortfolioSection() {
  return (
    <section className="max-w-[1298px]  w-full mx-auto mt-[97px] mb-[141px]">
      <div className="flex justify-between w-full items-center mb-[92px]">
        <h2 className="text-[64px] w-[643px] -tracking-[1.5%] leading-[100%] md:text-5xl font-bold text-slate-800">
          Lets have a look at my <span className="text-[#AA253D]">Portfolio</span>
        </h2>
        <Link href="#" className="bg-[#AA253D] hover:bg-[#e6526d] text-white px-6 py-3 rounded-full text-nowrap transition-colors">
          See All
        </Link>
      </div>

      <div className="flex gap-6 mb-12 ">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-gray-200 max-w-[415px] rounded-[16px] max-h-[302px] overflow-hidden">
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
        {["Landing Page", "Product Design", "Animation", "Glassmorphism", "Cards"].map((tag) => (
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
          <h3 className="text-3xl md:text-4xl font-bold text-slate-800">Lirante - Food Dilvery Solution</h3>
          <Link
            href="#"
            className="bg-[#AA253D] hover:bg-[#e6526d] text-white p-2 rounded-full flex items-center justify-center transition-colors rotate-45 hover:rotate-12"
          >
            <ArrowUpRight className="w-5 h-5 " />
          </Link>
        </div>
        <p className="text-slate-700 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.
        </p>
      </div>
    </section>
  )
}
