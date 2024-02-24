"use strict";

let twit = document.querySelector(".tw");
let fb = document.querySelector(".fb");
let inst = document.querySelector(".itg");

let ttwit = document.querySelector(".twit-text");
let tfb = document.querySelector(".fb-text");
let instext = document.querySelector(".inst-text");

twit.addEventListener("click", function () {
  ttwit.classList.remove("animation");
  tfb.classList.add("animation");
  instext.classList.add("animation");
});

fb.addEventListener("click", function () {
  ttwit.classList.add("animation");
  tfb.classList.remove("animation");
  instext.classList.add("animation");
});

inst.addEventListener("click", function () {
  ttwit.classList.add("animation");
  tfb.classList.add("animation");
  instext.classList.remove("animation");
});
