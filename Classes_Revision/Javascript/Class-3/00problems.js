// TODO: Create an array containing diff types of tea
const teaTypes = [
    "masala",
    "ginger",
    "lemon",
    "herbal tea",
    "oolong",
    "earl grey"
];


// TODO: Add `Chamomile Tea` to the existing list of tea
function insertTea(teaList, tea) {
    teaList.push(tea);
}



// TODO: Remove `oolong` tea from list of tea
function removeTea(teaList, tea) {
    const index = teaList.indexOf(tea);
    if (index > -1) {
        teaList.splice(index, 1);
    }
}



// TODO: Filter the list to only include teas that are caffeinated
function getCaffeinatedTeas(teaList) {
    const caffeinatedTeas = teaList.filter((tea) => tea != "herbal tea")
    return caffeinatedTeas;
}



// TODO: sort the list of teas in alphabetical order
teaTypes.sort();


// TODO: Use a for loop to count how many teas are caffeinated (excluding `herbal tea`)
function countCaffeinatedTeas(teaList) {
    let caffeinatedTea = 0;
    for (let i = 0; i < teaList.length; i++) {
        if (teaList[i] !== `herbal tea`) {
            caffeinatedTea++;
        }
    }
}


// TODO: Use a for loop to create a new array with all tea names in upperCase
function upperCaseTeaArrayCreator(teaList) {
    let upperCaseTeas = [];
    for (let i = 0; i < teaList.length; i++) {
          upperCaseTeas.push(teaList[i].toUpperCase());
    }
    return upperCaseTeas
}


// TODO: Use a for loop to find the tea name with the most characters
function getLongestTea(teaList) {
    let longestTea = "";
    for (let i = 0; i < teaList.length; i++){
        if (teaList[i].length > longestTea) {
            longestTea = teaList[i];
        }
    }
    return longestTea;
}


// TODO: Use a for loop to reverse the order of tea in the array
function reverseArray(teaList) {
    let reverseTeaTypes = [];
    for (let i = teaList.length - 1; i >= 0; i--){
        reverseTeaTypes.push(teaList[i]);
    }
    return reverseTeaTypes;
}
