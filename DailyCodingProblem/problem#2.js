let arr1 = [1,2,3,4,5];
let arr2  = [3,2,1];
let newArr = [];

function multiplier(arr){
    let sum = 1;
    arr.forEach((element) => {
        if (element != 0){
            sum = sum * element;
        }
    });

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        newArr.push(sum / element);
    }
}

multiplier(arr2);

console.log(newArr);