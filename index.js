const dice = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]

const input = document.querySelector("#number-of-dice-input");
let pDiceRolled = document.querySelector("#dice-para");
let pDiceRollSum = document.querySelector("#sum-para");
const ul = document.querySelector("#roll-history");
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