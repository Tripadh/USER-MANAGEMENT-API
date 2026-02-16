import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import authorizeRoles from "../middleware/role.middleware.js";
import {
  getAllUsers,
  getUserById,
  updateUserRole,
  deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();

// All routes below require admin access
router.use(authMiddleware, authorizeRoles("admin"));

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id/role", updateUserRole);
router.delete("/:id", deleteUser);

export default router;
