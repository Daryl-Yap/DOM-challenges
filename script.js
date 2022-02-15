"use strict";

let total = 0;
const totalParagraph = document.querySelector(".total");
// const colaBtn = document.querySelector(".cola");
// const nutsBtn = document.querySelector(".nuts");
// const chocoBtn = document.querySelector(".choco");
// const gummyBtn = document.querySelector(".gummy");
const buttonContainer = document.querySelector(".button-container");
const snackButtons = document.querySelectorAll(".snack-button");

const coinForm = document.querySelector(".form-container .the-form");
const bank = document.querySelector(".bank");

const bulb = document.querySelector(".bulb");
const bulbBtnsContainer = document.querySelector(".bulb-btns-container");
const bulbButtons = document.querySelectorAll(".bulb-button");
const on = document.querySelector(".on");
const off = document.querySelector(".off");
const toggle = document.querySelector(".toggle");
const end = document.querySelector(".end");

snackButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const cost = button.getAttribute("data-cost"); //<---grabs the data cost value in html
    total += parseInt(cost);
    console.log(total);
    totalParagraph.textContent = `Total: $${total.toFixed(2)}`;
  });
});

coinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let howMany = document.querySelector("#howMany").value;
  let whichCoin = document.querySelector("#whichCoin").value;
  console.log(howMany, whichCoin);
  for (let i = 0; i < howMany; i++) {
    const newCoin = document.createElement("div");
    newCoin.classList.add("coin", whichCoin); //<--- adds dynamic class of which coin
    newCoin.textContent = whichCoin;
    bank.append(newCoin);
  }
});

const lightOn = () => {
  bulb.style.backgroundColor = "lightgray";
};

// on.forEach((button) => {
on.addEventListener("click", () => {
  bulb.style.backgroundColor = "lightgray";
});
// });
off.addEventListener("click", () => {
  bulb.style.backgroundColor = "gray";
});

const change = () => {
  bulb.classList.toggle("change");
};

bulb.addEventListener("click", change);
// console.dir(totalP);
// colaBtn.addEventListener("click", () => {
//   total += 2;
//   totalP.textContent = `total: ${total.toFixed(2)}`;
// //   console.log(total);
// });
// nutsBtn.addEventListener("click", () => {
//   total += 3;
//   totalP.textContent = `total: ${total.toFixed(2)}`;
// });
// chocoBtn.addEventListener("click", () => {
//   total += 4;
//   totalP.textContent = `total: ${total.toFixed(2)}`;
// });
// gummyBtn.addEventListener("click", () => {
//   total += 6;
//   totalP.textContent = `total: ${total.toFixed(2)}`;
// };
