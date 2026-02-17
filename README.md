# User Management API

A full-stack user management system built with Node.js, Express, MongoDB, and vanilla JavaScript frontend.

## Features

- User registration and authentication (JWT-based)
- Role-based access control (User/Admin)
- Secure password hashing with bcrypt
- Input validation using express-validator
- RESTful API design
- Frontend dashboard with login, register, and profile pages

## Tech Stack

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT)
- bcryptjs

**Frontend:**
- HTML5
- CSS3
- Vanilla JavaScript

## Project Structure

```
src/
├── config/          # Database configuration
├── controllers/     # Route controllers
├── frontend/        # Frontend HTML, CSS, and JS
├── middleware/      # Auth, role, validation middleware
├── models/          # Mongoose models
├── routes/          # API routes
├── utils/           # Utility functions
├── validators/      # Input validators
├── app.js           # Express app setup
└── server.js        # Server entry point
```

## API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/profile` | Get user profile (protected) |
| GET | `/api/auth/admin` | Admin access check (admin only) |

### User Management (Admin Only)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get user by ID |
| PUT | `/api/users/:id/role` | Update user role |
| DELETE | `/api/users/:id` | Delete user |

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Tripadh/USER-MANAGEMENT-API.git
   cd USER-MANAGEMENT-API
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start the server:
   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `PORT` | Server port (default: 5000) |
| `MONGODB_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret key for JWT signing |

## License

ISC
