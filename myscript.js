document.addEventListener('DOMContentLoaded', function() {
    
    var todosArray = []
    var theForm = document.getElementById('the-form')

    theForm.addEventListener('submit', function(event) {
        event.preventDefault()

        var newTodoField = document.getElementById('new-todo-field')
        var newTodo = newTodoField.value

        todosArray.push(newTodo)

        document.getElementById('list-of-todos').innerHTML = ""
        for(var i = 0; i < todosArray.length; i++) {
            createListItem(todosArray[i])
        }        
    })

    function createListItem(todoText) {
        
        var newListItem = document.createElement('li')

        newListItem.innerText = todoText

        console.log('the new list item', newListItem)
        var listOfTodos = document.getElementById('list-of-todos')

        listOfTodos.appendChild(newListItem)
    }
})
