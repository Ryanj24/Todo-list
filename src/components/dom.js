import '../styles/style.css'
import { filterEventListeners, filters } from './sidebarLogic.js';
import { lists } from './sidebarLogic.js';
import { newTaskModal } from './mainContentLogic.js'
import { allTasks, loadAllTasks } from './taskFilters.js';
import { taskElement } from './mainContentLogic.js';

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
    filterEventListeners();
}

const mainContent = () => {
    const content = document.getElementById('content');

    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');


    const listTitleDiv = document.createElement('div');
    listTitleDiv.classList.add('list-title-div');

    const listTitle = document.createElement('h1');
    listTitle.id = 'list-title';
    listTitle.textContent = 'All';

    listTitleDiv.appendChild(listTitle);
    mainContent.appendChild(listTitleDiv);

    const tasksContainer = document.createElement('div');
    tasksContainer.classList.add('tasks-container');


    mainContent.appendChild(tasksContainer);


    /* Add new task button */

    const btnDiv = document.createElement('div');
    btnDiv.classList.add('new-task-div');
    const newTaskBtn = document.createElement('i');
    newTaskBtn.id = 'new-task-btn';
    newTaskBtn.classList.add('fa-solid', 'fa-circle-plus');
    newTaskBtn.addEventListener("click", newTaskModal);
    btnDiv.appendChild(newTaskBtn);
    mainContent.appendChild(btnDiv);

    content.appendChild(mainContent);

    allTasks();
}

export { createDOM };