import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FBVideos from "@/components/sections/FBVideos";

export default function FBVideosPage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <Navbar />
      <FBVideos />
      <Footer />
    </main>
  );
}
