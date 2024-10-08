//Task1
let myNumber = 10;
let myString = "Hello, JavaScript!";

console.log(myNumber);
console.log(myString);

//Task2.1
let loopNumber = [];
for (let i = 0; i <= 10; i++) {
    loopNumber.push(i);
}
console.log(loopNumber);

//Task2.2
for (let i = 1; i < 11; i++) {
    if (i < 6) {
        console.log(`multiply number by 3 = ` + i * 3);
    } else {
        console.log(`number without multiply = ` + i);
    }
}

//Task3
function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(`the result of add number is ${addNumbers(20, 32)}`);

function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

console.log(`the result of multiply number is ${multiplyNumbers(12, 26)}`);

