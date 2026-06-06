# Planet App - Setup & Execution Guide

This guide explains how to set up and run the **Planet** React application locally.

---

## Prerequisites

Ensure you have the following installed on your machine:
* **Node.js** (v18.0.0 or higher recommended)
* **npm** (comes packaged with Node.js)

---

## Setup & Running the Project

Follow these steps to get the project up and running:

### 1. Install Dependencies
Navigate to the project root directory and run:
```bash
npm install
```

### 2. Run the Development Server
To start the local development server with hot-reload (HMR) support:
```bash
npm run dev
```
Once the command runs successfully, open your browser and navigate to the address shown in the terminal (typically [http://localhost:5173/](http://localhost:5173/)).

### 3. Build for Production
To build a highly optimized version of the app for deployment:
```bash
npm run build
```
The production-ready bundle will be generated in the `dist/` directory.

### 4. Preview Production Build
To preview the production build locally before deploying:
```bash
npm run preview
```

---

## Project Structure

Here is a breakdown of the key files and directories:
* **`public/assets/`** - Contains static assets (such as `logo.svg` and `earth.svg`).
* **`src/components/`** - Holds reusable UI components (like `Navbar` and `Hero`).
* **`src/App.jsx`** - Main entry component that ties the layout together.
* **`src/index.css`** - Global styles and theme tokens (colors, font-family, resets).
* **`vite.config.js`** - Configuration file for the Vite builder.
