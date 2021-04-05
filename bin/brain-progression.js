
import readlineSync from 'readline-sync';
import * as greet from './brain-games.js';

console.log (chalk.green('What number is missing in this progression?'))

const correct = chalk.green('Correct');


const getProgression = () => {
  const array = [];
  
const getRandom = (min, max) => {
  return Math.floor(Math.random()*(max-min))
  };

  let progressionValue = getRandom(1,100);
let anyValue = getRandom(1,20);
  //  console.log(anyValue);
 // console.log(progressionValue)
  array[0] = anyValue;
  let i = 1;
  while (array.length<10) {
    array.push(array[i-1]+progressionValue);
    i++;
    //console.log(i)
  }
   return array;
  // console.log(array)
}

const result = () => {

let funcGetProgression = getProgression();
console.log(funcGetProgression);

let value = funcGetProgression[Math.floor(Math.random()*funcGetProgression.length)];
console.log(value)


let res = [];
for (let index of funcGetProgression ) {
 // console.log(b);
 if (index === value) {
   index = '..';
 }
 res.push(index);
  //console.log(result);
}
console.log(res);



let answer = readline.question(`Question: ${res}\nYour answer:`);
if (+answer !== value) {
return `${chalk.red(answer + ' is wrong answer.' )} Correct answer was ${chalk.green(value)}`;
}
else if (+answer === value) {
  return correct;
}
}
//result()

const divisor = () => {
  let i = 0;
  while(i<4){
    if (i===3){
      return `Great ${yourName}`;
    }
    let b = result();
    console.log(b)
if (b !== correct) {
  break;
}
i++;
//console.log(i)
  }
  return `Let's try again ${yourName}`
}
console.log(divisor())


