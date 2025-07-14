# 🐛 BugTracker App – MERN Stack Deployment & DevOps

A full-featured bug tracking system built with the MERN stack (MongoDB, Express.js, React, Node.js), designed to help developers report, manage, and resolve software issues efficiently. This project demonstrates deployment best practices, CI/CD pipelines, and production-ready configuration.

---

## 📌 Objective

Learn how to deploy a full MERN stack application to production, implement CI/CD pipelines, configure environment variables, and set up monitoring for your application using a real-world app – **BugTracker**.

---

## 📂 Tasks

### ✅ Task 1: Preparing the Application for Deployment

#### 🔧 Frontend (React)

- Optimized the React app using `vite build`.
- Applied code splitting and lazy loading for better performance.
- Configured environment variables via `.env` files.

#### 🔧 Backend (Express.js)

- Structured the server with MVC pattern (`/models`, `/routes`, `/controllers`).
- Configured `dotenv` for secure environment variables.
- Implemented centralized error handling middleware.
- Used `helmet` for HTTP header security.
- Integrated request logging with `morgan`.

#### 🗄️ Database (MongoDB)

- Hosted the database on **MongoDB Atlas**.
- Created secured database users with scoped access.
- Configured robust connection pooling with Mongoose.

---

### 🚀 Task 2: Deploying the Backend

- Deployed Express backend to **Render**.
- Set up GitHub-based CI/CD pipeline for automatic deployment.
- Configured backend environment variables (e.g., `MONGO_URI`, `PORT`).
- Render handles HTTPS and SSL certificate automatically.
- Enabled basic metrics monitoring on Render dashboard.

---

### 🚀 Task 3: Deploying the Frontend

- Deployed React frontend to **Vercel**.
- Configured build and deployment settings.
- Added environment variable `VITE_API_URL` to point to backend.
- Enabled automatic deployment from GitHub on push.
- HTTPS and CDN caching configured via Vercel.

---

### ⚙️ Task 4: CI/CD Pipeline Setup

- Used **GitHub Actions** to automate:
  - Running unit/integration tests
  - Linting code with ESLint
  - Building frontend and backend
  - Deploying on push to `main`
- Established staging and production branches for workflow control.
- Documented rollback procedure in case of deployment failure.

---

### 📈 Task 5: Monitoring and Maintenance

- Created a `/api/health` route to serve as a health check.
- Monitored uptime with **UptimeRobot**.
- Integrated **Sentry** for error tracking (frontend).
- Enabled logging via Render and browser dev tools.
- Planned weekly backup of MongoDB using Atlas tools.
- Documented maintenance tasks and update schedules.

---

## 🧪 Expected Outcome

- ✅ Live **BugTracker** app accessible on the internet
- ✅ Fully automated CI/CD pipeline
- ✅ Proper separation of development and production configs
- ✅ Monitoring system for performance and error tracking
- ✅ Deployment and maintenance documentation

---

## 🛠️ Setup

### Prerequisites

- Node.js, PNPM, Git
- MERN stack experience

### Required Accounts

- [GitHub](https://github.com)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Render](https://render.com) – for backend
- [Vercel](https://vercel.com) – for frontend

### Local Development

```bash
git clone https://github.com/yourusername/mern-bug-tracker.git
cd mern-bug-tracker

# Backend
cd server
pnpm install
pnpm run dev

# Frontend
cd ../client
pnpm install
pnpm run dev
```

## 🌍 Live Demo

Frontend: [https://bugtracker.vercel.app](https://bug-tracker-amber-three.vercel.app/)

Backend API: [https://bugtracker-api.onrender.com
](https://bugtracker-b8cg.onrender.com)
## 🧠 Tech Stack

Frontend: React, Vite, Tailwind CSS

Backend: Node.js, Express.js, MongoDB, Mongoose

Deployment: Vercel (frontend), Render (backend), GitHub Actions (CI/CD)

## 👨‍💻 Author

Richard Akintunde
BugTracker Project

## 📎 License

This project is licensed under the MIT License – for educational and demonstration purposes.
