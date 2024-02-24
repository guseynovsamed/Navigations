"use strict";

let sidebar = document.querySelector(".sidebar");
let close = document.querySelector(".close");

let up = document.querySelector(".up");
let down = document.querySelector(".down");

down.addEventListener("click", function () {
  sidebar.classList.remove("close");
  up.classList.remove("d-none");
  down.classList.add("d-none");
});

up.addEventListener("click", function () {
  sidebar.classList.add("close");
  up.classList.add("d-none");
  down.classList.remove("d-none");
});
