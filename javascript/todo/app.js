const todoInput = document.getElementById("todo-input");

const addTodoBtn = document.getElementById("add-todo-btn");

const todoListContainer = document.querySelector("#to-list-container");

todoInput.addEventListener("input", (event) => {
  let todo = event.target.value;
  console.log(todo);
});

addTodoBtn.addEventListener("click", () => {
  let todo = todoInput.value;

  //    creating an li tag
  //    validate
  if (todo.trim().length) {
    let li = document.createElement("li");
    li.textContent = todo;
    todoListContainer.appendChild(li);
  }
});
