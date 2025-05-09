// src/hooks/useCategoria.js
import { useParams } from 'react-router-dom';
import categorias from '../data/categorias.json';

export default function useCategoria() {
    const { categoria, id } = useParams();

    const datos = categorias[categoria] || [];
    const item = datos.find(el => el.nombre.toLowerCase() === id.toLowerCase());

    return { categoria, id, item };
}
