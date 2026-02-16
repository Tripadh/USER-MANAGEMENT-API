import express from "express";
import { registerUser, loginUser } from "../controllers/auth.controller.js";
import { registerValidation, loginValidation } from "../validators/auth.validator.js";
import validate from "../middleware/validate.middleware.js";
import authMiddleware from "../middleware/auth.middleware.js";
import authorizeRoles from "../middleware/role.middleware.js";

const router = express.Router();
console.log("registerValidation:", registerValidation);
console.log("loginValidation:", loginValidation);

/**
 * Public Routes
 */
router.post(
  "/register",
  registerValidation,
  validate,
  registerUser
);

router.post(
  "/login",
  loginValidation,
  validate,
  loginUser
);

/**
 * Protected Routes
 */
router.get("/profile", authMiddleware, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Profile fetched successfully",
    data: req.user,
  });
});

router.get(
  "/admin",
  authMiddleware,
  authorizeRoles("admin"),
  (req, res) => {
    res.status(200).json({
      success: true,
      message: "Admin access granted",
    });
  }
);

export default router;
