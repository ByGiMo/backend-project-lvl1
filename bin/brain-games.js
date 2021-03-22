#!/user/bin/env node
 
import {userName} from '../src/cli.js';
const greeting = () => 'Welcome to the Brain Games!'
//const  greeting = () => {
//const name = userName();
//console.log(`Hello, ${name}!`)
//}
console.log(greeting());
export {greeting};
