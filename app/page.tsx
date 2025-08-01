import Hero from "@/components/hero";
import Services from "@/components/services";
import PortfolioSection from "@/components/PortfolioSection";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import HireMe from "@/components/HireMe";


export default function Home() {
  return (
    <main className=" md:w-dvh w-dvh min-h-screen  items-center max-xl:px-4">
      <Hero />
      <Services />
      <HireMe />
      <PortfolioSection />
      <Testimonial />
      <Contact />
    </main>
  );
}
