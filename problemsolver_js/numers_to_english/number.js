const NUMBERS = require("./numbers_consts");
const numbers = NUMBERS.numbers;
const space = NUMBERS.space;
const numbers_big = NUMBERS.numbers_big;
const numbers_teen = NUMBERS.numbers_teen;
const numbers_tens = NUMBERS.numbers_tens;

module.exports = class NumberGroup {
    constructor(number, position) {
        this.number = number;
        this.position = this.positionCategorizer(position);
        this.post = this.postCategorizer(this.position);
        this.value = numbers[number];
        this.english = this.positioning(this.position,this.number);
        this.stringValue = this.english + space + this.post;
    }

    positioning(position,value) {
        if (position === 1 || position === 3 || position === 4) {
            return numbers[value];
        } else if (position === 2) {
            return numbers_tens[value];
        }
    }

    positionCategorizer(position) {
        const digit = position % 3;
        const positionObject = {
            position: position,
            positionIn3: digit === 0 ? 3 : digit,
            comma: Math.floor(Number(position / 3).toFixed(3) - (digit === 0 ? 1 : 0))
        }
        return positionObject;
    }

    postCategorizer(p) {
        let postString = '';
        if (p.positionIn3 === 3) {
                postString += numbers_big['1'] + space;
        }

        return postString;
    }
};