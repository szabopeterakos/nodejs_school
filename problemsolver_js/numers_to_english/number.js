const NUMBERS = require("./numberas_consts");
const numbers = NUMBERS.numbers;
const space = NUMBERS.space;
const numbers_big = NUMBERS.numbers_big;
const numbers_teen = NUMBERS.numbers_teen;
const numbers_tens = NUMBERS.numbers_tens;

module.exports = class NumberR {
    constructor(value, position) {
        this.value = value;
        this.position = position;
        this.type = this.typeF(this.position);
        this.post = this.howBig(this.type, this.position);
        this.pre = numbers[value];
        this.english = this.positioning(this.position,this.value);
        this.stringValue = this.english + space + this.post;
    }

    positioning(position,value) {
        if (position === 1 || position === 3 || position === 4) {
            return numbers[value];
        } else if (position === 2) {
            return numbers_tens[value];
        }
    }

    typeF(position) {
        const threshold = position % 3;
        return threshold;
    }

    howBig(type, position) {
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
};