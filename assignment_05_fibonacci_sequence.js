const readlineSync = require('readline-sync');

// ============================================================================
// PART A: Print the First N Terms
// ============================================================================

function printFibonacciSequence(n) {
    if (n <= 0) {
        console.log('Error: Please enter a positive integer.');
        return;
    }
    
    let a = 0;
    let b = 1;
    let sequence = '';
    
    if (n >= 1) {
        sequence += a;
    }
    if (n >= 2) {
        sequence += ' ' + b;
    }
    
    for (let i = 2; i < n; i++) {
        const c = a + b;
        sequence += ' ' + c;
        a = b;
        b = c;
    }
    
    console.log('Fibonacci sequence: ' + sequence);
}

// ============================================================================
// PART B: Check if a Number Belongs to the Sequence
// ============================================================================

function isFibonacciNumber(num) {
    if (num < 0) {
        return false;
    }
    
    let a = 0;
    let b = 1;
    
    if (num === a || num === b) {
        return true;
    }
    
    while (b < num) {
        const c = a + b;
        a = b;
        b = c;
        
        if (b === num) {
            return true;
        }
    }
    
    return false;
}

// ============================================================================
// MAIN PROGRAM
// ============================================================================

function main() {
    console.log('\n========================================');
    console.log('     FIBONACCI SEQUENCE GENERATOR');
    console.log('========================================');
    console.log('1. Part A: Print the First N Terms');
    console.log('2. Part B: Check if a Number is in the Sequence');
    console.log('----------------------------------------');
    
    const choice = readlineSync.question('Choose an option (1/2): ');
    console.log('----------------------------------------');
    
    // =========================================================================
    // PART A: PRINT FIRST N TERMS
    // =========================================================================
    if (choice === '1') {
        console.log('\n--- PART A: PRINT FIRST N TERMS ---');
        const n = readlineSync.questionInt('How many terms? ');
        printFibonacciSequence(n);
    
    // =========================================================================
    // PART B: CHECK IF NUMBER IS IN SEQUENCE
    // =========================================================================
    } else if (choice === '2') {
        console.log('\n--- PART B: CHECK IF NUMBER IS IN SEQUENCE ---');
        const num = readlineSync.questionInt('Enter a number to check: ');
        
        if (isFibonacciNumber(num)) {
            console.log(num + ' is a Fibonacci number.');
        } else {
            console.log(num + ' is NOT a Fibonacci number.');
        }
    
    } else {
        console.log('Invalid choice. Please run again and select 1 or 2.');
    }
    
    console.log('\n========================================');
    console.log('End of program. Thank you!');
    console.log('========================================');
}

main();