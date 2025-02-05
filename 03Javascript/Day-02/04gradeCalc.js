/*
Marks >= 90 : A
Marks >= 80  : B
Marks >= 70  : C
Marks >= 60  : D
F
*/

function calculateGrade(marks) {
    if (marks >= 90) {
        return 'A'
    } else if (marks >= 80) {
        return 'B'
    } else if (marks >= 70) {
        return 'C'
    } else if (marks >= 60) {
        return 'D'
    } else {
        return 'F'
    }
}


const grade = calculateGrade(79.9);
console.log(`GRADE: ${grade}`);