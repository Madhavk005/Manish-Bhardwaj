import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Showreel from "@/components/sections/Showreel";
import About from "@/components/sections/About";
import SoftwareProficiency from "@/components/sections/SoftwareProficiency";
import Services from "@/components/sections/Services";
import BeforeAfter from "@/components/sections/BeforeAfter";
import FeaturedWork from "@/components/sections/FeaturedWork";
import CaseStudies from "@/components/sections/CaseStudies";

import Reviews from "@/components/sections/Reviews";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Showreel />
      <About />
      <SoftwareProficiency />
      <Services />
      <BeforeAfter />
      <FeaturedWork />
      <CaseStudies />

      <Reviews />
      <CTA />
      <Footer />
    </main>
  );
}
