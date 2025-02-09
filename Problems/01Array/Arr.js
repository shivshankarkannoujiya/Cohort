// TODO: Create an array containing different types of teas
const teas = ["Green tea", "Black tea", "White tea", "oolong tea", "Herbal tea"];


// TODO: Add `Chamomile tea` to existing list of teas
teas.push("Chamomile tea");


// TODO: Remove `oolong tea` from list of teas
const index = teas.indexOf('oolong tea');
if (index > -1) {
    teas.splice(index, 1);
}


// TODO: filter the list to only includes that are ceffeinated
let caffienatedTea = []
for (let i = 0; i < teas.length; i++) {
    if (teas[i] !== "Herbal tea") {
        caffienatedTea.push(teas[i]);
    }
}

const caffienatedTea2 = teas.filter((tea) => tea !== 'Herbal tea' )
// console.log(caffienatedTea2);


// TODO: Sort the list of teas in alphabetical Order.
teas.sort();
// console.log(teas);


// TODO:  Use a for loop to print each type of tea in the array
for (let i = 0; i < teas.length; i++) {
    // console.log(teas[i])
}


// TODO: Use a for loop to count how many teas are caffienated (excluding `Herbal tea`);
let caffienatedTeas = 0;
for (let i = 0; i < teas.length; i++) {
    if (teas[i] !== 'Herbal tea') {
        caffienatedTeas++
    }
}
// console.log(caffienatedTeas);


// TODO: Use a for loop to create a new array with all tea names in uppercase.
let teasInUpperCase = [];
for (let i = 0; i < teas.length; i++){
    teasInUpperCase.push(teas[i].toUpperCase());
}
// console.log(teasInUpperCase);


// TODO: Use a for loop to find the tea name with the most characters.
let longestTea = "";
for (let i = 0; i < teas.length; i++){
    if (teas[i].length > longestTea.length) {
        longestTea = teas[i]
    }
}

// console.log(longestTea);

// TODO: Use a for loop to reverse order of the teas in array
let reversedArray = []
for (let i = teas.length - 1; i >= 0; i--){
    reversedArray.push(teas[i])
}



