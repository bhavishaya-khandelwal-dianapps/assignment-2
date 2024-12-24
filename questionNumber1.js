//todo --> 1. Write a function to:
//*    a. Accept a number as input.
//*    b. Check if the number is prime or not.
//*    c. Return the result as a boolean.


const isPrime = (num) => {
    for(let i = 2 ; i < num ; i++) {
        if(num % i === 0) {
            return false;
        } 
    }
    return true;
} 



console.log(isPrime(53));
console.log(isPrime(71));
console.log(isPrime(99));