"use strict";

// fadeup
// ---------------------------------------- //

const fadeUp = document.getElementById("js-fadeup");

window.addEventListener("scroll", () => {
  if (100 < window.scrollY) {
    fadeUp.classList.add("active");
  } else {
    fadeUp.classList.remove("active");
  }
});
