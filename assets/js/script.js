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
const backToTop = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backToTop.classList.add("active");
  } else {
    header.classList.remove("active");
    backToTop.classList.remove("active");
  }
});

// scroll reveal

const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
  for (let i = 0; i < revealElements.length; i++) {
    if (
      revealElements[i].getBoundingClientRect().top <
      window.innerHeight / 1.2
    ) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
};

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);
