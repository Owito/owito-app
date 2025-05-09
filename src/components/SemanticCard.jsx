// src/components/SemanticCard.jsx
import { Link } from 'react-router-dom';

export default function SemanticCard({ categoria, nombre, descripcion, audio }) {
    const ruta = `/${categoria}/${nombre.toLowerCase()}`;
    const audioSrc = audio || `/audios/${nombre.toLowerCase()}.mp3`;

    return (
        <div className="bg-purple-100 p-4 rounded-xl shadow-md text-center">
            <h2 className="font-semibold text-lg capitalize">{nombre}</h2>
            <p className="text-sm italic mb-2">{descripcion}</p>
            <div className="flex flex-col items-center gap-2">
                <button
                    onClick={() => new Audio(audioSrc).play()}
                    className="bg-purple-500 text-white px-3 py-1 rounded-full hover:bg-purple-600"
                >
                    🔊 Escuchar
                </button>
                <Link
                    to={ruta}
                    className="text-purple-700 text-sm underline hover:text-purple-900"
                >
                    Ver detalle
                </Link>
            </div>
        </div>
    );
}
