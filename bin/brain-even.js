import readlineSync from 'readline-sync';
import * as greet from './brain-games.js';
const evenOrOdd = 'Answer "yes" if number even otherwise answer "no".';
console.log(evenOrOdd);
const getRandom = (min, max) => {
  return Math.floor(Math.random()*(max-min))
  };

const correct = 'Correct';
const evenOrOddNumber = () => {
  let number = getRandom(1,100)
  const answer = readlineSync.question(`Question: ${number}\nYour answer:`);
     if (number%2 === 0 && 'yes'=== answer || number%2 !== 0 && 'no' === answer) {
//	console.log(correct)
       return correct;
     }
    if (answer) {
      if (answer === 'yes') {
      return `${answer} is wrong answer ;(. Correct answer was 'no'. `;
      }
      else if (answer === 'no') {
        return `${answer} is wrong answer ;(. Correct answer was 'yes'.`;
      }
}
}
const fin = () => evenOrOddNumber();
const result = () => {  
let i = 0;
   while(i<4){
if (i===3){
    return `Congratulations, ${greet.answerUserName}!`
    }

    let finishResult = (evenOrOddNumber())
 console.log(finishResult)
   if (finishResult !== correct) {
break;
   }
	i++;
    }
    return `Let's try again, ${greet.answerUserName}!`;
    }
console.log(result())
