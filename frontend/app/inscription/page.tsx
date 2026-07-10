"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { register } from "../Services/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Inscription() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit=async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  try{
    await register (form.name, form.email, form.password, form.password_confirmation);
    toast.success("Inscription réussie!");
    router.push("/connexion");
  } catch(error) {
    toast.error("Une erreur est survenue");
    console.error(error);
  }
  };
  return (
  <div className="bg-gradient-to-br mt-27 flex justify-center">
    <div className="flex flex-col-reverse md:flex-row w-full max-w-5xl shadow-xl rounded-2xl overflow-hidden bg-white">

      {/* Formulaire */}
      <div className="md:w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-center text-[#0474C4] mb-6">Inscription</h2>
        <p className="text-center text-gray-500 mb-6">Créez votre compte Lost & Found</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#0474C4] mb-1">Nom complet</label>
            <input
              type="text"
              name="name"
              placeholder="Entrez votre nom"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0474C4]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#0474C4] mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="exemple@email.com"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0474C4]"
              required/>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#0474C4] mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0474C4]"
              required/>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#0474C4] mb-1">
              Confirmer le mot de passe
            </label>
            <input
              type="password"
              name="password_confirmation"
              placeholder="••••••••"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0474C4]"
              required/>
          </div>

          <button
            type="submit"
            className="w-full bg-[#0474C4] text-white py-3 rounded-lg cursor-pointer hover:bg-[#023e73] transition shadow-md"
          >
            S&#39;inscrire
          </button>
        </form>

        <p className="text-sm text-center mt-5 text-gray-600">
          Déjà un compte ?{" "}
          <Link
            href="/connexion"
            className="text-[#0474C4] font-semibold underline">
            Se connecter
          </Link>
        </p>
      </div>

      <div className="md:w-1/2">
        <img
          src="/found.jpg"
          alt="Inscription"
          className="w-full h-full object-cover"/>
      </div>
    </div>
  </div>
);
};

