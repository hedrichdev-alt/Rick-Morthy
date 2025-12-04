# Prueba Técnica Frontend - Rick and Morty Explorer

## 🎯 Objetivo

Desarrollar una aplicación web de una sola página (SPA) utilizando **React** que consuma la API pública de Rick and Morty para buscar, visualizar y gestionar personajes.

## 🔗 API

- **Documentación**: [https://rickandmortyapi.com/documentation](https://rickandmortyapi.com/documentation)
- **Endpoint Principal**: `https://rickandmortyapi.com/api/character`

## 📝 Requerimientos Funcionales

### 1. Listado de Personajes (Home)

- Mostrar una lista de personajes obtenidos de la API.
- Cada tarjeta de personaje debe mostrar al menos:
  - Imagen
  - Nombre
  - Especie
  - Estado (Vivo/Muerto/Desconocido)
- **Paginación**: Implementar paginación (botones "Anterior" y "Siguiente") o "Infinite Scroll" para navegar por los resultados.
- **Buscador**: Implementar un input para filtrar personajes por nombre.

### 2. Detalle del Personaje

- Al hacer clic en un personaje, navegar a una vista de detalle.
- Mostrar información adicional:
  - Origen
  - Ubicación actual
  - Lista de episodios en los que aparece.

### 3. Favoritos

- Permitir al usuario marcar/desmarcar personajes como "Favoritos" desde el listado o el detalle.
- Los favoritos deben persistir al recargar la página (usar `localStorage`).
- (Opcional) Una vista o filtro para ver solo los personajes favoritos.

## 🛠 Requerimientos Técnicos

- **Framework**: React (versión 18+).
- **Lenguaje**: JavaScript (ES6+) o TypeScript (Preferible).
- **Estado**: Uso de Hooks (`useState`, `useEffect`). Se valora el uso de Context API o Redux si la complejidad lo amerita.
- **Enrutamiento**: React Router (o similar).
- **Estilos**: Libre elección (CSS Modules, Styled Components, TailwindCSS, SASS). Se valora un diseño limpio y responsive.
- **Control de Versiones**: Git.

## ⚖️ Criterios de Evaluación

1. **Calidad del Código**: Limpieza, legibilidad y buenas prácticas.
2. **Estructura del Proyecto**: Organización de carpetas y componentes.
3. **Componentización**: Reutilización y separación de responsabilidades.
4. **UX/UI**: Usabilidad y diseño visual agradable.
5. **Manejo de Errores**: Gestión de estados de carga (loading) y errores de API.

## 🌟 Puntos Extra (Bonus)

- Uso de **TypeScript**.
- Implementación de **Unit Testing** (Jest, React Testing Library).

## 📦 Entregable

- Repositorio de GitHub/GitLab con el código fuente.
- Archivo `README.md` con instrucciones para instalar y ejecutar el proyecto.
