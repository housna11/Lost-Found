"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {ArrowLeft, Calendar, MapPin, } from "lucide-react";
import { getItem } from "@/app/Services/auth";

type Item = {
  id: number;
  title: string;
  description: string;
  type: "lost" | "found";
  location: string;
  date: string;
  image: string | null;
};

export default function ItemDetails() {
  const { id } = useParams();
  const [item, setItem] = useState<Item | null>(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const data = await getItem(id as string);
        setItem(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchItem();
  }, [id]);

  if (!item) {
    return (
      <div className="flex min-h-screen items-center justify-center">Chargement...</div>
    );
  }

  const imageURL = item.image
    ? `http://127.0.0.1:8000/storage/${item.image}`
    : "/no-image.png";

  return (
    <div className=" bg-gradient-to-br from-[#eaf4ff] via-white to-[#f5f9ff] py-10 px-8">
      <div className="mx-auto max-w-4xl mt-20">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-[#0474C4] font-semibold">
          <ArrowLeft size={18} />
          Retour
        </Link>

        <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-[380px_1fr]">
            <div className="h-[400px] overflow-hidden bg-gray-100">
            <img
              src={imageURL}
              alt={item.title}
              className="h-full w-full object-cover"/>
            </div>

            <div className="flex flex-col justify-center p-10">
              <div>
                <span
                  className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold text-white ${
                    item.type === "lost"
                      ? "bg-[#6db9f7]"
                      : "bg-gradient-to-r from-[#023e73] to-[#0474C4]"
                  }`}>
                  {item.type === "lost" ? "Perdu" : "Trouvé"}
                </span>
                <h1 className="mt-6 text-4xl font-bold text-gray-900">
                  {item.title}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {item.description}
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin
                      size={20}
                      className="text-[#0474C4]"/>
                    <span className="font-medium text-gray-700">
                      {item.location}
                    </span>
                  </div>
            
                  <div className="flex items-center gap-3">
                    <Calendar
                      size={20}
                      className="text-[#0474C4]"/>
                    <span className="font-medium text-gray-700">
                      {new Date(item.date).toLocaleDateString("fr-FR")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}