import Link from "next/link";

export default function Navbar() {

  return (
    <nav className="bg-gradient-to-r from-[#023e73] via-[#0474C4] to-[#7ec3ff] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-2xl font-bold tracking-wide hover:opacity-90 transition">
            Lost & Found
          </Link>
          <div className="flex items-center gap-8 text-base">
            <Link href="/" className="hover:opacity-80 transition font-medium">
              Accueil
            </Link>
            <Link href="" className="hover:opacity-80 transition font-medium">
              Déclarer
            </Link>
            <Link href="" className="hover:opacity-80 transition font-medium">
              Mes objets
            </Link>
            <Link href="" className="hover:opacity-80 transition font-medium">
              Dashboard
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="../connexion"
                className="text-white px-5 py-2 rounded-lg border border-white/30 hover:bg-white hover:text-[#0474C4] transition font-medium text-base">
                Connexion
              </Link>
              <Link
                href="/inscription"
                className="bg-white text-[#0474C4] px-5 py-2 rounded-lg font-semibold text-base hover:bg-blue-50 hover:shadow-md transition">
                Inscription
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

