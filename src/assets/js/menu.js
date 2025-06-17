// script para abrir e fechar menu hambúrguer
const navList = document.getElementById("nav-list");
const navButton = document.getElementById("nav-button");

navButton.addEventListener("click", function () {
  navList.classList.toggle("show");
});

document.querySelectorAll(".header-link").forEach(link => {
  link.addEventListener("click", function () {
    navList.classList.remove("show");
  });
});

window.addEventListener("click", function (event) {
  if (!event.target.closest(".header") && navList.classList.contains("show")) {
    navList.classList.remove("show");
  }
});
