"use client";
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { login } from "../Services/auth";
import toast from "react-hot-toast";
export default function Connexion() {
const router = useRouter();

const [form, setForm] = useState({email: "",password: "",});
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
    const data = await login(form.email, form.password);
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    toast.success("Connexion réussie !");
    window.location.href = "/";
  } catch (error) {
    toast.error("Email ou mot de passe incorrect");
  }
};

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
  <div className=" bg-gradient-to-br mt-34 ">
    <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto shadow-xl rounded-2xl overflow-hidden bg-white">

      <div className="md:w-1/2">
        <img
          src="/found.jpg"
          alt="found"
          className="w-full h-full object-cover"/>
      </div>
      <div className="md:w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-center text-[#0474C4] mb-6">Connexion</h2>
        <p className="text-center text-gray-500 mb-6">Connectez-vous à votre compte Lost & Found</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#0474C4] mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="exemple@email.com"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-[#0474C4]"
              required/>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#0474C4] mb-1">Mot de passe</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-[#0474C4]"
              required/>
          </div>
          <button
            type="submit"
            className="w-full bg-[#0474C4] cursor-pointer text-white py-3 rounded-lg hover:bg-[#023e73] transition shadow-md">
            Se connecter
          </button>
        </form>
        <p className="text-sm text-center mt-5 text-gray-600">
          Pas de compte ?{" "}
          <Link
            href="/inscription"
            className="text-[#0474C4] font-semibold underline">S&#39;inscrire
          </Link>
        </p>
      </div>
    </div>
  </div>
);
};

