const readlineSync = require('readline-sync');

function getGrade(score) {
    // Validate score
    if (score < 0 || score > 100) {
        return null;  // If invalid, return null
    }
    
    // Use if/else if/else to assign grade
    if (score >= 80) {
        return "A";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 60) {
        return "C";
    } else if (score >= 50) {
        return "D";
    } else {
        return "F";
    }
}

function main() {
    // Ask the user for a score
    console.log("Welcome to the Student Grade System!");
    const score = readlineSync.questionInt('Enter student score (0-100): ');
    
    // Call getGrade() and store the result
    const grade = getGrade(score);
    
    // Print result or error message
    if (grade === null) {
        console.log('Error: Score must be between 0 and 100.');
    } else {
        console.log('Grade: ' + grade);
    }
}

// Run the program
main();