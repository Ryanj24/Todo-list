import '../styles/style.css'

const createDOM = () => {
    title();
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

export { createDOM };