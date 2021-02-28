// const { formats } = require("dayjs/locale/*");
const dice = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]

const input = document.querySelector("#number-of-dice-input"); //grabs element of the number of dice to roll
let pDiceRolled = document.querySelector("#dice-para"); // grabs p element that stores values of each dice rolled in one roll event
let pDiceRollSum = document.querySelector("#sum-para"); // grabs p element that stores sum of above values
const ul = document.querySelector("#roll-history"); //
const button = document.querySelector("#generate-dice-roll-btn");
const original = pDiceRolled.textContent;

button.addEventListener("click", (e) => {
    e.preventDefault()
    let sum = 0
    let diceRoll = []
    pDiceRollSum.textContent = "Sum ="
    pDiceRolled.textContent = original;
    for (let i = 0; i < input.valueAsNumber; i++) {
        const randomIndex = Math.floor(Math.random() * dice.length)
        const randomDiceRoll = dice[randomIndex];
        diceRoll.push(randomDiceRoll)
        sum += randomIndex + 1
    }
    pDiceRolled.textContent = diceRoll.join("")
    pDiceRollSum.textContent += sum
    
    const li = document.createElement("li")
    li.textContent = `${diceRoll.join("")} = ${sum}`
    ul.appendChild(li);
})