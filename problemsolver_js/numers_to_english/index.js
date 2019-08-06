// // import { space, numbers, numbers_big, numbers_teen, numbers_tens } from './numberas_consts.js';
const NumberR = require("./number");

let test_number = 7654321;
let test_number2 = 0;
let test_number3 = 90;
let test_number4 = 190;
let test_number5 = 11;
let test_number6 = 1000000;


function parseNumberIntoEnglishWords(number) {
    let res = '';
    let arr = String(number).split('').reverse();
    let objArr = [];
    let i = 1;
    arr.forEach(element => {
        const numberObj = new NumberR(element, i++);
        console.log(numberObj);
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
    console.log('output: ',output);
    return output;
}

parseNumberIntoEnglishWords(test_number);
// parseNumberIntoEnglishWords(test_number2);
// parseNumberIntoEnglishWords(test_number3);
// parseNumberIntoEnglishWords(test_number4);
// parseNumberIntoEnglishWords(test_number5);
// parseNumberIntoEnglishWords(test_number6);