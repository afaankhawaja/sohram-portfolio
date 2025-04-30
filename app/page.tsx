import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <Hero />
      <Services />
    </main>
  )
}
