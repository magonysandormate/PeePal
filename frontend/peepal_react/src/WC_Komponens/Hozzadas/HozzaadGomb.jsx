import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function HozzaadGomb() {
  return (
    <Link
      to="/hozzaadas"
      className="fixed bottom-6 right-6 w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition"
    >
      <Plus size={24} />
    </Link>
  );
}
