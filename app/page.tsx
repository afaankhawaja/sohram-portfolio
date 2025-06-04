import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Experience from "@/components/Experience";
import PortfolioSection from "@/components/PortfolioSection";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import FooterSection from "@/components/FooterSection";
import MyWork from "@/components/MyWork";
import HireMe from "@/components/HireMe";
import UIAndUX from "@/components/UIAndUX";
import Motion from "@/components/Motion";

export default function Home() {
  return (
    <main className=" md:w-dvh w-dvh min-h-screen  items-center max-xl:px-4">
      {/* <Navbar /> */}
      <div className="sticky  top-1 z-50 w-full h-full">
        <Navbar />
      </div>
      
      <Hero />
      <Services />
      <HireMe />
      <PortfolioSection />
      <Testimonial />
      <Contact />
      {/* <Motion/> */}
      {/* <MyWork/> */}
      <FooterSection />
    </main>
  );
}

