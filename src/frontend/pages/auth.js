export function getToken() {
  return localStorage.getItem("token");
}

export function getUserFromToken() {
  const token = getToken();
  if (!token) return null;

  const payload = JSON.parse(atob(token.split(".")[1]));
  return payload;
}

export function logout() {
  localStorage.removeItem("token");
  window.location.href = "login.html";
}
export function isAdmin() {
  const user = getUserFromToken();
  return user && user.role === "admin";
}

export function protectPage() {
  const token = getToken();
  if (!token) {
    window.location.href = "login.html";
    return;
  }

  const payload = JSON.parse(atob(token.split(".")[1]));

  if (payload.exp * 1000 < Date.now()) {
    logout();
  }
}
