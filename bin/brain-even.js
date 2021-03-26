//import chalk from 'chalk'
import readlineSync from 'readline-sync';
import {greeting} from 'brain-games.js';
import {userName} from '../src/cli.js';
const name = userName();
console.log ('Answer "yes" if number even otherwise answer "no".');
const getRandom = (min, max) => {
  return Math.floor(Math.random()*(max-min))
  };

const correct = 'Correct';
const evenOrOddNumber = () => {
  let number = getRandom(1,100)
  const answer = readlineSync.question(`Question: ${number}\nYour answer:`);
     if (number%2 === 0 && 'yes'=== answer || number%2 !== 0 && 'no' === answer) {
       return correct;
     }
    if (answer) {
      if (answer === 'yes') {
      return answer +" is wrong answer." + " Correct answer was no. ";
      }
      else if (answer === 'no') {
        return `${answer} + ' is wrong answer.'  Correct answer was yes`
      }
      else {
        return `${answer} is wrong answer`
        
      }
}
}
const result = () => {  
let i = 0;
   while(i<4){
if (i===3){
    return `Vongratulations ${name}!`
    }
    let finishResult = (evenOrOddNumber())
    console.log(finishResult)
     if (finishResult!==correct) {
break;
   }
    i++;
    }
    return `Let's try again ${name}!`;
    }
console.log(result())
