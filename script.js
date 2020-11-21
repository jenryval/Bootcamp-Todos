var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

function renderTodos() {
  for(var i = 0; i < todos.length; i++) {
      todoList.innerText = ''
    // create LI element
      var li = document.createElement("li")
    // add todo tect to li
      li.innerText = todos[i]
   // add data.index attribute
      li.setAttribute("data-index", i)
    // aappend li to ul (stick it)
      todoList.appendChild(li);
    // create button
   var button = document.createElement("button")
   button.innerText = "complete"
   li.appendChild(button)
  }
}

function addtodo(event) {
  event.preventDefault()
  // get input value
  var newTodo = todoInput.Value

if(newTodo !== ''){
  return;
}
  // push values into todos
  todos.push(newTodo)
  renderTodos()
}

function removeTodo(event){
  var target = event.target
  if (target.matches("button")){
    // find index from LI
    var index = parseInt(target.parentNode.getAttribute("data-index"))
    // remove the Todo
    todos.splice(index, 1)
    // rerender todos
    renderTodos()
  }
}

todoForm.addEventListener("submit", addtodo)
todoList.addEventListener("click", removeTodo)

renderTodos()