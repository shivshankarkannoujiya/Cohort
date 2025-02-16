// TODO: 1
document.getElementById('changeTextButton')
    .addEventListener('click', function () {
    const paragraph = document.getElementById('myparagraph');
    paragraph.textContent = `Paragraph is Changed`
})

// TODO: 2
document.getElementById('highlightFirstCity')
    .addEventListener('click', function () {
        const citiesList = document.getElementById('citiesList')
        const firstCity = citiesList.firstElementChild
        firstCity.classList.add('highlight')
    })

// TODO: 3
document.getElementById('changeOrder').addEventListener('click', function () {
    const coffeeType = document.getElementById('coffeeType')
    coffeeType.textContent = `Espresso`
    coffeeType.style.backgroundColor = `hotpink`
    coffeeType.style.padding = `5px`
})

// TODO: 4
document.getElementById('addNewItem').addEventListener('click', function () {
    const newItem = document.createElement('li')
    newItem.textContent = `Chai`
    const shoppingList = document.getElementById('shoppingList')
    shoppingList.appendChild(newItem)
})

// TODO: 5
document.getElementById('removeLastTask').addEventListener('click', function () {
    const taskList = document.getElementById('taskList');
    taskList.lastElementChild.remove()
})