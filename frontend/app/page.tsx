import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import HowItWorks from "@/components/howitworks";
import ModelPerformance from "@/components/modelperformance";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <ModelPerformance />
      </main>

      <Footer />
    </>
  );
}