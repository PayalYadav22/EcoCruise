"use strict";

// preloading
const loadElement = document.querySelector("[data-preload]");
window.addEventListener("load", () => {
  loadElement.classList.add("loaded");
});
