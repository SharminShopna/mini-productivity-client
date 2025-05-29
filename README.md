# ProdigyBoard 🧠✨

**ProdigyBoard** is a simple and powerful web-based productivity dashboard that helps users manage their **daily tasks**, set **weekly/monthly goals**, and stay motivated with a daily **quote** fetched from a public API. Built using the **MERN stack** with JWT-based authentication, this dashboard is perfect for keeping your day organized and on track.

---
🌐 Live Demo
[Coming Soon] 

## 🌟 Features

### ✅ Frontend (React.js)
- **User Authentication** (JWT-based register/login).
- **Dashboard View**:
  - Manage Daily Tasks (Add/Edit/Delete/Mark Complete).
  - Weekly/Monthly Goals Tracker.
  - Motivational Quote from a public API (`zenquotes.io` or `quotable.io`).
- **Bonus Features**:
  - Drag-and-drop task reordering.
  - Light/Dark mode toggle.

### 🔧 Backend (Node.js + Express + MongoDB)
- **Authentication Routes**:
  - User Registration
  - Login
  - JWT Token Verification
- **CRUD APIs**:
  - Tasks (Create, Read, Update, Delete)
  - Goals (Create, Read, Update, Delete)
- **MongoDB (with Mongoose)** for structured and efficient data management.

---

## 📁 Project Structure

```bash
ProdigyBoard/
│
├── client/                 # React.js Frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── services/
│
├── server/                 # Node.js + Express Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── .env
│
├── README.md
└── package.json

🚀 Getting Started
Prerequisites
Node.js (v18+)
MongoDB Atlas or Local MongoDB
Firebase Project (for frontend auth if hybrid setup)
Vite (comes with dev setup)

🧩 Frontend Setup (client)

# Navigate to client folder
cd mini-productivity-client

# Install dependencies
npm install

# Start development server
npm run dev
Runs on: http://localhost:5173

🔗 Frontend Tech Stack
React.js
React Router DOM
Axios
Tailwind CSS + DaisyUI
React Beautiful DnD
Firebase (for auth, integrated with JWT)
Lottie, Lucide, React Toastify

🔐 Backend Setup (server)

# Navigate to server folder
cd mini-productivity-server

# Install dependencies
npm install

# Create .env file and add:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

# Start backend server
node index.js
Runs on: http://localhost:5000

⚙ Backend Tech Stack
Node.js
Express.js
JWT (Authentication)
dotenv, cors, cookie-parser


📦 Deployment Suggestions
Frontend: Vercel 
Backend: Render 
Database: MongoDB Atlas




