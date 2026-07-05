"use client";
import HeroSection from "../Components/HeroSection";
import SearchFilter from "../Components/SearchFilter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eaf4ff] via-white to-[#f5f9ff] pt-24 pb-12 px-8">
      <div className="max-w-7xl mx-auto">
        <HeroSection />
        <SearchFilter />
      </div>
    </div>
  );
}