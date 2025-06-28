# 🧙‍♀️ Hogwarts Character Explorer

**Explora, filtra y descubre personajes del universo de Harry Potter.** Esta aplicación hecha con React permite buscar, filtrar por casa y especie, ver detalles individuales, ¡y sumergirse en una experiencia mágica con música incluida!

---

## ✨ Características principales

- 🔍 Búsqueda por nombre con entrada controlada.
- 🏰 Filtros por casa y especie (con íconos mágicos).
- 🔄 Botón para reiniciar filtros y empezar de nuevo.
- 📄 Vista detallada de cada personaje.
- 🚫 Manejo de URLs inválidas con mensaje personalizado.
- 🎶 Reproductor musical inspirado en Hogwarts.
- 📱 Diseño responsive y estilizado con SCSS.

---

## 🛠️ Tecnologías usadas

- React con hooks (`useState`, `useEffect`, `useRef`)
- React Router (`Routes`, `useParams`, `useNavigate`)
- Fetch API
- SCSS (para estilos tematizados)
- 🎵 Archivos de sonido y 🎨 recursos gráficos personalizados

---

## 📦 Instalación del proyecto

```bash
git clone https://github.com/Adalab/modulo-3-evaluacion-final-SaNdRyXu
cd cd modulo-3-evaluacion-final-SaNdRyXu
npm install
npm run dev

📁 Estructura del proyecto
src/
├── components/
│   ├── Character.jsx
│   ├── CharacterDetail.jsx
│   ├── CharacterList.jsx
│   ├── Header.jsx
│   ├── House.jsx
│   ├── Music.jsx
│   ├── Reset.jsx
│   ├── Search.jsx
│   ├── Species.jsx
│   └── SpeciesIcon.jsx
├── images/
│   ├── background.jpg
│   ├── flecha-select.jpg
│   ├── gryffindor.jpg
│   ├── harrypotter.png
│   ├── hufflepuff.jpg
│   ├── ravenclaw.jpg
│   ├── sin-casa.jpg
│   ├── slytherin.jpg
│   └── specie.png
├── sounds/
│   └── music-harry-potter.mp3
├── styles/
│   └── App.scss
├── App.jsx
└── index.js

```

## ❗ Comportamientos especiales.

Si se visita una URL con un id inexistente como /character/9999, aparece el mensaje: “🧙‍♂️ El personaje que buscas no existe” junto al botón para volver.

Si no hay resultados para la búsqueda por nombre, se muestra: “No se encuentra el nombre indicado 🧹”

Si falta una imagen de personaje, se utiliza una de un gato aleatorio (placecats.com).

El componente de música reproduce una pista mágica con control de volumen y bucle.


✍️ Autora
Proyecto realizado por Sandra como parte del reto final del módulo de React en Adalab 🧙‍♀️🎓

⚠️ Licencia
Este proyecto tiene fines educativos y personales. Imágenes, nombres y música relacionados con el mundo de Harry Potter pertenecen a sus respectivos creadores.