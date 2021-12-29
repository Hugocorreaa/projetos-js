//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click", addTodo); // Quando clica no botão adiciona a tarefa
todoList.addEventListener("click", deleteCheck); //Apaga a tarefa ou completa a tarefa

//Functions
function addTodo(event) {
  //Previne a submissão do form
  event.preventDefault();

  //Cria div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //Cria <li>
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value; //Pega o que tem dentro do input
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //Botão check
  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  completeButton.classList.add("complete-btn");
  todoDiv.appendChild(completeButton);

  //Botão lixeira
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //Adiciona na class todo-list
  todoList.appendChild(todoDiv);

  //Apagar o que tem dentro do input quando aperta o botão
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;

  //Apaga o tarefa
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //Animação
    todo.classList.add("fall");
    //Espera a animação acabar e o remove
    todo.addEventListener('transitionend', function(){
        todo.remove();
    })
  }

  // Completa a tarefa
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
