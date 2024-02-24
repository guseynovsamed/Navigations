"use strict";

// let h1 = document.querySelector("h1");

// console.log(h1.closest(".product").children);

// let elem = document.querySelector(".item1");

//console.log(elem.parentNode.parentNode.nextElementSibling.firstElementChild);

// console.log(
//   document.querySelector(".salam").nextElementSibling.lastElementChild.innerHTML
// );

// let btns = document.querySelectorAll("button");
// let elem = document.querySelectorAll("h1");

// btns.forEach((btn) => {
//   btn.addEventListener("click", function () {
//     this.nextElementSibling.style.backgroundColor = "red";
//   });
// });

// document.addEventListener("keydown", function (e) {
//   if (e.keyCode == 13) {
//     document.querySelector("body").style.backgroundColor = "cyan";
//   }
// });

// let sidebar = document.querySelector(".sidebar");
// let open = document.querySelector(".open-icon");
// let close = document.querySelector(".close-icon");

// open.addEventListener("click", function () {
//   sidebar.classList.remove("close");
//   this.nextElementSibling.classList.remove("d-none");
//   open.classList.add("d-none");
// });

// close.addEventListener("click", function () {
//   sidebar.classList.add("close");
//   close.classList.add("d-none");
//   this.previousElementSibling.classList.remove("d-none");
// });

// document.querySelector(".paste").addEventListener("click", function () {
//   document.querySelector("h2").innerText =
//     document.querySelector("h1").innerText;
//   document.querySelector("h1").innerText = "";
// });

// let sendBtn = document.querySelector(".send");
// let warning = document.querySelector(".btn-warning");

// sendBtn.addEventListener("mouseover", function () {
//   warning.classList.remove("btn-warning");
//   warning.classList.add("btn-success");
// });

// sendBtn.addEventListener("mouseout", function () {
//   warning.classList.add("btn-warning");
//   warning.classList.remove("btn-success");
// });

// let input = document.querySelector("input");

// input.addEventListener("keydown", function () {
//   console.log("Semed");
// });

// document.querySelector(".form-select").addEventListener("change", function () {
//   console.log(this.innerText);
// });

// console.log(document.querySelector("a").getAttribute("href"));

// document.querySelector("a").setAttribute("href", "salam
// ");

let fbbtn = document.querySelector(".facebook");

let googlebtn = document.querySelector(".google");

fbbtn.addEventListener("click", function () {
  document.querySelector("a").setAttribute("href", "https://www.facebook.com/");
  document.querySelector("a").innerText = "Go to Facebook";
});

googlebtn.addEventListener("click", function () {
  document.querySelector("a").setAttribute("href", "https://www.facebook.com/");
  document.querySelector("a").innerText = "Go to Google";
});
