import '../styles/style.css'
import { filters } from './sidebarFilters.js';

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



    content.appendChild(sidebar);
}

const mainContent = () => {
    const content = document.getElementById('content');

    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    content.appendChild(mainContent);
}

export { createDOM };