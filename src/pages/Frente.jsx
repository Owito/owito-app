// src/pages/Frente.jsx
import { useEffect, useState } from 'react';
import SemanticCard from '../components/SemanticCard';
import categorias from '../data/categorias.json';

export default function Frente() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        setItems(categorias['frente']);
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-center mb-4 text-purple-700">🏠 Frente</h1>
            <div className="grid grid-cols-2 gap-4">
                {items.map((item) => (
                    <SemanticCard
                        key={item.nombre}
                        categoria="frente"
                        nombre={item.nombre}
                        descripcion={item.descripcion}
                        audio={item.audio}
                    />
                ))}
            </div>
        </div>
    );
}
