// src/pages/DetalleItem.jsx
import useCategoria from '../hooks/useCategoria';

export default function DetalleItem() {
    const { categoria, id, item } = useCategoria();

    if (!item) {
        return <p className="p-4 text-red-500 text-center">Elemento no encontrado.</p>;
    }

    const imagenPath = `/assets/${categoria}/${id}.png`;

    return (
        <div className="p-6 text-center">
            <h1 className="text-3xl font-bold text-purple-700 mb-4 capitalize">{item.nombre}</h1>
            <img
                src={imagenPath}
                alt={item.nombre}
                className="mx-auto w-48 h-48 mb-4 object-contain"
                onError={(e) => {
                    e.target.src = "/assets/default.png"; // Imagen por defecto si no encuentra la específica
                }}
            />
            <button
                onClick={() => new Audio(item.audio).play()}
                className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700"
            >
                🔊 Escuchar nombre
            </button>
            <p className="mt-4 text-sm text-gray-600 italic">Categoría: {categoria}</p>
            <p className="text-sm text-gray-800">{item.descripcion}</p>
        </div>
    );
}
