const readlineSync = require('readline-sync');

// ============================================================================
// OPERATION FUNCTIONS
// ============================================================================

function addNumbers(a, b) {
    return a + b;
}

function subtractNumbers(a, b) {
    return a - b;
}

function multiplyNumbers(a, b) {
    return a * b;
}

function divideNumbers(a, b) {
    if (b === 0) {
        return null;  // Indicates division by zero
    }
    return a / b;
}

function modulusNumbers(a, b) {
    if (b === 0) {
        return null;  // Indicates division by zero
    }
    return a % b;
}

function exponentiateNumbers(a, b) {
    return a ** b;
}

// ============================================================================
// HELPER FUNCTION: Get Two Numbers
// ============================================================================

function getTwoNumbers() {
    const num1 = parseFloat(readlineSync.question('Enter first number: '));
    const num2 = parseFloat(readlineSync.question('Enter second number: '));
    return [num1, num2];
}

// ============================================================================
// MAIN PROGRAM
// ============================================================================

function main() {
    console.log('\n' + '='.repeat(40));
    console.log('        SIMPLE CALCULATOR');
    console.log('='.repeat(40));
    
    while (true) {
        console.log('\n1. Addition');
        console.log('2. Subtraction');
        console.log('3. Multiplication');
        console.log('4. Division');
        console.log('5. Modulus');
        console.log('6. Exponentiation');
        console.log('7. Quit');
        
        const choice = readlineSync.question('Select an operation (1-7): ');
        console.log('-'.repeat(30));
        
        // Quit
        if (choice === '7') {
            console.log('Goodbye!');
            break;
        }
        
        // Validate choice
        if (!['1', '2', '3', '4', '5', '6'].includes(choice)) {
            console.log('Invalid choice. Please select a number between 1 and 7.');
            continue;
        }
        
        // Get the two numbers
        const [num1, num2] = getTwoNumbers();
        
        // Perform the operation
        let result = null;
        let operation = '';
        
        if (choice === '1') {
            result = addNumbers(num1, num2);
            operation = '+';
        } else if (choice === '2') {
            result = subtractNumbers(num1, num2);
            operation = '-';
        } else if (choice === '3') {
            result = multiplyNumbers(num1, num2);
            operation = '*';
        } else if (choice === '4') {
            result = divideNumbers(num1, num2);
            operation = '/';
        } else if (choice === '5') {
            result = modulusNumbers(num1, num2);
            operation = '%';
        } else if (choice === '6') {
            result = exponentiateNumbers(num1, num2);
            operation = '**';
        }
        
        // Display the result
        if (result === null) {
            console.log('Error: Cannot divide by zero.');
        } else {
            // Format result: if it's an integer, show as int
            const resultStr = Number.isInteger(result) ? String(result) : result.toFixed(2);
            const num1Str = Number.isInteger(num1) ? String(num1) : num1.toFixed(2);
            const num2Str = Number.isInteger(num2) ? String(num2) : num2.toFixed(2);
            
            console.log(`Result: ${num1Str} ${operation} ${num2Str} = ${resultStr}`);
        }
    }
}

main(); 