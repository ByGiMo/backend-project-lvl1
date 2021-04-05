import readlineSync from 'readline-sync';
import * as greet from './brain-games.js';

const commonDivisor = (number1, number2) => {
  let result = 0;
   if (number1 === number2) {
     return number1;
   }
   number1 > number2?result=number2:result=number1;
   console.log(result)
   for (let i = result; i>0; i--) {
     if (number2%i === 0 && number1%i === 0) {
       return i;
     }
   }
  }

console.log('Find the greatest common divisor of given numbers.');
const getRandom = (min, max) => {
  return Math.floor(Math.random()*(max-min));
}
const correct = 'Correct!';

const theGreatestCommonDivisor = () => {
  let result =0;
  let number1 = getRandom(1,100);
  let number2 = getRandom(1,100);
 const value = commonDivisor(number1, number2)
 console.log(value);
let answer = readlineSync.question(`Question: ${number1} ${ number2}\nYour answer:`);
if (+answer !== value) {

return `${answer} is wrong answer ;(. Correct answer was '${value}' `
      }
else if (+answer === value) {
  return correct;
}
}

const divisor = () => {
  let i = 0;
  while(i<4){
    if (i===3){
      return `Gongratulations, ${greet.answerUserName}!`;
    }
let b = theGreatestCommonDivisor();
    console.log(b)
if (b !== correct) {
  break;
}
i++;
//console.log(i)
  }
  return `Let's try again ${greet.answerUserName}!`
}
console.log(divisor())

