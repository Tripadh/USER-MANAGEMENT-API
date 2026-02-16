import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";
import ApiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";

/**
 * @desc    Register new user
 * @route   POST /api/v1/auth/register
 * @access  Public
 */
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // 1️⃣ Validate required fields
  if (!name || !email || !password) {
    throw new ApiError(400, "All fields are required");
  }

  // 2️⃣ Check if user already exists
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new ApiError(400, "Email already registered");
  }

  // 3️⃣ Create new user
  const user = await User.create({
    name,
    email,
    password,
  });

  // 4️⃣ Generate JWT
  const token = generateToken({
    id: user._id,
    role: user.role,
  });

  // 5️⃣ Send structured response
  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: {
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    },
  });
});

/**
 * @desc    Login user
 * @route   POST /api/v1/auth/login
 * @access  Public
 */
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // 1️⃣ Validate input
  if (!email || !password) {
    throw new ApiError(400, "Email and password are required");
  }

  // 2️⃣ Check if user exists
  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(400, "Invalid credentials");
  }

  // 3️⃣ Compare password
  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    throw new ApiError(400, "Invalid credentials");
  }

  // 4️⃣ Generate token
  const token = generateToken({
    id: user._id,
    role: user.role,
  });

  // 5️⃣ Send response
  res.status(200).json({
    success: true,
    message: "Login successful",
    data: {
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    },
  });
});
