const { formats } = require("dayjs/locale/*");

const dice = [
    1, 2, 3, 4, 5, 6
]

let randomDiceRoll = dice[Math.floor(Math.random() * dice.length)];

const numOfDiceInput = document.querySelector("#number-of-dice-input"); //grabs element of the number of dice to roll
let pDiceRolled = document.querySelector("#dice-para"); // grabs p element that stores values of each dice rolled in one roll event
let pDiceRollSum = document.querySelector("#sum-para"); // grabs p element that stores sum of above values
let ul = document.querySelector("#roll-history"); //
const button = document.querySelector("#generate-dice-roll-btn");

let sum = 0
let numOfDice = 0

button.addEventListener("click", (e) => {
    e.preventDefault()
    pDiceRolled.textContent = "";
    for (face of dice) {
        sum += (numOfDiceInput.value * randomDiceRoll)
    }
    pDiceRollSum.textContent += sum
})
const li = document.createElement("li")
li.innerText = ``
ul.appendChild(li);