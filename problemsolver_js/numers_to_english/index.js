// // import { space, numbers, numbers_big, numbers_teen, numbers_tens } from './numberas_consts.js';
const NUMBERS = require("./numberas_consts");
const NumberR = require("./number");
const space = NUMBERS.space;
const numbers = NUMBERS.numbers;
const numbers_big = NUMBERS.numbers_big;
const numbers_teen = NUMBERS.numbers_teen;
const numbers_tens = NUMBERS.numbers_tens;

// let array = [0, 1, 12, 123, 1234, 12345, 101];
let test_number = 4321;

function parseNumberIntoEnglishWords(number) {
    let res = '';
    let arr = String(number).split('').reverse();
    let objArr = [];
    let i = 1;
    arr.forEach(element => {
        const numberObj = new NumberR(element, i++);
        objArr.push(numberObj);
    });
    const miniArr = objArr.slice(0, 3);
    length3(objArr);

    return res;
}

function length3(numbers) {
    let output = '';
    numbers.reverse().forEach(n => {
        output += n.stringValue;
    })
    console.log('\noutput : ', output, '\n');
    return output;
}

parseNumberIntoEnglishWords(test_number);