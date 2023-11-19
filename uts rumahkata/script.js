//Toggle class active buku
const navbarNav = document.querySelector(".navbar-nav");
//Ketika menu di klik
document.querySelector("#buku-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const menu = document.querySelector("menu");

document.addEventListener("click", function (e) {
  if (!buku - menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
