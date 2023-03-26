import '../styles/style.css'
import { clearFunction } from './clearFunction.js'
import { taskElement } from './mainContentLogic.js';

/*
const todaysTasks = document.getElementById('dueToday');
    const monthTasks = document.getElementById('thisMonth');
    const pastTasks = document.getElementById('expired');
*/


const loadAllTasks = () => {

    const allTasksDiv = document.getElementById('allTasks');

    

    allTasksDiv.addEventListener("click", function() {
        clearFunction();
        const listTitle = document.getElementById('list-title');
        listTitle.textContent = 'All';
        for (let i = 0; i < getArr.length; i++) {
            taskElement(getArr[i].title, getArr[i].dueDate);
        }
    })
    

    if (!localStorage.getItem('All')) {
        const all = [];
        localStorage.setItem('All', JSON.stringify(all));
    }

    const getArr = JSON.parse(localStorage.getItem('All'));

    
}

export { loadAllTasks }