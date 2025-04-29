# Dragon Ball API Training – Guía y Asistente IA

Proyecto de formación para practicar llamadas a API REST con Axios en JavaScript, utilizando una API simulada de personajes de Dragon Ball, una guía de pasos interactiva y un asistente de IA para resolver dudas.

## Estructura del Proyecto

```
db/
├─ db.json         # Datos para JSON Server
frontend/
├─ src/
│  ├─ index.html    # Estructura principal de la UI
│  ├─ index.css     # (Opcional) Estilos básicos
│  ├─ api.js        # **ARCHIVO A MODIFICAR POR ALUMNOS** (Stubs de Axios)
│  ├─ ui.js         # Lógica de manipulación del DOM (lista, formulario)
│  ├─ main.js       # Orquestador principal (inicialización, eventos)
│  ├─ guide.js      # Lógica de la guía de pasos interactiva
├─ package.json
.gitignore
README.md
prd.md
```

## Prerrequisitos

- Node.js (v16 o superior recomendado)
- npm (viene con Node.js)

## Instalación

1.  **Clonar el repositorio** (si aplica) o descargar los archivos.
2.  **Instalar dependencias del Frontend:**
    ```bash
    cd frontend
    pnpm install
    pnpm run dev
    cd ..
    ```


## Cómo Empezar

Necesitas tener dos terminales abiertas para ejecutar los servidores.

**Terminal 1: Levantar JSON Server (API Simulada)**

Desde la raíz del proyecto (`dragonball/`):

```bash
npm install -g json-server # Instalar globalmente si no lo tienes
cd db
json-server --watch db/db.json --port 3000
```

Esto iniciará la API REST simulada en `http://localhost:3000`. Puedes acceder a `http://localhost:3000/characters` en tu navegador para ver los datos.

**Terminal 2: Levantar el frontend**

Desde la raíz del proyecto (`dragonball/`):

```bash
cd frontend
pnpm install
pnpm dev
```

## El Ejercicio

1.  Sigue los pasos indicados en la **Guía de Aprendizaje** en el panel lateral.
2.  Tu tarea principal es **implementar las funciones** dentro de `frontend/src/api.js` usando `axios` o usando `fetch` para realizar las llamadas a la API de JSON Server (`http://localhost:3000/characters`).

¡Mucha suerte! 
