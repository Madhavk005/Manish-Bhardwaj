import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import DocumentaryTestimonials from "@/components/sections/DocumentaryTestimonials";

export default function DocumentaryTestimonialsPage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <Navbar />
      <DocumentaryTestimonials />
      <Footer />
    </main>
  );
}
