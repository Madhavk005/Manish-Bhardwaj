import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import Others from "@/components/sections/Others";

export default function OthersPage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <Navbar />
      <Others />
      <Footer />
    </main>
  );
}
