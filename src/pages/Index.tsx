
import Hero from "@/components/Hero";
import TopMattresses from "@/components/TopMattresses";
import Features from "@/components/Features";
import SleepTipsHumor from "@/components/SleepTipsHumor";
import Reviews from "@/components/Reviews";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <TopMattresses />
      <Features />
      <SleepTipsHumor />
      <Reviews />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
