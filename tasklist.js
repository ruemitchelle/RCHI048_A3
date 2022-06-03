
const taskInput = document.querySelector('.task-input');
const taskButton = document.querySelector('.task-button');
const taskList = document.querySelector('.task-list');

taskButton.addEventListener('click', addTask);
taskList.addEventListener('click'. deleteCheck)

function addTask(event){
    //prevents from submitting button
    event.preventDefault();
    //Create task div
    const taskDiv = document.createElement('div');
    taskDiv.classList.add("task");
    //Create list items 
    const newTask = document.createElement('li');
    newTask.innerText = taskInput.value;
    newTask.classList.add('task-item');
    taskDiv.appendChild(newTask);
    //Create completed button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = `<i class="fa-regular fa-circle-check"></i>`;
    completedButton.classList.add("completed-btn");
    taskDiv.appendChild(completedButton);
    //Create trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    trashButton.classList.add("trash-btn");
    taskDiv.appendChild(trashButton);
    //append to list
    taskList.appendChild(taskDiv);
    //clear task input value
    taskInput.value="";
}

function deleteCheck(e) {
    const item = e.target;
    //remove task

    if (item.classList[0] === 'trash-btn') {
        const task = item.parentElement;
        taskButton.remove()
    }
}