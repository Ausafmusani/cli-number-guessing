#! /usr/bin/env node

import inquirer from "inquirer"; 

const randomNumber = Math.floor(Math.random() * 10 + 1);


const answers = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "please guess a number Betwween 1-10: ",
  },
]);

if (answers.userGuessedNumber === randomNumber) {
    console.log("cogratulations! you are win");
 } else {
        console.log("you guessed wrong number");
        
    }
    


