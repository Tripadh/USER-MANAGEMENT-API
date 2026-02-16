const API_URL = "http://localhost:5000/api/v1/auth";

const registerBtn = document.getElementById("registerBtn");
const messageBox = document.getElementById("message");

registerBtn.addEventListener("click", registerUser);

async function registerUser() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  messageBox.innerHTML = "";

  if (!name || !email || !password) {
    showMessage("All fields are required", "error");
    return;
  }

  registerBtn.disabled = true;
  registerBtn.innerText = "Creating account...";

  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      showMessage(data.message || "Registration failed", "error");
      return;
    }

    showMessage("Registration successful! Redirecting...", "success");

    setTimeout(() => {
      window.location.href = "login.html";
    }, 1000);

  } catch (error) {
    showMessage("Server error. Try again.", "error");
  } finally {
    registerBtn.disabled = false;
    registerBtn.innerText = "Register";
  }
}

function showMessage(message, type) {
  messageBox.innerHTML = `<div class="${type}">${message}</div>`;
}
