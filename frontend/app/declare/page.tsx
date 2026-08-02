"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import {createObject} from "../Services/auth";
import toast  from "react-hot-toast";
import Link from "next/link";
import {ArrowLeft} from "lucide-react";


export default function Declare() {
  const [preview, setPreview] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    type: "",
    location: "",
    date: "",
    image: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  if (e.target instanceof HTMLInputElement && e.target.type === "file") {
    const file = e.target.files?.[0] || null;
    setForm({...form, image: file,});
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
    return;
  }
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {e.preventDefault();
    try {
    await createObject(form);
    toast.success("Objet déclaré !");
     setForm({
      title: "",
      description: "",
      type: "",
      location: "",
      date: "",
      image: null,
    });
    setPreview(null);
  } catch (error) {
    toast.error("Une erreur est survenue.");
  }
  };

  return (
    <div className="pt-25 pb-25 min-h-screen bg-gradient-to-br from-[#eaf4ff] via-white to-[#f5f9ff] flex items-center justify-center px-4">
      <div className="w-full max-w-3xl transform transition">
        <Link
          href="/"
          className="mb-3 inline-flex items-center gap-2 text-[#0474C4] font-semibold">
          <ArrowLeft size={18} />
        </Link>
        <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-6 sm:p-8 hover:shadow-2xl transition duration-300">
            <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#023e73] to-[#0474C4] flex items-center justify-center text-3xl shadow-lg">
                📦
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#023e73]">Déclarer un objet</h2>
                  <p className="text-gray-500 mt-1">Remplissez les informations concernant l&#39;objet perdu ou trouvé.</p>
                </div>
            </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              placeholder="Titre"
              value={form.title}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-[#0474C4]
              transition hover:border-[#0474C4]"
              required/>
            <textarea
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-[#0474C4]
              transition hover:border-[#0474C4] resize-none h-24"
              required/>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-[#0474C4]
              transition hover:border-[#0474C4]"
              required>
              <option value="">Choisir le type</option>
              <option value="lost">Perdu</option>
              <option value="found">Trouvé</option>
            </select>

            <input
              type="text"
              name="location"
              placeholder="Lieu"
              value={form.location}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-[#0474C4]
              transition hover:border-[#0474C4]"
              required/>

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-[#0474C4]
              transition hover:border-[#0474C4]"
              required/>
            <div>
              <label className="block text-sm font-medium text-[#0474C4] mb-2">
                Image
              </label>
              <label
                htmlFor="image"
                className="flex items-center justify-center w-full h-48 border-2 border-dashed border-[#0474C4] rounded-xl cursor-pointer hover:bg-blue-50 transition overflow-hidden">
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-cover"/>
                    ) : (
                  <span className="text-gray-500 text-center">📷 <br />Choisir une image</span>)}
              </label>

                <input
                    id="image"
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    className="hidden"/>
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-gradient-to-r from-[#023e73] via-[#0474C4] to-[#2196f3] text-white rounded-xl py-4 font-semibold
                text-lg
                shadow-lg
                hover:shadow-xl
                hover:-translate-y-0.5
                transition cursor-pointer">
              Enregistrer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}