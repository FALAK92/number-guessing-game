#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
  {
    name: "userGuessNumber",
    type: "number",
    message: "Please guess a number between 1-6:",
  },
]);
if (answer.userGuessNumber === randomNumber) {
  console.log("Congratulation you guessed right number:");
} else {
  console.log("You guessed wrong number:");
  
};
