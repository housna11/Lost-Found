"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {MapPin, Calendar} from "lucide-react";

type ObjectCardProps = {
  id: number;
  title: string;
  description: string;
  type: "lost" | "found";
  location: string;
  date: string;
  image: string | null;
};
export default function ObjectCard({
  title,
  description,
  type,
  location,
  date,
  image,
}: ObjectCardProps) {
    const imageURL = image
    ? `http://127.0.0.1:8000/storage/${image}`
    : "/images/no-image.png";

  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <img
          src={imageURL}
          alt={title}
          className="h-60 w-full object-cover"/>
        <span
          className={`absolute left-4 top-4 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-lg ${
            type === "lost"
              ? "bg-[#6db9f7]"
              : "bg-gradient-to-r from-[#0474C4] to-[#2196F3]"
          }`}
        >
          {type === "lost" ? "Perdu" : "Trouvé"}
        </span>
      </div>

      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <p className="mt-3 line-clamp-2 text-gray-500">{description}</p>
        <div className="mt-6 space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-3">
            <MapPin
            size={18}
            className="text-[#0474C4]"/>
            <span className="font-medium text-gray-700">
            {location}
            </span>
          </div>

            <div className="flex items-center gap-3">
            <Calendar
            size={18}
            className="text-[#0474C4]"/>
            <span className="font-medium text-gray-700">
            {new Date(date).toLocaleDateString("fr-FR")}
            </span>
            </div>
        </div>
        <Link
          href="/"
          className="mt-7 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#023e73] to-[#0474C4] px-5 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          Voir les détails
        </Link>
      </div>
    </div>
  );
}