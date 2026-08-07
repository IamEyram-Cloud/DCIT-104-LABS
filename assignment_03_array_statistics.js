const readlineSync = require('readline-sync');

function calculateSum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    return total;
}

function calculateAverage(numbers) {
    const total = calculateSum(numbers);
    const count = numbers.length;
    return total / count;
}

function findMaximum(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

function findMinimum(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}

function main() {
    console.log("Welcome to the Array Statistics Calculator!");
    
    const count = readlineSync.questionInt('How many numbers? ');
    
    if (count <= 0) {
        console.log('Error: Please enter a positive integer.');
        return;
    }
    
    const numbers = [];
    for (let i = 0; i < count; i++) {
        const num = readlineSync.questionInt('Enter number ' + (i + 1) + ': ');
        numbers.push(num);
    }
    
    const sum = calculateSum(numbers);
    const average = calculateAverage(numbers);
    const maximum = findMaximum(numbers);
    const minimum = findMinimum(numbers);
    
    console.log('\nResults:');
    console.log('Sum:     ' + sum);
    console.log('Average: ' + average);
    console.log('Maximum: ' + maximum);
    console.log('Minimum: ' + minimum);
}

main();