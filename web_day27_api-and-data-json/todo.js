const loadTodo = async() => {
  const url = "https://jsonplaceholder.typicode.com/todos";
 const res= await fetch(url)
  const data = await res.json();
  displayTodo(data);
  // fetch(url)

};
const displayTodo = (todos) => {
  // console.log(todos)
  const todoContainer = document.getElementById("todo-list");
  todoContainer.innerHTML = "";
  todos.forEach((todo) => {
    // console.log(todo)
    const todocard = document.createElement("div");
    todocard.classList.add("todo-card");
    todocard.innerHTML = `

        <h2>${todo.title}</h2>
        <p>${
          todo.completed === true
            ? '<i class="fa-solid fa-check"></i> completed '
            : '<i class="fa-regular fa-square-check"></i> not complete'
        }</p>

        `;
    todoContainer.appendChild(todocard);
  });
};

loadTodo();
