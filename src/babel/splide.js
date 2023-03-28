"use strict";

// splide
// ---------------------------------------- //

import Splide from "@splidejs/splide";

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel", {
    type: "loop",
    perPage: 1,
  }).mount(); 
});
