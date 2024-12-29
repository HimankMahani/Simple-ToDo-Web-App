let todoInput_el = document.getElementById("todoInput")
let todoForm_el = document.getElementById("todoForm")

todoForm_el.addEventListener("submit", function(event) {
    event.preventDefault()
    const toDo = todoInput_el.value
    todoInput_el.value = ""

    const toDoDiv = document.createElement("div")
    toDoDiv.className = "task-el"

    let toDoSpan = document.createElement("p")
    toDoSpan.id = "text-el"
    let toDoText = document.createTextNode(toDo)
    toDoSpan.appendChild(toDoText)

    let delTaskButton = document.createElement("button");
    let delIcon = document.createElement("img")
    delIcon.src = "assets/delete.svg"
    delTaskButton.append(delIcon)
    delTaskButton.id = "deleteTaskBtn";

    delTaskButton.addEventListener("click", function() {
        toDoDiv.remove()
    })

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = "id";

    checkbox.addEventListener("change", function(){
        if (checkbox.checked==true){
            toDoSpan.style.textDecoration = "line-through"
            toDoSpan.style.opacity = 0.5
          } else {
            toDoSpan.style.textDecoration = "none"
          }
    })
    

    toDoDiv.appendChild(checkbox)
    toDoDiv.appendChild(toDoSpan)
    toDoDiv.appendChild(delTaskButton)
    document.getElementById("todoList").appendChild(toDoDiv)

})

