# 🧠 Owito: Intervención Semántica con TIC

**Owito** es una aplicación web progresiva (PWA) diseñada para apoyar procesos terapéuticos en niños y jóvenes con discapacidad cognitiva mediante la estimulación semántica del lenguaje. Integra pictogramas, audio y navegación accesible en un entorno lúdico centrado en las partes de una casa.

## 🎯 Propósito

Facilitar la intervención clínica y educativa del lenguaje a través de actividades visuales e interactivas que promuevan la comprensión, clasificación y uso funcional del vocabulario del hogar.

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

- ⚛️ **React + Vite** – Framework moderno para interfaces reactivas
- 🎨 **Tailwind CSS** – Estilos utilitarios para diseño accesible
- 🔀 **React Router DOM** – Navegación modular entre categorías
- 🔊 **Web Speech API** – Funcionalidad de texto a voz integrada
- 🔐 **Firebase (opcional)** – Autenticación y almacenamiento en la nube
- 📲 **PWA** – Uso sin conexión, instalable como app móvil

## 🗂️ Estructura del proyecto

```
src/
├── assets/         # Íconos y pictogramas
├── components/     # Navbar, SemanticCard, Layout
├── pages/          # Vistas por cada categoría
├── data/           # categorias.json
├── hooks/          # useCategoria.js
├── routes.jsx      # Sistema de rutas anidadas
└── App.jsx         # Contenedor principal
```

## 🚀 Cómo ejecutar

1. Clona el repositorio:
   ```
   git clone https://github.com/Owito/owito-app.git
   ```

2. Instala dependencias:
   ```
   npm install
   ```

3. Ejecuta en desarrollo:
   ```
   npm run dev
   ```

4. Accede desde el navegador:
   ```
   http://localhost:5173
   ```

## 🤝 Contribuciones

Este proyecto da la bienvenida a profesionales en fonoaudiología, diseño UX, educación especial y desarrollo de tecnología inclusiva.

---

© 2025 Carlos G. · Proyecto Owito
