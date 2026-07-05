"use client";

export default function SearchFilter() {
  return (
    <section className="mb-10 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-end gap-6">
        <div className="flex-1">
          <label className="mb-2 block text-sm font-semibold text-gray-700">Rechercher</label>
          <input
            type="text"
            placeholder="Titre ou description..."
            className="w-full rounded-xl border border-gray-200 px-5 py-3 outline-none transition focus:border-[#0474C4] focus:ring-4 focus:ring-blue-100"/>
        </div>

        <div className="w-56">
          <label className="mb-2 block text-sm font-semibold text-gray-700">Type</label>
          <select
            className="w-full rounded-xl border border-gray-200 px-5 py-3 outline-none transition focus:border-[#0474C4] focus:ring-4 focus:ring-blue-100">
            <option>Tous</option>
            <option>Perdu</option>
            <option>Trouvé</option>
          </select>
        </div>

        <div className="w-64">
          <label className="mb-2 block text-sm font-semibold text-gray-700">Lieu</label>
          <input
            type="text"
            placeholder="Ex : Casablanca"
            className="w-full rounded-xl border border-gray-200 px-5 py-3 outline-none transition focus:border-[#0474C4] focus:ring-4 focus:ring-blue-100"/>
        </div>
      </div>
    </section>
  );
}