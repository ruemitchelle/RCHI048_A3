const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click', addTodo);

function addTodo(event){
    //prevents from submitting button
    event.preventDefault();
    //Create todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //Create list items 
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Create completed button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);
    //Create trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //append to list
    todoList.appendChild(todoDiv);
    //clear todo input value
    todoInput.value="";
}

//https://www.youtube.com/watch?v=Ttf3CEsEwMQ&list=PLZHpUd9MSdiaYjwmSq0xxKsYbDrQeRYup&index=5&t=131s referenced for todolist