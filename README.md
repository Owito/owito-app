# 🧠 Owito: Intervención Semántica con TIC

**Owito** es una aplicación web progresiva (PWA) diseñada para la intervención terapéutica del lenguaje, enfocada en niños y jóvenes con discapacidad cognitiva. Utiliza principios de accesibilidad, diseño UX centrado en el usuario y redes semánticas visuales del entorno cotidiano del hogar.

## 🎯 Propósito
Facilitar la estimulación semántica del lenguaje a través de pictogramas, audio, navegación táctil y categorización de elementos de la casa, como herramienta en sesiones clínicas y educativas.

## 🏠 Categorías semánticas
- Jardín
- Frente de la casa
- Garaje
- Sala
- Cocina
- Baño
- Cuarto
- Patio

## 🧩 Tecnologías utilizadas
- **React + Vite** para el frontend
- **Tailwind CSS** para un diseño limpio y responsivo
- **React Router DOM** para navegación modular
- **Web Speech API** para texto a voz
- **Firebase (opcional)** para autenticación y almacenamiento
- **PWA**: soporte offline, instalación y uso autónomo

## 🗂️ Estructura del proyecto
src/
├── assets/ # Íconos y pictogramas
├── components/ # Navbar, SemanticCard, Layout
├── pages/ # Vistas por cada categoría
├── data/ # categorias.json
├── hooks/ # useCategoria.js
├── routes.jsx # Sistema de rutas anidadas
└── App.jsx # Contenedor principal

## 🚀 Cómo ejecutar
1. Clona el repositorio:
git clone https://github.com/Owito/owito-app.git

2. Instala dependencias

3. Ejecuta en desarrollo:
npm run dev

4. Abre en tu navegador:
http://localhost:5173


## 🤝 Contribuciones

Este proyecto está abierto a aportes de fonoaudiólogos, diseñadores UX, educadores y desarrolladores interesados en accesibilidad y tecnología asistiva.

---

© 2025 Carlos G · Proyecto Owito


