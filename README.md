# 🚀 User Management REST API with Role-Based Authentication

A production-structured full-stack User Management system built using:

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Role-Based Authorization
- Vanilla JavaScript Frontend

This project demonstrates secure authentication, role-based access control, and a clean backend architecture.

---

## 📌 Features

### 🔐 Authentication
- User Registration
- User Login
- JWT-based authentication
- Password hashing using bcrypt
- Token expiration handling

### 🛡 Authorization
- Role-based access control (`admin`, `user`)
- Protected routes using middleware
- Admin-only route protection

### 🌐 Frontend
- Login & Register UI
- Dashboard for Users
- Separate Admin Dashboard
- Automatic redirect based on role
- Token stored in localStorage
- Protected frontend routes

---

## 🏗 Backend Architecture

```
src/
│
├── config/           # Database configuration
├── controllers/      # Route controllers
├── middleware/       # Auth, role & error middleware
├── models/           # Mongoose models
├── routes/           # API route definitions
├── utils/            # Helper utilities
├── validators/       # Request validation logic
│
├── app.js            # Express app configuration
└── server.js         # Server entry point
```

### Key Backend Concepts Implemented

- Layered architecture
- Async handler pattern
- Global error handling
- Custom API error class
- Input validation middleware
- JWT payload role encoding

---

## 🎨 Frontend Structure

```
src/frontend/
│
├── css/
│   └── main.css
│
├── pages/
│   ├── login.js
│   ├── register.js
│   ├── dashboard.js
│   ├── admin-dashboard.js
│   └── auth.js
│
├── login.html
├── register.html
├── dashboard.html
└── admin-dashboard.html
```

---

## 🔑 Role-Based Flow

### Register
- Default role assigned: `user`

### Login
- Backend verifies credentials
- JWT issued with role inside payload
- Frontend decodes role
- Redirect logic:
  - `admin` → `admin-dashboard.html`
  - `user` → `dashboard.html`

---

## 🧪 API Endpoints

### Auth Routes
```
POST   /api/v1/auth/register
POST   /api/v1/auth/login
```

### User Routes
```
GET    /api/v1/users/profile       (Protected)
GET    /api/v1/users/admin-route   (Admin Only)
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Tripadh/USER-MANAGEMENT-API.git
cd USER-MANAGEMENT-API
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=1d
```

### 4️⃣ Run the server

```bash
npm run dev
```

Server runs at:

```
http://localhost:5000
```

---

## 🔐 Security Considerations

* Passwords hashed with bcrypt
* JWT expiration enforced
* Role-based middleware protection
* Frontend role checks are UI-only
* Backend enforces real authorization

---

## 📦 Tech Stack

**Backend:**
* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt

**Frontend:**
* HTML
* CSS
* Vanilla JavaScript
* Fetch API

---

## 🚀 Future Improvements

* Refresh token implementation
* HttpOnly cookie-based authentication
* React frontend upgrade
* User management table for admin
* Pagination & search
* Docker containerization
* Deployment to cloud (Render / Railway / AWS)

---

## 👨‍💻 Author

Built as a full-stack architecture learning project.

---

## 📜 License

MIT License
