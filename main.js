const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.getElementById("ulist");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
