import '../styles/style.css'
import moment from 'moment'
import { taskComplete, editTask, removeTask } from './taskControls.js'


const newTaskFactory = (title, dueDate, notes, complete) => {
    return { title, dueDate, notes, complete}
}


const newTaskModal = () => {
    const content = document.getElementById('content');

    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modal-container', 'active');

    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalHeaderDiv = document.createElement('div');
    modalHeaderDiv.classList.add('modal-header-div');

    const modalHeader = document.createElement('h1');  
    modalHeader.textContent = 'Add New Task';

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

    const inputs = document.createElement('div');
    inputs.classList.add('form-inputs');

    const taskLabelDiv = document.createElement('div');
    taskLabelDiv.classList.add('task-div');
    const label = document.createElement('label');
    label.textContent = 'Task: '
    taskLabelDiv.appendChild(label);
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.id = 'task-name';
    inputField.name = 'task-name';
    taskLabelDiv.appendChild(inputField);

    inputs.appendChild(taskLabelDiv);

    const taskDateDiv = document.createElement('div');
    taskDateDiv.classList.add('task-div');
    const dueDate = document.createElement('label');
    dueDate.textContent = 'Due: ';
    taskDateDiv.appendChild(dueDate);
    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.id = 'task-date';
    dateInput.name = 'task-date';
    taskDateDiv.appendChild(dateInput);

    inputs.appendChild(taskDateDiv);

    const taskNotesDiv = document.createElement('div');
    taskNotesDiv.classList.add('task-div');
    const notes = document.createElement('label');
    notes.textContent = 'Notes: ';
    taskNotesDiv.appendChild(notes);
    const noteInput = document.createElement('textarea');
    noteInput.id = 'task-notes';
    noteInput.name = 'task-note';
    noteInput.rows = '5';
    noteInput.cols = '10';
    taskNotesDiv.appendChild(noteInput);

    inputs.appendChild(taskNotesDiv);


    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Add Task';

    modalForm.appendChild(inputs);
    modalForm.appendChild(submitBtn);


    const listTitle = document.getElementById('list-title').textContent;
    const currentList = JSON.parse(localStorage.getItem(listTitle.toString()));

    const allTasks = JSON.parse(localStorage.getItem('All'));

    modalForm.addEventListener("submit", function(e) {
        e.preventDefault();
        let newTask = newTaskFactory(inputField.value, dateInput.value, noteInput.value, false);
        currentList.push(newTask);
        allTasks.push(newTask);
        localStorage.setItem(`${listTitle}`, JSON.stringify(currentList));
        localStorage.setItem('All', JSON.stringify(allTasks));
        taskElement(newTask.title, newTask.dueDate);
        
        modalContainer.classList.remove('active');
        modalContainer.parentElement.removeChild(modalContainer);
    })

    modal.appendChild(modalHeaderDiv);
    modal.appendChild(modalForm);

    modalContainer.appendChild(modal);


    content.appendChild(modalContainer);
}

function taskElement(name, date, complete) {

    const tasksContainer = document.querySelector('.tasks-container');

    const task = document.createElement('div');
    task.classList.add('task-item-div');

    const checkTitleDiv = document.createElement('div');
    checkTitleDiv.classList.add('check-and-title-div');


    if (complete === true) {
        const strikeTitle = document.createElement('s');
        const taskTitle = document.createElement('p');
        taskTitle.textContent = name;
        strikeTitle.appendChild(taskTitle);
        checkTitleDiv.appendChild(strikeTitle);
    } else {
        const taskTitle = document.createElement('p');
        taskTitle.textContent = name;
        checkTitleDiv.appendChild(taskTitle);
    }

    
    task.appendChild(checkTitleDiv);


    const dueDate = document.createElement('div');
    dueDate.classList.add('date-div');

    const formatDate = moment(date).format('Do MMM YYYY');
    dueDate.textContent = formatDate;
    task.appendChild(dueDate);

    const btnsDiv = document.createElement('div');
    btnsDiv.classList.add('btns-div');

    /*
    const editBtn = document.createElement('i');
    editBtn.id = 'editBtn';
    editBtn.classList.add('fa-solid', 'fa-pen-to-square');
    btnsDiv.appendChild(editBtn);*/

    const completeBtn = document.createElement('i');
    completeBtn.id = 'completeBtn';
    completeBtn.classList.add('fa-solid', 'fa-check');
    btnsDiv.appendChild(completeBtn);

    const removeBtn = document.createElement('i');
    removeBtn.id = 'removeBtn';
    removeBtn.classList.add('fa-solid', 'fa-circle-minus');
    btnsDiv.appendChild(removeBtn);

    task.appendChild(btnsDiv);

    tasksContainer.appendChild(task);
    btnsDiv.addEventListener("click", (e) => {
        if (e.target.id === 'completeBtn') {
            taskComplete(e.target);
        }
        else if (e.target.id === 'removeBtn') {
            removeTask(e.target);
        }
    });

}

export { newTaskModal, taskElement, newTaskFactory };