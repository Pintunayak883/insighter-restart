import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "./screens/LandingPage/HeroSection";
import { FeaturesSection } from "./screens/LandingPage/FeaturesSection";
import { ModelSection } from "./screens/LandingPage/ModelSection";
import { AboutSection } from "./screens/LandingPage/AboutSection";
import { CustomersSection } from "./screens/LandingPage/CustomersSection";
import { FaqSection } from "./screens/LandingPage/FaqSection";
import Image from "next/image"; // Added Next.js Image import

const Home = () => {
  return (
    <div className="bg-[#080a09] flex flex-col min-h-screen w-full relative overflow-hidden">
      {/* Navbar with Custom Styling */}
      <Navbar />
      <div className="flex flex-col items-center w-full relative space-y-24 mt-20">
        <HeroSection />
        <FeaturesSection />
        <ModelSection />
        <AboutSection />
        <CustomersSection />
        <FaqSection />
      </div>
      <Footer />

      {/* Background Image */}
      <Image
        className="absolute top-0 left-0 w-full h-auto object-cover z-0"
        alt="Dora"
        src="/images/landing/dora.svg"
        width={1920} // Assuming full-screen width for desktop
        height={1080} // Assuming reasonable height for background
      />

      {/* Glowing Effects (Background) */}
      <div className="w-[492px] h-[492px] top-0 left-[50%] translate-x-[-50%] rounded-[246px] absolute bg-[#01e37fcc] blur-[400px] z-0" />
      <div className="w-[492px] h-[492px] top-[1906px] right-0 rounded-[246px] absolute bg-[#01e37fcc] blur-[400px] z-0" />
      <div className="w-[492px] h-[492px] top-[3855px] left-0 rounded-[246px] absolute bg-[#01e37fcc] blur-[400px] z-0" />
      <div className="w-[492px] h-[492px] top-[3890px] left-12 rounded-[246px] absolute bg-[#01e37fcc] blur-[400px] z-0" />
      <div className="w-[386px] h-[386px] top-[4958px] right-0 rounded-[193px] absolute bg-[#01e37fcc] blur-[400px] z-0" />

      {/* Additional Image */}
      <Image
        className="absolute w-full max-w-[1296px] left-1/2 -translate-x-1/2 top-96 z-0"
        alt="Ily dora"
        src="/images/landing/ily-dora.png"
        width={1296} // As per max-w-[1296px]
        height={720} // Assuming reasonable height for the image
      />
    </div>
  );
};

export default Home;
