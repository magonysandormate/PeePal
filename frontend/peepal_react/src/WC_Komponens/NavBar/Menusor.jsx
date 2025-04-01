import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Menusor() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-yellow-200 text-amber-900 py-4 px-6 flex justify-between items-center shadow-md sticky top-0 w-full z-50">
      <Link to="/" className="text-2xl font-bold flex items-center">
        <img src="/Logo.png" alt="PeePal Logo" className="h-14 ml-2 hover:h-15" />
      </Link>

      {/* Hamburger ikon */}
      <button
        className="md:hidden text-amber-900"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Menü */}
      <ul
        className={`md:flex md:space-x-6 md:items-center text-lg ${
          menuOpen
            ? "absolute top-16 left-0 w-full bg-yellow-200 flex flex-col items-center space-y-4 py-4 shadow-lg"
            : "hidden md:flex"
        }`}
      >
        <li>
          <Link
            to="/kereso"
            className="hover:bg-yellow-500 px-4 py-2 rounded-lg transition"
          >
            Legközelebbi mosdó
          </Link>
        </li>
        <li className="hidden md:block border-l-2 border-amber-800 h-10"></li>
        <li>
          <Link
            to="/bejelentkezes"
            className="hover:bg-yellow-500 px-4 py-2 rounded-lg transition"
          >
            Bejelentkezés
          </Link>
        </li>
        <li>
          <Link
            to="/regisztracio"
            className="hover:bg-yellow-500 px-4 py-2 rounded-lg transition"
          >
            Regisztráció
          </Link>
        </li>
      </ul>
    </nav>
  );
}
