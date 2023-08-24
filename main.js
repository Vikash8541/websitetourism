// Navigation work start
let toggle = document.querySelector(".toggle-btn");
let navsecond = document.querySelector(".second-top-head");
let nav = document.querySelector(".nav");
let icon = document.querySelector(".fas");
console.log(toggle, nav, navsecond, icon);

toggle.addEventListener("click", () => {
  if ((toggle.classList.includes = "active")) {
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
    navsecond.classList.toggle("active");
    nav.classList.toggle("active");
  }
});
// Navigation work end

// Scroll btn work start
let scrollbtn = document.getElementById("scroll-btn");
window.addEventListener("scroll", () => {
  scrollbtn.classList.toggle("active2", window.scrollY > 200);
});

// Scroll btn work end
