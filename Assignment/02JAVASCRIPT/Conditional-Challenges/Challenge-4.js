function calculateGrade(marks) {
    if (marks >= 90) {
        return 'A';
    }else if (marks >= 80) {
        return 'B';
    }else if (marks >= 70) {
        return 'C';
    }else if (marks >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log(calculateGrade(91));
console.log(calculateGrade(81));
console.log(calculateGrade(71));
console.log(calculateGrade(61));
console.log(calculateGrade(59));
