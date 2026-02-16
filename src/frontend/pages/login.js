const API_URL = "http://localhost:5000/api/v1/auth";

const loginBtn = document.getElementById("loginBtn");
const messageBox = document.getElementById("message");

loginBtn.addEventListener("click", loginUser);

async function loginUser() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  messageBox.innerHTML = "";

  if (!email || !password) {
    showMessage("All fields are required", "error");
    return;
  }

  loginBtn.disabled = true;
  loginBtn.innerText = "Logging in...";

  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    console.log("Server Response:", data); // safe debug

    if (!response.ok) {
      showMessage(data.message || "Login failed", "error");
      return;
    }

    if (!data.token) {
      showMessage("Token missing in response", "error");
      return;
    }

    localStorage.setItem("token", data.token);

    const payload = JSON.parse(atob(data.token.split(".")[1]));

    showMessage("Login successful!", "success");

    setTimeout(() => {
      if (payload.role === "admin") {
        window.location.href = "admin-dashboard.html";
      } else {
        window.location.href = "dashboard.html";
      }
    }, 800);

  } catch (error) {
    console.error("Login Error:", error);
    showMessage("Server error. Try again.", "error");
  } finally {
    loginBtn.disabled = false;
    loginBtn.innerText = "Login";
  }
}

function showMessage(message, type) {
  messageBox.innerHTML = `<div class="${type}">${message}</div>`;
}
