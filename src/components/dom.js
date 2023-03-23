import '../styles/style.css'
import { filters } from './sidebarLogic.js';
import { lists } from './sidebarLogic.js';
//import { listModal } from './sidebarLogic.js'

const createDOM = () => {
    title();
    sidebar();
    mainContent();
}

function title() {
    const content = document.getElementById('content');

    const headerContainer = document.createElement('div');
    headerContainer.classList.add('header-container');

    const logo = document.createElement('i');
    logo.classList.add('fa-solid', 'fa-list');
    headerContainer.appendChild(logo);

    const title = document.createElement('h1');
    title.textContent = 'Todo List';
    headerContainer.appendChild(title);

    content.appendChild(headerContainer);
}

const sidebar = () => {
    const content = document.getElementById('content');

    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    sidebar.appendChild(filters());

    sidebar.appendChild(lists());


    content.appendChild(sidebar);
}

const mainContent = () => {
    const content = document.getElementById('content');

    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');


    const listTitleDiv = document.createElement('div');
    listTitleDiv.classList.add('list-title-div');

    const listTitle = document.createElement('h1');
    listTitle.textContent = 'Home';

    listTitleDiv.appendChild(listTitle);
    mainContent.appendChild(listTitleDiv);

    const tasksContainer = document.createElement('div');
    tasksContainer.classList.add('tasks-container');
    mainContent.appendChild(tasksContainer);


    /* UI Design for individual tasks */

    const task = document.createElement('div');
    task.classList.add('task-item-div');

    const checkTitleDiv = document.createElement('div');
    checkTitleDiv.classList.add('check-and-title-div');

    const checkmark = document.createElement('input');
    checkmark.type = 'checkbox';
    checkTitleDiv.appendChild(checkmark);

    const taskTitle = document.createElement('p');
    taskTitle.textContent = "Do washing up";
    checkTitleDiv.appendChild(taskTitle);
    
    task.appendChild(checkTitleDiv);


    const dueDate = document.createElement('div');
    dueDate.classList.add('date-div');
    dueDate.textContent = "8/7/2023";
    task.appendChild(dueDate);

    const btnsDiv = document.createElement('div');
    btnsDiv.classList.add('btns-div');

    const editBtn = document.createElement('i');
    editBtn.id = 'editBtn';
    editBtn.classList.add('fa-solid', 'fa-pen-to-square');
    btnsDiv.appendChild(editBtn);

    const removeBtn = document.createElement('i');
    removeBtn.id = 'removeBtn';
    removeBtn.classList.add('fa-solid', 'fa-circle-minus');
    btnsDiv.appendChild(removeBtn);

    task.appendChild(btnsDiv);

    tasksContainer.appendChild(task);


    /* Add new task button */

    const btnDiv = document.createElement('div');
    btnDiv.classList.add('new-task-div');
    const newTaskBtn = document.createElement('i');
    newTaskBtn.id = 'new-task-btn';
    newTaskBtn.classList.add('fa-solid', 'fa-circle-plus');
    btnDiv.appendChild(newTaskBtn);
    mainContent.appendChild(btnDiv);

    content.appendChild(mainContent);
}

export { createDOM };