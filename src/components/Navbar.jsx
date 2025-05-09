// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const categories = [
    { name: "Jardín", path: "/" },
    { name: "Frente", path: "/frente" },
    { name: "Garaje", path: "/garaje" },
    { name: "Sala", path: "/sala" },
    { name: "Cocina", path: "/cocina" },
    { name: "Baño", path: "/bano" },
    { name: "Cuarto", path: "/cuarto" },
    { name: "Patio", path: "/patio" }
];

export default function Navbar() {
    return (
        <nav className="bg-purple-600 text-white p-4 shadow-lg">
            <div className="flex flex-wrap justify-center gap-4">
                {categories.map((cat) => (
                    <Link
                        key={cat.name}
                        to={cat.path}
                        className="bg-white text-purple-700 font-semibold px-4 py-2 rounded-xl shadow hover:bg-purple-100 transition-all text-sm"
                    >
                        {cat.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
