let strNumber = prompt("Enter a number: ", '') || 0;
console.log(strNumber);
let arr = Array.from(strNumber)
console.log(arr);
let number = Number(strNumber);
console.log(number);
let length = number.toString().length;
let sum = 0;
for (let num of arr) {
    sum += num ** length;
    console.log(sum);
}
console.log(sum);
if (sum == number) {
    alert(`${number} is a narcissistic number`)
} else {
    alert(`${number} is not a narcissistic number`)
}