const addButton = document.getElementById('add-btn')
const todoInput = document.getElementById('todo-input')
const todoItemsContainer = document.getElementById('todoList')

addButton.addEventListener('click', function () {
    
    const inputValue = todoInput.value
    const newTodo = document.createElement('li');
    const delButton = document.createElement('button');

    newTodo.textContent = inputValue
    delButton.textContent = `x`

    newTodo.appendChild(delButton)

    delButton.addEventListener('click', function () {
        newTodo.remove()
    })

    todoItemsContainer.appendChild(newTodo)
    todoInput.value = ''
})

