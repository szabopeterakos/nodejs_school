// // import { space, numbers, numbers_big, numbers_teen, numbers_tens } from './numbers.js';
const NUMBERS = require("./numbers");
const space = NUMBERS.space;
const numbers = NUMBERS.numbers;
const numbers_big = NUMBERS.numbers_big;
const numbers_teen = NUMBERS.numbers_teen;
const numbers_tens = NUMBERS.numbers_tens;
console.log(`start`);
console.log(numbers);

class NumbeR {
    constructor(value, position) {
        this.value = value;
        this.position = position;
        this.type = typeF(position);
        this.post = howBig(this.type, this.position);
        this.pre = numbers[value];
        this.english = positioning(this.position);
        this.stringValue = this.english + space + this.post;
        function positioning(position) {
            if (position === 1 || position === 3 || position === 4) {
                return numbers[value];
            } else if (position === 2) {
                return numbers_tens[value];
            }
        };
        function typeF(position) {
            const threshold = position % 3;
            console.log('threshold | ', threshold);
            return threshold;
        };
        function howBig(type, position) {
            if (position > 3) {
                if (type === 1) {
                    return numbers_big['2'] + space;
                }
            } else {
                if (type === 0) {
                    return numbers_big['1'] + space;
                }
                else {
                    return '';
                }
            }
        }

    }
}

// let array = [0, 1, 12, 123, 1234, 12345, 101];
let test_number = 4321;

function parseNumberIntoEnglishWords(number) {
    let res = '';
    arr = String(number).split('').reverse();
    objArr = [];
    i = 1;
    arr.forEach(element => {
        const numberObj = new NumbeR(element, i++);
        objArr.push(numberObj);
    });
    console.log('objArr:', objArr);
    const miniArr = objArr.slice(0, 3);
    length3(objArr);

    return res;
}

function length3(numbers) {
    // console.log('numbers', numbers);
    let output = '';
    numbers.reverse().forEach(n => {
        output += n.stringValue;
    })
    console.log('output ||| ', output);
    return output;
}

parseNumberIntoEnglishWords(test_number);
console.log(`end`);