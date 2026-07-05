"use client";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="mb-12 rounded-3xl border border-gray-200 bg-white px-12 py-14 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-[#0474C4]">
            Lost & Found
          </span>
          <h1 className="mt-6 text-5xl font-bold tracking-tight leading-tight text-gray-900">
            Retrouvez facilement
            <span className="block text-[#0474C4]">les objets perdus et trouvés</span>
          </h1>
          <p className="mt-5 text-lg leading-8 text-gray-500">
            Consultez les déclarations publiées par les utilisateurs,
            recherchez un objet perdu ou trouvé et effectuez votre propre
            déclaration en quelques clics.
          </p>
          <div className="mt-8 flex items-center gap-8">

            <div className="flex items-center gap-2 text-gray-600">
              <CheckCircle size={18} className="text-[#0474C4]" />
              <span className="text-sm font-medium">
                Déclaration rapide
              </span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <CheckCircle size={18} className="text-[#0474C4]" />
              <span className="text-sm font-medium">
                Recherche simplifiée
              </span>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <CheckCircle size={18} className="text-[#0474C4]" />
              <span className="text-sm font-medium">
                Consultation des déclarations
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Link
            href="/declare"
            className="rounded-xl bg-[#0474C4] px-8 py-4 text-center text-base font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#023e73] hover:shadow-xl">
            Déclarer un objet
          </Link>
          <Link
            href=""
            className="rounded-xl border border-gray-200 bg-white px-8 py-4 text-center text-base font-semibold text-gray-700 transition hover:border-[#0474C4] hover:text-[#0474C4]">
            Explorer les déclarations
          </Link>
        </div>
      </div>
    </section>
  );
}