import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import MotionUI from "@/components/sections/MotionUI";

export default function MotionUIPage() {
  return (
    <main className="min-h-screen bg-background pt-20 md:pt-24">
      <Navbar />
      <MotionUI />
      <Footer />
    </main>
  );
}
