let taskArray = []

let todoInput_el = document.getElementById("todoInput")
let todoForm_el = document.getElementById("todoForm")

const localTaskStorage = JSON.parse(localStorage.getItem("arrayOfTasks"))

if(localTaskStorage){
  todoList.innerHTML = ""
  for(let i=0; i<localTaskStorage.length; i++){
    addTask(localTaskStorage[i])
  }
}

todoForm_el.addEventListener("submit", function(event) {
    event.preventDefault()
    const toDo = todoInput_el.value
    todoInput_el.value = ""
    addTask(toDo)

})

function addTask(toDo){
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
      let index = taskArray.indexOf(toDo)
      if(index > -1){
        taskArray.splice(index, 1);
      }
      localStorage.setItem("arrayOfTasks", JSON.stringify(taskArray))
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
          toDoSpan.style.opacity = 1
        }
  })
  
  toDoDiv.appendChild(checkbox)
  toDoDiv.appendChild(toDoSpan)
  toDoDiv.appendChild(delTaskButton)
  document.getElementById("todoList").appendChild(toDoDiv)

  taskArray.push(toDo)
  localStorage.setItem("arrayOfTasks", JSON.stringify(taskArray))
}