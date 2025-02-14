/*

Employee Management System
🔹 Features:
    Store employees in an array of objects
    Add, remove, and update employees
    Filter employees by department or salary
*/

const employees = [
    { name: "John1", age: 33, salary: 12000, department: "X" },
    { name: "John2", age: 33, salary: 12000, department: "Y" },
    { name: "Joh3", age: 33, salary: 12000, department: "X" },
    { name: "Joh4", age: 33, salary: 12000, department: "Y" },
    { name: "John5", age: 33, salary: 12000, department: "Z" }
]


// TODO: add addEmployee function
employees.addEmployee = function (employeeObj) {

    if (!(typeof employeeObj === "object" && employeeObj !== null)) {
        throw new Error("Invalid input: First argument must be an array, second must be an object.");
    }

    this.push(employeeObj)
}


// Method - 2
const addEmployeeMethod2 = function (arr, obj) {
    if (!Array.isArray(arr) && typeof obj === "object" && obj !== null) {
        throw new Error(`Invalid Inputs`);
    }
    
    arr.push(obj);
    return arr; // optional
}


// TODO: remove function
// Splice
// slice
// filter
const removeEmployee = function (arr, obj) {
    const index = arr.indexOf(obj);
    if (index !== -1) {
        arr.splice(index, 1);
    }
}

// removeEmployee(employees, employees[0])
// console.log(employees);


// TODO: Modify function
const updateEmployee = function (
    arr,
    name,
    department,
    newDetails
) {
    const employee = arr.find((e) => e.name === name && e.department === department)

    if (!employee) {
        throw new Error(`Employee does not Exist`)
    }
    Object.assign(employee, newDetails);
}


const filteredFn = function (arr, department, salary) {
    return arr.filter(e => e.department === department || e.salary === salary)
}
