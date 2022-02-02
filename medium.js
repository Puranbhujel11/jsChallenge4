// let input = [4, 5, 7, 0, 1, 2];

// let output = (arr, number) => {
//     console.log(arr.indexof(number));
// }

// output(input, 0);
// output(input, 3);

let input = [4, 5, 7, 0, 1, 2];
function number (x) {
    for(let i = 0; i < input.length; i++){
        if(input[i] == x) {
            return i
        }else{
            return -1
        }
    }
}
console.log(number(4));