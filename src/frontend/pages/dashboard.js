import { protectPage, logout, getUserFromToken } from "./auth.js";

protectPage();

document.getElementById("logoutBtn").addEventListener("click", logout);

const user = getUserFromToken();

document.getElementById("userInfo").innerText =
  `Logged in as: ${user.email} | Role: ${user.role}`;
import { protectPage, logout, getUserFromToken, isAdmin } from "./auth.js";

if (isAdmin()) {
  document.getElementById("adminLink").style.display = "inline";
}

if (user.role === "admin") {
  document.getElementById("adminLink").style.display = "inline";
   document.getElementById("adminSection").style.display = "block";
}
if (user.role === "admin") {
  window.location.href = "admin-dashboard.html";
}
