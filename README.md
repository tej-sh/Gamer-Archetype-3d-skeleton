# Gamer Archetype 3D

An interactive 3D personality quiz that identifies your gamer archetype based on your answers. The experience takes place inside a stylized 3D environment with interactive characters, cards, lighting, and quiz logic.

## Live Demo

[Open the Gamer Archetype 3D experience](https://tej-sh.github.io/Gamer-Archetype-3d-sekeleton/)

## Preview

<video src="./docs/demo.mp4" controls width="100%"></video>

## Features

- Interactive 3D quiz experience
- Four gamer archetypes:
  - Survivor
  - Goofball
  - Predator
  - Tactician
- Multiple-choice questions with score-based archetype tracking
- 3D environment built with React Three Fiber
- Interactive camera controls
- GLTF 3D models for characters and environment assets
- Custom lighting and scene composition
- Vite-powered development and production builds

## Built With

- React
- Vite
- React Three Fiber
- Three.js
- `@react-three/drei`
- Leva
- JavaScript
- HTML
- CSS

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/tej-sh/Gamer-Archetype-3d-sekeleton.git
```

Navigate to the project directory:

```bash
cd Gamer-Archetype-3d-sekeleton
```

Install the dependencies:

```bash
npm install
```

## Running the Project

Start the development server:

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs Oxlint |

## Project Structure

```text
.
├── public/
│   ├── assets/
│   ├── fonts/
│   └── models/
├── src/
│   ├── quiz/
│   │   └── quizquestions.json
│   ├── ActualScene.jsx
│   ├── App.jsx
│   ├── Arcade.jsx
│   ├── Card.jsx
│   ├── Options.jsx
│   ├── QuizEngine.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── docs/
│   └── demo.mp4
├── image.png
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## How It Works

The quiz presents a series of questions with four answer choices. Each answer contributes points to one or more gamer archetypes.

The available archetypes are:

- **Survivor** — adaptable, resilient, and focused on staying alive
- **Goofball** — playful, unpredictable, and entertaining
- **Predator** — competitive, aggressive, and goal-oriented
- **Tactician** — strategic, analytical, and methodical

The quiz engine tracks the selected answers and calculates the archetype scores throughout the experience.

## 3D Scene

The 3D scene includes:

- A basement environment
- A floor and table
- Three character models
- Interactive question and answer cards
- Orbit camera controls
- Ambient and spotlight lighting
- GLTF assets loaded from the `public/models` directory

## Production Build

Create an optimized production build with:

```bash
npm run build
```

The generated files will be placed in the `dist` directory.

## Deployment

This project can be deployed to platforms that support Vite applications, including:

- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages
