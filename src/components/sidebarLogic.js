import '../styles/style.css'
import { clearFunction } from './clearFunction.js'
import { taskElement } from './mainContentLogic.js'
import { newTaskFactory } from './mainContentLogic.js'

const filters = () => {
    const taskFilters = document.createElement('div');
    taskFilters.classList.add('filters-div')

    const arr = ["Home", "Today", "Upcoming", "Past"];

    const iconsClasses = [['fa-solid', 'fa-house'], ['fa-solid', 'fa-calendar-day'], ['fa-solid', 'fa-calendar-days'], ['fa-solid', 'fa-calendar-xmark']]

    for (let i = 0; i < arr.length; i++) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('task-filter');
        const icon = document.createElement('i');
        icon.classList.add(`${iconsClasses[i][0]}`, `${iconsClasses[i][1]}`);
        itemDiv.appendChild(icon);

        const label = document.createElement('p');
        label.innerHTML = arr[i];
        itemDiv.appendChild(label);

        taskFilters.appendChild(itemDiv);
    }

    return taskFilters;
}

const lists = () => {

    const listsContainer = document.createElement('div');
    listsContainer.classList.add('lists-div');

    const listsHeader = document.createElement('h1');
    listsHeader.textContent = 'Lists';

    listsContainer.appendChild(listsHeader);



    //listsContainer.appendChild(createList("Home"));

    const newListBtn = document.createElement('button');
    newListBtn.classList.add('list-btn');
    newListBtn.textContent = "Add List";
    newListBtn.addEventListener("click", listModal);

    listsContainer.appendChild(newListBtn);

    let allLists = [];
    for (let i = 0; i < localStorage.length; i++) {
        allLists.unshift(localStorage.key(i));
    }

    for (let i = 0; i < allLists.length; i++) {
        listsContainer.insertBefore(createList(allLists[i]), newListBtn);
    }

    return listsContainer;
}



function createList(name) {

    const listDiv = document.createElement('div');
    listDiv.classList.add('list-item');

    const listName = document.createElement('h2');
    listName.textContent = name;

    let listTitleString = name;
    
    name = [];

    if (!localStorage.getItem(`${listTitleString}`)) {
        localStorage.setItem(`${listTitleString}`, JSON.stringify(name));
    }

    listDiv.appendChild(listName);
    listDiv.addEventListener("click", () => {
        clearFunction();
        const listTitle = document.getElementById('list-title');
        listTitle.textContent = `${listTitleString}`;
        const getArr = JSON.parse(localStorage.getItem(`${listTitleString}`));

        
        for (let i = 0; i < getArr.length; i++) {
            taskElement(getArr[i].title, getArr[i].dueDate);
        }
    });

    return listDiv;
}

const listModal = () => {
    const content = document.getElementById('content');

    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container', 'active');

    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalHeaderDiv = document.createElement('div');
    modalHeaderDiv.classList.add('modal-header-div');

    const modalHeader = document.createElement('h1');  
    modalHeader.textContent = 'Add New List';

    const modalClose = document.createElement('button');
    modalClose.id = 'modal-close';
    modalClose.innerHTML = '&times';
    modalClose.addEventListener("click", function() {
        modalContainer.classList.remove('active');
    })

    modalHeaderDiv.appendChild(modalHeader);
    modalHeaderDiv.appendChild(modalClose);


    const modalForm = document.createElement('form');
    modalForm.id = 'modalForm';

    const inputField = document.createElement('input')
    inputField.type = 'text';
    inputField.placeholder = 'List name...';
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Add List';

    modalForm.appendChild(inputField);
    modalForm.appendChild(submitBtn);

    modalForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const listsContainer = document.querySelector('.lists-div');
        const listBtn = document.querySelector('.list-btn');
        listsContainer.insertBefore(createList(inputField.value), listBtn);
        modalContainer.classList.remove('active');
    })

    modal.appendChild(modalHeaderDiv);
    modal.appendChild(modalForm);

    modalContainer.appendChild(modal);


    content.appendChild(modalContainer);
}


export { filters, lists, listModal }