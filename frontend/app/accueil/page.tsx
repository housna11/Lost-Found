"use client";

import { useEffect, useState } from "react";
import HeroSection from "../Components/HeroSection";
import SearchFilter from "../Components/SearchFilter";
import { getItems } from "../Services/auth";
import ObjectGrid from "../Components/ObjectGrid";

type Item = {
  id: number;
  title: string;
  description: string;
  type: "lost" | "found";
  location: string;
  date: string;
  image: string | null;
};
export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");

  useEffect(()=> {
    const fetchItems = async () => {
    try {
      const data = await getItems(search, type, location);
      setItems(data);
    } catch (error) {
      console.error(error);
    }
  };
  fetchItems();
  },[search, type, location])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#eaf4ff] via-white to-[#f5f9ff] pt-24 pb-12 px-8">
      <div className="max-w-7xl mx-auto">
        <HeroSection />
        <SearchFilter
          search={search}
          setSearch={setSearch}
          type={type}
          setType={setType}
          location={location}
          setLocation={setLocation}
        />
        <ObjectGrid items={items}/>
      </div>
    </div>
  );
}