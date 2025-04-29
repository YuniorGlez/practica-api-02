# Dragon Ball API Training – Guía y Asistente IA

Proyecto de formación para practicar llamadas a API REST con Axios en JavaScript, utilizando una API simulada de personajes de Dragon Ball, una guía de pasos interactiva y un asistente de IA para resolver dudas.

## Estructura del Proyecto

```
db/
├─ db.json         # Datos para JSON Server
assistant/
├─ server.js       # Servidor backend para el Asistente IA
├─ package.json
├─ .env.example    # Plantilla para variables de entorno (API Key)
└─ .env            # (Crear manualmente) Variables de entorno
frontend/
├─ src/
│  ├─ index.html    # Estructura principal de la UI
│  ├─ index.css     # (Opcional) Estilos básicos
│  ├─ api.js        # **ARCHIVO A MODIFICAR POR ALUMNOS** (Stubs de Axios)
│  ├─ ui.js         # Lógica de manipulación del DOM (lista, formulario)
│  ├─ main.js       # Orquestador principal (inicialización, eventos)
│  ├─ guide.js      # Lógica de la guía de pasos interactiva
│  └─ ai-assistant.js # Lógica del chat con el asistente IA
├─ package.json
.gitignore
README.md
prd.md
```

## Prerrequisitos

- Node.js (v16 o superior recomendado)
- npm (viene con Node.js)
- Una API Key de OpenAI ([https://platform.openai.com/api-keys](https://platform.openai.com/api-keys))

## Instalación

1.  **Clonar el repositorio** (si aplica) o descargar los archivos.
2.  **Instalar dependencias del Frontend:**
    ```bash
    cd frontend
    npm install
    cd ..
    ```
3.  **Instalar dependencias del Asistente IA:**
    ```bash
    cd assistant
    npm install
    ```
4.  **Configurar API Key:**
    - Copia `assistant/.env.example` a `assistant/.env`.
    - Edita `assistant/.env` y reemplaza `your_openai_api_key_here` con tu API Key real de OpenAI.
    ```bash
    # Dentro de la carpeta assistant/
    cp .env.example .env
    # Ahora edita el fichero .env con tu clave
    ```

## Cómo Empezar

Necesitas tener dos terminales abiertas para ejecutar los servidores.

**Terminal 1: Levantar JSON Server (API Simulada)**

Desde la raíz del proyecto (`dragonball/`):

```bash
npm install -g json-server # Instalar globalmente si no lo tienes
json-server --watch db/db.json --port 3000
```

Esto iniciará la API REST simulada en `http://localhost:3000`. Puedes acceder a `http://localhost:3000/characters` en tu navegador para ver los datos.

**Terminal 2: Levantar Asistente de IA**

Desde la raíz del proyecto (`dragonball/`):

```bash
cd assistant
npm start
```

Esto iniciará el servidor del asistente en `http://localhost:4000` (o el puerto definido en `.env`).

**Abrir Frontend**

- Abre el archivo `frontend/src/index.html` directamente en tu navegador web.
- Opcional: Si tienes `live-server` instalado (`npm install -g live-server`), puedes ejecutarlo desde la carpeta `frontend/src` para tener recarga automática:
  ```bash
  cd frontend/src
  live-server
  ```

## El Ejercicio

1.  Sigue los pasos indicados en la **Guía de Aprendizaje** en el panel lateral.
2.  Tu tarea principal es **implementar las funciones** dentro de `frontend/src/api.js` usando `axios` para realizar las llamadas a la API de JSON Server (`http://localhost:3000/characters`).
3.  Si tienes dudas sobre Axios, cómo hacer las llamadas, o conceptos de API/asincronía, utiliza el **Asistente de IA** en el panel derecho.

¡Mucha suerte! 