const myObject = {
    js: 'Javascript',
    py: 'Python',
    cpp: 'C++',
    rb: 'Ruby'
}

for (const key in myObject) {
    // console.log(`${key} extension of ${myObject[key]}`);
}


const programmings = ['rb', 'py', 'js', 'cpp', 'java'];
for (const key in programmings) {
    // console.log(programmings[key])
}



// TODO: forEach()
const coding = ["Javascript", "C++", "Python", "Java", "Ruby"];
coding.forEach((val) => {
    // console.log(val)
})


function printMe(item) {
    // console.log(item)
}
// coding.forEach(printMe);


// TODO: RECAP
coding.forEach((val, index, arr) => {
    // console.log(val, index, arr);
})


const myCoding = [
    {
        languageName: "Javascript", 
        languageFileName: "js"
    },
    {
        languageName: "Java", 
        languageFileName: "Java"
    },
    {
        languageName: "Python", 
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName)
})