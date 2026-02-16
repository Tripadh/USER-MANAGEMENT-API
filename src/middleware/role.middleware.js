// src/middleware/role.middleware.js

/**
 * Role-based authorization middleware
 * @param  {...String} allowedRoles - Roles allowed to access the route
 */
const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {

    // 1️⃣ Ensure user exists (authMiddleware must run before this)
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: No user context found"
      });
    }

    // 2️⃣ Check if user's role is included in allowed roles
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: "Forbidden: You do not have permission to access this resource"
      });
    }

    // 3️⃣ If authorized → proceed
    next();
  };
};
export default authorizeRoles;
