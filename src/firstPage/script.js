// let hamburger = document.querySelector(".hamburger");
// let menu = document.querySelector(".menu");
// hamburger.addEventListener("click", () => {
//   menu.classList.toggle();
// });
function toggleMenu() {
  const menu = document.querySelector(".menu");
  const hamburger = document.querySelector(".hamburger");
  menu.classList.toggle("active");
}
