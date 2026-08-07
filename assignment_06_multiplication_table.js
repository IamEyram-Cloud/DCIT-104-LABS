const readlineSync = require('readline-sync');

// ============================================================================
// PART A: Single Table
// ============================================================================

function printSingleTable(num) {
    console.log(`\nMultiplication Table for ${num}:`);
    for (let i = 1; i <= 12; i++) {
        const result = num * i;
        console.log(`${num}  x  ${i.toString().padStart(2)}  =  ${result.toString().padStart(3)}`);
    }
}

// ============================================================================
// PART B: Tables from 1 to N
// ============================================================================

function printTablesUpToN(n) {
    if (n <= 0) {
        console.log('Error: Please enter a positive integer.');
        return;
    }
    
    for (let num = 1; num <= n; num++) {
        printSingleTable(num);
        console.log('-'.repeat(30));  // Separator line
    }
}

// ============================================================================
// MAIN PROGRAM
// ============================================================================

function main() {
    console.log('\n========================================');
    console.log('     MULTIPLICATION TABLE GENERATOR');
    console.log('========================================');
    console.log('1. Part A: Print a Single Table');
    console.log('2. Part B: Print Tables from 1 to N');
    console.log('----------------------------------------');
    
    const choice = readlineSync.question('Choose an option (1/2): ');
    console.log('----------------------------------------');
    
    // =========================================================================
    // PART A: SINGLE TABLE
    // =========================================================================
    if (choice === '1') {
        console.log('\n--- PART A: SINGLE TABLE ---');
        const num = readlineSync.questionInt('Enter a number: ');
        printSingleTable(num);
    
    // =========================================================================
    // PART B: TABLES FROM 1 TO N
    // =========================================================================
    } else if (choice === '2') {
        console.log('\n--- PART B: TABLES FROM 1 TO N ---');
        const n = readlineSync.questionInt('Enter a number N: ');
        printTablesUpToN(n);
    
    } else {
        console.log('Invalid choice. Please run again and select 1 or 2.');
    }
    
    console.log('\n========================================');
    console.log('End of program. Thank you!');
    console.log('========================================');
}

main();