# Copilot Instructions for Arena-X

## Overview
Arena-X is a gaming tournament management platform that allows users to view, create, and manage tournaments. It's a monorepo with a Node.js/Express backend and a React frontend, using MongoDB for persistence.

## Project Structure
- `/back` - Express.js API server
- `/front` - React + Vite frontend application
- Both are independent npm projects

## Build, Test, and Lint Commands

### Backend (from `/back` directory)
```bash
npm install              # Install dependencies
npm run dev             # Start dev server with nodemon (port 5000)
```
No test or lint configuration currently in place.

### Frontend (from `/front` directory)
```bash
npm install             # Install dependencies
npm run dev             # Start Vite dev server (port 5173)
npm run build           # Build for production
npm run lint            # Run ESLint; fails on any warnings (--max-warnings 0)
npm run preview         # Preview production build locally
```

### Common Workflow
```bash
# Terminal 1: Start backend
cd back
npm install
npm run dev

# Terminal 2: Start frontend
cd front
npm install
npm run dev
```
Backend runs on `http://localhost:5000`, frontend on `http://localhost:5173`.

## High-Level Architecture

### Backend (Express.js + MongoDB)
- **Entry point**: `/back/index.js` - Initializes Express app, registers routers, sets up CORS for localhost:5173
- **Database**: MongoDB (connection via `/back/connection.js` using `process.env.MONGODB_URI`)
- **Models** (Mongoose schemas in `/back/models/`):
  - `User` - name, email, password
  - `Tournament` - game, entry_type, tournament_type, prize, team_size, region, platform, date_time, caption
- **Routes** (in `/back/routers/`):
  - `/user` - User CRUD (add, getall, update, delete) + authenticate + getbyemail/getbyid
  - `/tournament` - Tournament CRUD operations

### Frontend (React + React Router + Vite)
- **Entry point**: `/front/src/main.jsx` → `/front/src/App.jsx`
- **Routing** (via React Router):
  - `/` - Home
  - `/paid` - Paid tournaments
  - `/free` - Free tournaments
  - `/create` - Create tournament form
  - `/manage` - Manage tournaments
  - `/challenges_cash` - Cash challenges
  - `/challenges_xp` - XP challenges
- **Components** (all in `/front/src/components/`):
  - `Navbar`, `Footer`, `Home` (shared layout)
  - `Paid_tour`, `Free_tour` - Tournament browsing
  - `Create_tour` - Form to create tournament
  - `ManageTour` - Tournament management
  - `Challenges_cash`, `Challenges_xp` - Challenge pages
- **Styling**: Component-level CSS files (e.g., `create.css`, `manage.css`)
- **Notifications**: Notistack for toast/snackbar alerts
- **Forms**: Formik + Yup for validation

## Key Conventions

### Backend
- **Router pattern**: Each resource (User, Tournament) has a dedicated router file that handles CRUD via Express Router
- **Error handling**: All routes catch errors with `.catch()` and respond with `status(500).json(err)`
- **Success responses**: Return full object/array as JSON via `res.json()`
- **Parameter passing**: Query/path params via `req.params.*`, body data via `req.body`
- **Database operations**: Use Mongoose directly (e.g., `Model.find()`, `Model.findByIdAndUpdate()`) with promise chains

### Frontend
- **Component naming**: PascalCase (e.g., `Paid_tour.jsx`)
- **Export pattern**: Default export of functional components
- **Styling**: Import CSS file within each component file (e.g., `import './create.css'` in `Create_tour.jsx`)
- **Navigation**: Use React Router's `<Routes>` in App.jsx; components render at matched routes
- **Notifications**: Use Snackbar provider from notistack for user feedback

## Environment Setup
- Backend requires `MONGODB_URI` environment variable (set in `.env` file, loaded via `dotenv`)
- Backend CORS is hardcoded to allow `http://localhost:5173` only
- Frontend assumes backend API at `http://localhost:5000`

## Current Limitations & Notes
- No authentication middleware on backend routes (basic email/password matching in `/authenticate` endpoint)
- No validation middleware; request body is directly saved
- No tests or comprehensive error handling
- File upload support exists (multer dependency) but not actively used
- ESLint strict mode: linting fails on any warnings
