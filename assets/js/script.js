"use strict";

// preloading
const loadElement = document.querySelector("[data-preload]");
window.addEventListener("load", () => {
  loadElement.classList.add("loaded");
});

// navbar
const navbar = document.querySelector("[data-navbar]");
const toggler = document.querySelector("[data-nav-toggler]");

const toogleNavbar = () => {
  navbar.classList.toggle("active");
  toggler.classList.toggle("active");
};

toggler.addEventListener("click", toogleNavbar);

// header
const header = document.querySelector("[data-header]");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});
