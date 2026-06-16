import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import LogoAnimations from "@/components/sections/LogoAnimations";

export default function LogoAnimationsPage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <Navbar />
      <LogoAnimations />
      <Footer />
    </main>
  );
}
