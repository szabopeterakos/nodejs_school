const num1 = 6400;
const num2 = 14656410;

function createObject(arr) {
    let arrays = [];
    let group = [];
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        const three_index = i % 3;
        group.push(stringToNumber(e));
        if(three_index === 0){
            arrays.push(group);
            group = [];
        }
    }
    console.log('grouped arrays: ', arrays);
    return arrays;
}

function createArray(num) {
    let arr = [];
    const numString = String(num);
    arr = numString.split("");
    console.log('full array: ', arr);
    return arr;
}

function stringToNumber(str){
    return Number(str);
}

function group(num) {
    console.log('starting number: ',num);
    const arr = createArray(num);
    const groupedObj = createObject(arr);
    return groupedObj;
};

group(num2);