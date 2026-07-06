"use client";
import { Dispatch, SetStateAction } from "react";

type SearchFilterProps = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;

  type: string;
  setType: Dispatch<SetStateAction<string>>;

  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
};

export default function SearchFilter ({
   search,
  setSearch,
  type,
  setType,
  location,
  setLocation,
}: SearchFilterProps) {
  return (
    <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-end gap-6">
        <div className="flex-1">
          <label className="mb-2 block text-sm font-semibold text-gray-700">Rechercher</label>
          <input value={search} onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Titre ou description..."
            className="w-full rounded-xl border border-gray-200 px-5 py-3 outline-none transition focus:border-[#0474C4] focus:ring-4 focus:ring-blue-100"/>
        </div>

        <div className="w-56">
          <label className="mb-2 block text-sm font-semibold text-gray-700">Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)}
            className="w-full rounded-xl border border-gray-200 px-5 py-3 outline-none transition focus:border-[#0474C4] focus:ring-4 focus:ring-blue-100">
            <option value="">Tous</option>
            <option value="lost">Perdu</option>
            <option value="found">Trouvé</option>
          </select>
        </div>

        <div className="w-64">
          <label className="mb-2 block text-sm font-semibold text-gray-700">Lieu</label>
          <input value={location} onChange={(e) => setLocation(e.target.value)}
            type="text"
            placeholder="Ex : Casablanca"
            className="w-full rounded-xl border border-gray-200 px-5 py-3 outline-none transition focus:border-[#0474C4] focus:ring-4 focus:ring-blue-100"/>
        </div>
      </div>
    </section>
  
  );
  
}
