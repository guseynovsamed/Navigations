"use strict";

let twit = document.querySelector(".tw");
let fb = document.querySelector(".fb");
let inst = document.querySelector(".itg");

let ttwit = document.querySelector(".twit-text");
let tfb = document.querySelector(".fb-text");
let instext = document.querySelector(".inst-text");

twit.addEventListener("click", function () {
  ttwit.classList.remove("d-none");
  instext.classList.add("d-none");
  tfb.classList.add("d-none");
});

fb.addEventListener("click", function () {
  ttwit.classList.add("d-none");
  instext.classList.add("d-none");
  tfb.classList.remove("d-none");
});

inst.addEventListener("click", function () {
  ttwit.classList.add("d-none");
  instext.classList.remove("d-none");
  tfb.classList.add("d-none");
});
