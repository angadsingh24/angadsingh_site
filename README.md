# Angad Singh - Personal Website

A React-based personal portfolio website showcasing projects, experience, and information about Angad Singh.

## Features

- **Home Page**: Introduction and current involvements
- **About Page**: Personal background and values
- **Projects Page**: Showcase of technical projects
- **Modal System**: Interactive modals for detailed project/involvement information
- **Responsive Design**: Modern UI with smooth animations

## Tech Stack

- React 18
- React Router DOM
- Vite
- CSS3 with animations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── public/
│   └── images/          # Static images and assets
├── src/
│   ├── components/       # React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Modal.jsx
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # React entry point
│   ├── styles.css       # Global styles
│   └── index.css        # Base styles
├── index.html           # HTML template
├── package.json         # Dependencies
└── vite.config.js       # Vite configuration
```

## Notes

- The original HTML files (`index.html`, `about.html`, `projects.html`) and `script.js` have been preserved for reference but are no longer used by the React app.
- All images are served from the `public/images` directory.
- The website uses React Router for client-side navigation.
