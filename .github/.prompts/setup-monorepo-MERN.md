You are a senior full-stack engineer. Help me scaffold a MERN stack MonoRepo 
from scratch with the following requirements:

---

## 📁 Repo Structure

Create a monorepo with two top-level folders:
- `frontend/` — React (Vite + TypeScript)
- `backend/`  — Node.js + Express (TypeScript)

Also include a root-level `package.json` to manage both workspaces.

---

## 🖥️ Frontend (`frontend/`)

- Use **Vite** with **React** and **TypeScript**
- Run on **port 5173**
- Set up **ESLint** with TypeScript support and enforce coding standards
- Configure **Vitest** with a basic sample test (e.g., renders a component)
- Create a `.env` file:
  VITE_API_URL=http://localhost:5000

---

## 🛠️ Backend (`backend/`)

- Use **Node.js** + **Express** with **TypeScript** (compiled via `ts-node` or `tsx`)
- Run on **port 5000**
- Connect to **MongoDB** using **Mongoose**
- Set up **ESLint** with TypeScript support and enforce coding standards
- Configure **Vitest** with a basic sample test (e.g., a health check route test)
- Create a `.env` file:
  PORT=5000
  MONGO_URI=mongodb://localhost:27017/mern_dev
  CLIENT_URL=http://localhost:5173

---

## 🔗 CORS

- Enable **CORS** in the backend using the `cors` package
- Allow requests from `http://localhost:5173` (the frontend origin)
- Set allowed methods: GET, POST, PUT, DELETE
- Allow credentials if needed

---

## 🗄️ MongoDB

- Connect to the **local MongoDB** instance using the `MONGO_URI` from `.env`
- Use **Mongoose** for the connection
- Log a success message on connection: `MongoDB connected successfully`
- Handle connection errors gracefully

---

## 📏 Linting & Code Standards

For **both** frontend and backend:
- Use **ESLint** with `@typescript-eslint` plugin
- Enforce: no unused variables, consistent return, no explicit `any`
- Include a `.eslintrc.json` (or `eslint.config.js`) in each folder
- Add a `lint` script in each `package.json`:
  "lint": "eslint . --ext .ts,.tsx"

---

## 🧪 Vitest

For **both** frontend and backend:
- Install and configure **Vitest**
- Write one basic test in each:
  - Frontend: test that the `<App />` component renders without crashing
  - Backend: test that `GET /health` returns `200 OK`
- Add a `test` script in each `package.json`:
  "test": "vitest run"

---

## 📦 Root `package.json`

Set up npm workspaces and add these root-level scripts:
  "scripts": {
    "dev": "concurrently \"npm run dev --workspace=frontend\" \"npm run dev --workspace=backend\"",
    "lint": "npm run lint --workspace=frontend && npm run lint --workspace=backend",
    "test": "npm run test --workspace=frontend && npm run test --workspace=backend"
  }

Install `concurrently` at the root to run both servers simultaneously.

---

## ✅ Final Checklist

Make sure:
- [ ] Both servers run on different ports (5173 and 5000)
- [ ] Frontend can call backend APIs via `VITE_API_URL`
- [ ] Backend connects to local MongoDB on startup
- [ ] CORS is properly configured so both ends can communicate
- [ ] `.env` files exist in both `frontend/` and `backend/`
- [ ] `.env` files are added to `.gitignore`
- [ ] ESLint is configured and working in both ends
- [ ] Vitest is configured with at least one passing test in both ends

Generate all files and folder structures needed to get started.