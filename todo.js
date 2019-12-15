const todoForm = document.querySelector(".js-todo"),
  todoInput = todoForm.querySelector("input"),
  todoList = document.querySelector(".js-todoList");

const TODOS_LS = "toDos";

let todos = [];

function deleteTodo(e) {
  const delLi = e.target.parentNode;
  const delId = delLi.id;
  todoList.removeChild(delLi);
  const cleanTodo = todos.filter(function(todo) {
    return todo.id !== parseInt(delId);
  });
  todos = cleanTodo;
  saveTodos();
}

function saveTodos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("span");
  delBtn.innerText = "  ❌";
  delBtn.classList.add("btn");
  delBtn.addEventListener("click", deleteTodo);
  const todo = document.createElement("span");
  const newId = todos.length + 1;
  todo.innerText = text;
  li.appendChild(todo);
  li.appendChild(delBtn);
  li.id = newId;
  todoList.appendChild(li);
  const todoObj = {
    text,
    id: newId
  };
  todos.push(todoObj);
  saveTodos();
}

function handleSubmit(e) {
  e.preventDefault();
  const todo = todoInput.value;
  paintToDo(todo);
  todoInput.value = "";
}

function loadTodo() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(todo) {
      paintToDo(todo.text);
    });
  }
}

function init() {
  todoForm.addEventListener("submit", handleSubmit);
  loadTodo();
}

init();
