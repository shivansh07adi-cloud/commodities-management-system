let currentRole = "";

function login() {
  const email = document.getElementById("email").value;
  const role = document.getElementById("role").value;
  if(email === "") return alert("Enter Email");

  localStorage.setItem("userRole", role);
  showApp();
}

function showApp() {
  currentRole = localStorage.getItem("userRole");
  if(!currentRole) return;

  document.getElementById("loginPage").classList.add("hidden");
  document.getElementById("appPage").classList.remove("hidden");

  buildMenu();
  loadDefaultPage();
}

function buildMenu() {
  const menu = document.getElementById("menu");
  menu.innerHTML = "";

  if(currentRole === "Manager") {
    menu.innerHTML += `<button onclick="showPage('dashboard')">Dashboard</button>`;
  }
  menu.innerHTML += `<button onclick="showPage('products')">Products</button>`;
}

function loadDefaultPage() {
  currentRole === "Manager" ? showPage('dashboard') : showPage('products');
}

function showPage(page) {
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("products").classList.add("hidden");
  document.getElementById(page).classList.remove("hidden");
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

function logout() {
  localStorage.removeItem("userRole");
  location.reload();
}

window.onload = showApp;
