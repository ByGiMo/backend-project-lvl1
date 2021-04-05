import readline from 'readline-sync';
import * as greet from './brain-games.js';
const questExpression = `What is the result of the expression?`;
console.log(questExpression);
const getRandom = (min, max) => {
  return Math.floor(Math.random()*(max-min));
}
const correct = 'Correct!';
const array = ['+','-','*'];  
let calc = () => {
  let result = 0;
let number1 = getRandom(1,100);
let number2 = getRandom(1,100);
let arr =  array[Math.floor(Math.random()*array.length)];

  switch (arr) {
    case '+':
   result = number1 + number2;
      break;
  case '-':
    result = number1 - number2;
      break;
  case '*':
    result = number1 * number2;
      break;
  }
//    console.log(result);
let answer = readline.question(`Question: ${number1} ${arr} ${number2}\nYour answer: `);
if (+answer !== result) {
return `'${answer}' is wrong answer ;(. Correct answer was '${result}'`;
}
else if (+answer === result) {
  return correct;
}
}
const calculate = () => {
  let i = 0;
  while(i<4){
    if (i===3){
      return `Congratulations, ${greet.answerUserName}!`;
    }
    let b = calc();
    console.log(b)
if (b !== correct) {
  break;
}
i++;
//console.log(i)
  }
  return `Let's try again, ${greet.answerUserName}!`
}
console.log(calculate())



