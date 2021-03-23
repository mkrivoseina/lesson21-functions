function reverseNum(num) {
    return parseFloat(num.toString().split('').reverse().join(''))
}

console.log(reverseNum(12345));
console.log(reverseNum(-7800));