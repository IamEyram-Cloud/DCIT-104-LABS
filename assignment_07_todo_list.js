const readlineSync = require('readline-sync');

// ============================================================================
// FEATURE 1: Add a Task
// ============================================================================

function addTask(tasks) {
    const task = readlineSync.question('Enter task: ');
    tasks.push(task);
    console.log(`Task added: "${task}"`);
}

// ============================================================================
// FEATURE 2: View All Tasks
// ============================================================================

function viewTasks(tasks) {
    if (tasks.length === 0) {
        console.log('Your task list is empty.');
        return;
    }
    
    console.log('\nYour Tasks:');
    for (let i = 0; i < tasks.length; i++) {
        console.log(`${i + 1}. ${tasks[i]}`);
    }
}

// ============================================================================
// FEATURE 3: Delete a Task
// ============================================================================

function deleteTask(tasks) {
    if (tasks.length === 0) {
        console.log('Your task list is empty. Nothing to delete.');
        return;
    }
    
    viewTasks(tasks);  // Show the list first
    
    const taskNum = readlineSync.questionInt('Enter task number to delete: ');
    
    if (taskNum >= 1 && taskNum <= tasks.length) {
        const removedTask = tasks.splice(taskNum - 1, 1);
        console.log(`Task "${removedTask}" has been removed.`);
    } else {
        console.log('Invalid task number. Please try again.');
    }
}

// ============================================================================
// MAIN PROGRAM — Menu Loop
// ============================================================================

function main() {
    const tasks = [];  // Empty array to store tasks
    
    console.log('\n' + '='.repeat(40));
    console.log('        TO-DO LIST MENU');
    console.log('='.repeat(40));
    
    while (true) {
        console.log('\n1. Add task');
        console.log('2. View tasks');
        console.log('3. Delete task');
        console.log('4. Quit');
        
        const choice = readlineSync.question('Enter your choice (1-4): ');
        console.log('-'.repeat(30));
        
        if (choice === '1') {
            addTask(tasks);
        } else if (choice === '2') {
            viewTasks(tasks);
        } else if (choice === '3') {
            deleteTask(tasks);
        } else if (choice === '4') {
            console.log('Goodbye!');
            break;
        } else {
            console.log('Invalid choice. Please enter a number between 1 and 4.');
        }
    }
}

main();