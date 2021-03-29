#!/usr/bin/env node
import {userName} from '../src/cli.js'
const greeting = 'Welcome to the Brain Games!';
console.log(greeting);
export const answerUserName = userName();
const helloUser= `Hello, ${answerUserName}!`;
console.log(helloUser);
