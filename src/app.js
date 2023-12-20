/* eslint-disable */
import "bootstrap";
import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";
function newCard() {
  let suits = ["♥", "♦", "♣", "♠"];
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let indexSuits = Math.floor(Math.random() * suits.length);
  let indexNumbers = Math.floor(Math.random() * numbers.length);

  let top = document.querySelector("#top");
  let botton = document.querySelector("#botton");
  let number = document.querySelector("#number");

  top.innerHTML = suits[indexSuits];
  botton.innerHTML = suits[indexSuits];
  number.innerHTML = numbers[indexNumbers];

  let currentClass =
    suits[indexSuits] == "♥" || suits[indexSuits] == "♦"
      ? "text-danger"
      : "text-dark";
  top.className = currentClass;
  botton.className = currentClass;
  number.className = currentClass;
}

window.onload = function() {
  //write your code here
  newCard();
};
