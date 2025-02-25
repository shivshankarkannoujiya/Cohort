const chaiTypes = ["Masala Chai", "Ginger Chai", "Green Tea", "Lemon Tea"]

// console.log(chaiTypes[1])
// console.log(`Total chai types: ${chaiTypes.length}`)

chaiTypes.push("Herbal Tea")
const deletedData = chaiTypes.pop()


let index = chaiTypes.indexOf("Green Tea")
if (index != -1) {
    chaiTypes.splice(index, 1)
}

chaiTypes.forEach((chai, index) => {
    // console.log(`${index + 1}: ${chai}`)
})

const moreChaiTypes = ["oolong Tea", "white Tea"]

const allChaiTypes = chaiTypes.concat(moreChaiTypes)
const newChaiTypes = [...chaiTypes, "Chamolina Tea"]



// TODO: Object

const chaiRecepie = {
    name: "Masala Chai",
    ingredients: {
        teaLeaves: "Assam Tea",
        milk: "Full Cream Milk",
        sugar: "Brown Sugar",
        spices: ["Daalchini", "Ginger"]
    },
    instruction: "Boil milk, add chaiLeaves, sugar, spices ..."
}
// console.log(chaiRecepie.ingredients.spices[1])

const updatedChaiReceipe = {
    ...chaiRecepie,
    instruction: "Boil water, add tea leaves, milk, sugar and spices with some love"
}

// console.log(chaiRecepie);
// console.log(updatedChaiReceipe);

const { name, ingredients } = chaiRecepie
const [firstChai, secondChai] = chaiTypes
console.log(firstChai);
console.log(secondChai);


