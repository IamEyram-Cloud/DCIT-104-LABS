const readlineSync = require('readline-sync');

// ============================================================================
// PART A: Transpose a Matrix
// ============================================================================

function readMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const rowInput = readlineSync.question(`Enter row ${i + 1}: `);
        const row = rowInput.split(' ').map(Number);
        matrix.push(row);
    }
    return matrix;
}

function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let rowStr = '';
        for (let j = 0; j < matrix[i].length; j++) {
            rowStr += String(matrix[i][j]).padStart(4);
        }
        console.log(rowStr);
    }
}

function transpose(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transposed = [];
    
    for (let i = 0; i < cols; i++) {
        const newRow = [];
        for (let j = 0; j < rows; j++) {
            newRow.push(matrix[j][i]);
        }
        transposed.push(newRow);
    }
    return transposed;
}

// ============================================================================
// PART B: Add Two Matrices
// ============================================================================

function addMatrices(A, B) {
    const rows = A.length;
    const cols = A[0].length;
    const result = [];
    
    for (let i = 0; i < rows; i++) {
        const newRow = [];
        for (let j = 0; j < cols; j++) {
            newRow.push(A[i][j] + B[i][j]);
        }
        result.push(newRow);
    }
    return result;
}

// ============================================================================
// PART C: Multiply Two Matrices
// ============================================================================

function multiplyMatrices(A, B) {
    const rowsA = A.length;
    const colsA = A[0].length;
    const colsB = B[0].length;
    const result = [];
    
    for (let i = 0; i < rowsA; i++) {
        const newRow = [];
        for (let j = 0; j < colsB; j++) {
            let total = 0;
            for (let k = 0; k < colsA; k++) {
                total += A[i][k] * B[k][j];
            }
            newRow.push(total);
        }
        result.push(newRow);
    }
    return result;
}

// ============================================================================
// MAIN PROGRAM
// ============================================================================

function main() {
    console.log('\n========================================');
    console.log('        MATRIX OPERATIONS CALCULATOR');
    console.log('========================================');
    console.log('1. Part A: Transpose a Matrix');
    console.log('2. Part B: Add Two Matrices');
    console.log('3. Part C: Multiply Two Matrices');
    console.log('----------------------------------------');
    
    const choice = readlineSync.question('Choose an option (1/2/3): ');
    console.log('----------------------------------------');
    
    // =========================================================================
    // PART A: TRANSPOSE
    // =========================================================================
    if (choice === '1') {
        console.log('\n--- PART A: TRANSPOSE A MATRIX ---');
        const rows = readlineSync.questionInt('Enter number of rows: ');
        const cols = readlineSync.questionInt('Enter number of columns: ');
        
        console.log('\nEnter the matrix:');
        const matrix = readMatrix(rows, cols);
        
        console.log('\nOriginal Matrix:');
        printMatrix(matrix);
        
        const transposed = transpose(matrix);
        console.log('\nTransposed Matrix:');
        printMatrix(transposed);
    
    // =========================================================================
    // PART B: ADDITION
    // =========================================================================
    } else if (choice === '2') {
        console.log('\n--- PART B: ADD TWO MATRICES ---');
        const rows = readlineSync.questionInt('Enter number of rows: ');
        const cols = readlineSync.questionInt('Enter number of columns: ');
        
        console.log('\nEnter first matrix:');
        const A = readMatrix(rows, cols);
        
        console.log('\nEnter second matrix:');
        const B = readMatrix(rows, cols);
        
        console.log('\nMatrix A:');
        printMatrix(A);
        console.log('\nMatrix B:');
        printMatrix(B);
        
        const result = addMatrices(A, B);
        console.log('\nA + B (Result):');
        printMatrix(result);
    
    // =========================================================================
    // PART C: MULTIPLICATION
    // =========================================================================
    } else if (choice === '3') {
        console.log('\n--- PART C: MULTIPLY TWO MATRICES ---');
        
        const rowsA = readlineSync.questionInt('Enter rows for matrix A: ');
        const colsA = readlineSync.questionInt('Enter columns for matrix A: ');
        console.log('\nEnter matrix A:');
        const A = readMatrix(rowsA, colsA);
        
        const rowsB = readlineSync.questionInt('\nEnter rows for matrix B: ');
        const colsB = readlineSync.questionInt('Enter columns for matrix B: ');
        console.log('\nEnter matrix B:');
        const B = readMatrix(rowsB, colsB);
        
        if (colsA !== rowsB) {
            console.log('\nError: Cannot multiply matrices.');
            console.log(`Matrix A has ${colsA} columns, but Matrix B has ${rowsB} rows.`);
            console.log('Columns of A must equal rows of B.');
            return;
        }
        
        console.log('\nMatrix A:');
        printMatrix(A);
        console.log('\nMatrix B:');
        printMatrix(B);
        
        const result = multiplyMatrices(A, B);
        console.log('\nA × B (Result):');
        printMatrix(result);
    
    } else {
        console.log('Invalid choice. Please run again and select 1, 2, or 3.');
    }
    
    console.log('\n========================================');
    console.log('End of program. Thank you!');
    console.log('========================================');
}

main();