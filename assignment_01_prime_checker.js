const readlineSync = require('readline-sync');

function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function main() {
    console.log("Welcome to the Prime Number Checker!");  // ← ADD THIS LINE
    const number = readlineSync.questionInt('Enter a number: ');
    
    if (isPrime(number)) {
        console.log(number + ' is a prime number.');
    } else {
        console.log(number + ' is NOT a prime number.');
    }
}

main();