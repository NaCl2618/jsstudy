const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const todoInput = toDoForm.querySelector("input");

const TODOS_KEY = "todos";
let toDos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  saveTodos();
}

function paintToDo(newTodo) {
  const dl = document.createElement("dl");
  dl.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.className="btn";
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);

  dl.appendChild(span);
  dl.appendChild(button);
  toDoList.appendChild(dl);
}

function handelToDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveTodos();
}

toDoForm.addEventListener("submit", handelToDoSubmit);



const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedTodos = JSON.parse(savedToDos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintToDo);
}

