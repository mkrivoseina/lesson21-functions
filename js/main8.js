// Write a function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(number) {
    let hadDivisor = false;
    for (let i=2; i < number; i++)
    {
        if (number % i === 0){
        hadDivisor = true;
        console.log('This number is NOT prime')
        break;
    }
    if (hadDivisor) {
        console.log('This number is prime')
        return false;
        
    }
else {
    console.log('This number is prime')
    return true;
}
    } 
}
console.log(isPrime(3));