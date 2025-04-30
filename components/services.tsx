import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const services = [
  {
    title: "Application Design",
    image: "/service-app-design.png",
    alt: "Application Design illustration",
  },
  {
    title: "Web Design",
    image: "/service-web-design.png",
    alt: "Web Design illustration",
  },
  {
    title: "User flow + Prototyping",
    image: "/service-userflow.png",
    alt: "User flow and Prototyping illustration",
  },
]

export default function Services() {
  return (
    <div className="w-full max-w-[1440px] bg-[#1E1E1E] rounded-t-3xl py-12 px-16">
      <h2 className="text-3xl font-bold mb-2">
        My <span className="text-[#C30052]">Services</span>
      </h2>
      <p className="text-gray-300 mb-8 max-w-[600px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis velit, rhoncus vel volutpat vel, dignissim
        non lacus.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-[#2A2A2A] rounded-2xl p-6 flex flex-col">
            <h3 className="text-xl font-medium text-white mb-4">{service.title}</h3>
            <div className="relative flex-grow bg-white rounded-xl overflow-hidden h-[200px]">
              <Image src={service.image || "/placeholder.svg"} alt={service.alt} fill className="object-cover" />
            </div>
            <div className="flex justify-end mt-4">
              <div className="w-10 h-10 bg-[#1E293B] rounded-full flex items-center justify-center">
                <ArrowUpRight size={20} className="text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-8 gap-2">
        <div className="w-8 h-2 bg-[#C30052] rounded-full"></div>
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-white rounded-full"></div>
      </div>
    </div>
  )
}
