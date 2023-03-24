import '../styles/style.css'


const newTaskFactory = (title, dueDate, notes) => {
    return { title, dueDate, notes}
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

    modalForm.addEventListener("submit", function(e) {
        e.preventDefault();
        taskElement(inputField.value, dateInput.value)
        modalContainer.classList.remove('active');
    })

    modal.appendChild(modalHeaderDiv);
    modal.appendChild(modalForm);

    modalContainer.appendChild(modal);


    content.appendChild(modalContainer);
}

function taskElement(name, date) {

    const tasksContainer = document.querySelector('.tasks-container');

    const task = document.createElement('div');
    task.classList.add('task-item-div');

    const checkTitleDiv = document.createElement('div');
    checkTitleDiv.classList.add('check-and-title-div');

    const checkmark = document.createElement('input');
    checkmark.type = 'checkbox';
    checkTitleDiv.appendChild(checkmark);

    const taskTitle = document.createElement('p');
    taskTitle.textContent = name;
    checkTitleDiv.appendChild(taskTitle);
    
    task.appendChild(checkTitleDiv);


    const dueDate = document.createElement('div');
    dueDate.classList.add('date-div');
    dueDate.textContent = date;
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
}

export { newTaskModal };