// const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;

// average([4, 7, 9]);

// console.log(average);

const input = [1, 4, 7];

var numbers = 0;
for(let i = 0; i < input.length; i++){
    numbers += input[i];
}
let avgNum = numbers / input.length;
console.log(avgNum);