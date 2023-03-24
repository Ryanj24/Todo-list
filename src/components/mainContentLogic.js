import '../styles/style.css'

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

    modal.appendChild(modalHeaderDiv);
    modal.appendChild(modalForm);

    modalContainer.appendChild(modal);


    content.appendChild(modalContainer);
}

export { newTaskModal };