function sum(n1, n2) {
    return (n1 + n2);
}

function opposite(a) {
    return -a;
}

function greeting(str) {
    if (!str) return "Hi!";
    else return (`Hello ${str}!`);
}

function power(a, b) {
    return a ** b;
}

function bmi(weight, height) {
    return Math.round(weight / height ** 2);
}

function prodArr(arr) {
    let p = 1;
    for (let i = 0; i < arr.length; i++) {
        p *= arr[i];
    }
    return p;
}

function double(arr) {
    const arr1 = arr.map(el => el * 2);
    return arr1;
}

function fibonacci(n) {
    if (n === 0) return [];
    if (n === 1) return [0];
    let arr = [0, 1];
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr;
}

function sumEvenMultOdd(arr) {
    let sum = 0;
    let mult = 1;
    for(let el of arr){
        (el % 2 === 0) ? sum += el : mult *= el;
    }
    return[sum, mult];
}

function unique(arr){
    return arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el));
}

function duplicates(arr){
    return arr.filter(el => arr.indexOf(el) !== arr.lastIndexOf(el));
}

function duplicatesSingle(arr){
    return arr.filter((el, i) => arr.indexOf(el) !== arr.lastIndexOf(el) && i === arr.indexOf(el));
}

module.exports = {sum, opposite, greeting, power, bmi, prodArr,  double, fibonacci, sumEvenMultOdd, unique, duplicatesSingle, duplicates};
