"use strict";

let sidebar = document.querySelector(".sidebar");
let close = document.querySelector("close");

sidebar.addEventListener("mouseover", function () {
  sidebar.classList.remove("close");
});

sidebar.addEventListener("mouseout", function () {
  sidebar.classList.add("close");
});
