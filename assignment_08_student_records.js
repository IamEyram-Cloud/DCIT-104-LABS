const readlineSync = require('readline-sync');

// ============================================================================
// FEATURE 1: Add a Student
// ============================================================================

function addStudent(students) {
    const name = readlineSync.question('Student name: ');
    const id = readlineSync.questionInt('Student ID: ');
    
    const numScores = readlineSync.questionInt('How many scores? ');
    const scores = [];
    
    for (let i = 0; i < numScores; i++) {
        const score = readlineSync.questionInt(`Enter score ${i + 1}: `);
        scores.push(score);
    }
    
    const student = {
        name: name,
        id: id,
        scores: scores
    };
    
    students.push(student);
    console.log(`Student "${name}" added successfully.`);
}

// ============================================================================
// FEATURE 2: Display All Students
// ============================================================================

function displayAllStudents(students) {
    if (students.length === 0) {
        console.log('No students have been added yet.');
        return;
    }
    
    console.log('\n' + '-'.repeat(50));
    console.log('Name'.padEnd(15) + 'ID'.padEnd(12) + 'Scores'.padEnd(20) + 'Average'.padEnd(10));
    console.log('-'.repeat(50));
    
    for (const student of students) {
        const name = student.name;
        const id = student.id;
        const scores = student.scores;
        
        // Convert scores array to a string like "78, 85, 90"
        const scoresStr = scores.join(', ');
        
        // Calculate average
        const avg = scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : 0;
        const avgStr = avg.toFixed(2);
        
        console.log(name.padEnd(15) + String(id).padEnd(12) + scoresStr.padEnd(20) + avgStr.padEnd(10));
    }
    
    console.log('-'.repeat(50));
}

// ============================================================================
// FEATURE 3: Calculate Average Score for a Specific Student
// ============================================================================

function calculateAverage(students) {
    if (students.length === 0) {
        console.log('No students have been added yet.');
        return;
    }
    
    const id = readlineSync.questionInt('Enter student ID: ');
    
    for (const student of students) {
        if (student.id === id) {
            const scores = student.scores;
            const avg = scores.length > 0 ? scores.reduce((a, b) => a + b, 0) / scores.length : 0;
            console.log(`${student.name}'s average score: ${avg.toFixed(2)}`);
            return;
        }
    }
    
    console.log('Student ID not found. Please try again.');
}

// ============================================================================
// MAIN PROGRAM
// ============================================================================

function main() {
    const students = [];
    
    console.log('\n' + '='.repeat(40));
    console.log('     STUDENT RECORD SYSTEM MENU');
    console.log('='.repeat(40));
    
    while (true) {
        console.log('\n1. Add student');
        console.log('2. Display all students');
        console.log('3. Calculate average score');
        console.log('4. Quit');
        
        const choice = readlineSync.question('Enter your choice (1-4): ');
        console.log('-'.repeat(30));
        
        if (choice === '1') {
            addStudent(students);
        } else if (choice === '2') {
            displayAllStudents(students);
        } else if (choice === '3') {
            calculateAverage(students);
        } else if (choice === '4') {
            console.log('Goodbye!');
            break;
        } else {
            console.log('Invalid choice. Please enter a number between 1 and 4.');
        }
    }
}

main();