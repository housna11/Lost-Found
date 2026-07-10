"use client";
import ObjectCard from "../Components/ObjectCard";

type Item = {
  id: number;
  title: string;
  description: string;
  type: "lost" | "found";
  location: string;
  date: string;
  image: string | null;
};
type ObjectGridProps={
    items: Item[];
};
export default function ObjectGrid({ items }: ObjectGridProps) {
  if (items.length === 0) {
    return (
      <div className="rounded-3xl bg-white p-16 text-center shadow-sm">
        <h3 className="text-2xl font-semibold text-gray-700">Aucun objet trouvé</h3>
        <p className="mt-3 text-gray-500">Vous n&#39;avez encore déclaré aucun objet.</p>
      </div>
    );
  }
  
  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Déclarations récentes</h2>
          <p className="mt-2 text-gray-500">Consultez les derniers objets perdus et trouvés.</p>
        </div>
        <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-[#0474C4]">
          {items.length} objet{items.length > 1 ? "s" : ""}
        </span>
      </div>
      
      <section id="objects" className="grid grid-cols-3 gap-8">
        {items.map((item) => (
          <ObjectCard key={item.id} {...item} />
        ))}
      </section>
    </>
  );

}