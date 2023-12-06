// toggle class active
const navbarNav = document.querySelector(".navbar-nav"); // cari class navbar-nav

// ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active"); // muncul class active kalau tidak ada dan hilang kalau ada, ketika hamburger menu diklik
};

// klik di luar slidebar utk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

// ketika di klik di mana saja diluar slidebar / hamburgermenu
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
