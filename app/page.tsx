import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Experience from "@/components/Experience"
import PortfolioSection from "@/components/PortfolioSection"
import Testimonial from "@/components/Testimonial"

export default function Home() {
  return (
    <main className="flex w-screen min-h-screen flex-col items-center max-xl:px-4">
      <Navbar />
      <Hero />
      <Services />
      <Experience/>
      <PortfolioSection/>
      <Testimonial/>
    </main>
  )
}
