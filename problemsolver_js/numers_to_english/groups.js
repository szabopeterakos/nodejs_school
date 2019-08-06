const num1 = 6400;
const num2 = 14656410;

function createObject(arr) {
    let arrays = [];
    let group = [];
    for (let i = 0; i < arr.length; i++) {
        const e = arr[i];
        const three_index = i % 3;
        console.log(three_index);
        if(three_index === 0){
            group.push(e);
            arrays.push(group);
            group = [];
        } else {
            group.push(e);
        }

    }
    console.log('arr: ', arrays);
    return arrays;
}

function createArray(num) {
    let arr = [];
    const numString = String(num);
    arr = numString.split("");
    console.log('arr: ', arr);
    return arr;
}

function group(num) {
    const arr = createArray(num);
    const groupedObj = createObject(arr);
    return groupedObj;
};

group(num2);