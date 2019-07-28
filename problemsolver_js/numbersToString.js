console.log(`start`);

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

const numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
}

const numbers_teen = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
}

const numbers_tens = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety'
}

const numbers_big = {
    1: 'hundred',
    2: 'thousand',
    3: 'million',
    4: 'billion',
    5: 'trillion',
    6: 'quadrillion',
    7: 'quintillion',
    8: 'sextillion',
    9: 'septillion',
    10: 'octillion'
}

const space = ' ';

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