import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import GenericStyle from "@/components/sections/GenericStyle";

export default function GenericStylePage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <Navbar />
      <GenericStyle />
      <Footer />
    </main>
  );
}
