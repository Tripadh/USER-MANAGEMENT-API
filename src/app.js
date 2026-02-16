import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import errorHandler from "./middleware/error.middleware.js";

const app = express();

/*
  ESM FIX:
  __dirname does not exist in ES modules.
  We recreate it using fileURLToPath.
*/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/*
  STATIC FILE SERVING
  Your frontend folder is INSIDE src.
  So we use "frontend" (NOT ../frontend)
*/
app.use(express.static(path.join(__dirname, "frontend"))); // ✅ CORRECT

/*
  Body parser
*/
app.use(express.json());

/*
  API Routes
*/
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);

/*
  Optional: Root route can serve login page instead of JSON
  If you prefer JSON, keep your old one.
*/

// Option A: Serve login page on root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "login.html"));
});

/*
// Option B (if you want API JSON instead)
// app.get("/", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "API is running",
//   });
// });
*/

/*
  404 handler
*/
app.use((req, res, next) => {
  const error = new Error("Route Not Found");
  error.statusCode = 404;
  next(error);
});

/*
  Global error handler (must be last)
*/
app.use(errorHandler);

export default app;
