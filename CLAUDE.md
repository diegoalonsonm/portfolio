# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start development server with HMR
npm run build    # Build for production
npm run lint     # Run ESLint on .js and .jsx files
npm run preview  # Preview production build locally
```

## Architecture Overview

This is a personal portfolio website built with React 18 and Vite. It uses React Bootstrap for UI components and SCSS for custom styling.

### Project Structure

- **Entry point**: `src/main.jsx` renders `App.jsx` wrapped in React.StrictMode
- **Main layout**: `src/App.jsx` composes the page using Bootstrap Container/Row/Col grid with section components
- **Components**: `src/components/` contains page sections (Hero, About, Projects, Skills, Contact, Footer, Navbar)
- **Reusable components**: `src/components/components/` contains shared UI elements (Button, Card, ProjectCard)
- **Styling**: `sass/main.scss` defines Bootstrap theme overrides and custom styles (loaded in App.jsx)
- **Assets**: `src/assets/` contains images and PDF files

### Styling Approach

Bootstrap is customized via SCSS variables in `sass/main.scss`:
- Theme colors (`$primary`, `$secondary`, etc.) are defined before importing Bootstrap SCSS
- Custom classes like `.hero-gradient` and `.card-gradient` provide animated gradient effects
- Components use Bootstrap utility classes extensively

### Component Pattern

Page sections are functional components that:
- Import the main SCSS file for styling consistency
- Use Bootstrap components from `react-bootstrap` (Container, Row, Col)
- Export as default (some use named exports like `Hero` and `Contact`)
