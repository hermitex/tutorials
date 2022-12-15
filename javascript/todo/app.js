const todoInput = document.getElementById("todo-input");

const addTodoBtn = document.getElementById("add-todo-btn");

const todoListContainer = document.querySelector("#to-list-container");

const todoForm = document.querySelector("#todo-form");

todoInput.addEventListener("input", (event) => {
  let todo = event.target.value;
  console.log(todo);
});

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let todo = todoInput.value;

  //    creating an li tag
  //    validate
  if (todo.trim().length) {
    let li = document.createElement("li");
    let input = document.createElement("input");
    let span = document.createElement("span");
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";

    deleteBtn.addEventListener("click", (event) => {
      let todoToDelete = event.target.parentNode.parentNode;
      todoListContainer.removeChild(todoToDelete);
    });

    span.appendChild(deleteBtn);

    input.setAttribute("type", "checkbox");
    li.textContent = todo;
    li.appendChild(input);
    li.appendChild(span);
    todoListContainer.appendChild(li);

    input.addEventListener("click", (event) => {
      let targetParentNode = event.target.parentNode;

      if (targetParentNode.classList.contains("line-through")) {
        targetParentNode.classList.remove("line-through");
      } else {
        targetParentNode.classList.add("line-through");
      }
    });
  }
  // console.log(deleteBtn);

  todoForm.reset();
});

// Checking items as done

document.addEventListener("mousemove", (event) => {
  document.body.style.backgroundColor = `#${Math.floor(Math.random() * 1000)}`;
});
