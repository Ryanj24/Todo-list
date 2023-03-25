import '../styles/style.css'

const clearFunction = () => {
    const tasksContainer = document.querySelector('.tasks-container');
    tasksContainer.innerHTML = "";
}

export { clearFunction }