import { protectPage, logout, getUserFromToken } from "./auth.js";

protectPage();

document.getElementById("logoutBtn").addEventListener("click", logout);

const user = getUserFromToken();

// 🔐 Extra protection: block non-admin users
if (user.role !== "admin") {
  window.location.href = "dashboard.html";
}

document.getElementById("adminInfo").innerText =
  `Logged in as: ${user.email} | Role: ${user.role}`;
