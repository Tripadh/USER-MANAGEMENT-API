import User from "../models/user.model.js";
import ApiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";

/**
 * @desc    Get all users
 * @route   GET /api/v1/users
 * @access  Admin
 */
export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password");

  res.status(200).json({
    success: true,
    message: "Users fetched successfully",
    data: users,
  });
});

/**
 * @desc    Get single user by ID
 * @route   GET /api/v1/users/:id
 * @access  Admin
 */
export const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  res.status(200).json({
    success: true,
    message: "User fetched successfully",
    data: user,
  });
});

/**
 * @desc    Update user role
 * @route   PUT /api/v1/users/:id/role
 * @access  Admin
 */
export const updateUserRole = asyncHandler(async (req, res) => {
  const { role } = req.body;

  if (!role) {
    throw new ApiError(400, "Role is required");
  }

  const user = await User.findById(req.params.id);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  user.role = role;
  await user.save();

  res.status(200).json({
    success: true,
    message: "User role updated successfully",
    data: {
      id: user._id,
      role: user.role,
    },
  });
});

/**
 * @desc    Delete user
 * @route   DELETE /api/v1/users/:id
 * @access  Admin
 */
export const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    throw new ApiError(404, "User not found");
  }

  await user.deleteOne();

  res.status(200).json({
    success: true,
    message: "User deleted successfully",
  });
});
