import '../styles/style.css'
import { clearFunction } from './clearFunction.js'
import { taskElement } from './mainContentLogic.js';
import moment from 'moment';

/*
const todaysTasks = document.getElementById('dueToday');
    const monthTasks = document.getElementById('thisMonth');
    const pastTasks = document.getElementById('expired');
*/


const loadAllTasks = () => {

    const allTasksDiv = document.getElementById('allTasks');

    if (!localStorage.getItem('All')) {
        const all = [];
        localStorage.setItem('All', JSON.stringify(all));
    }

    const getArr = JSON.parse(localStorage.getItem('All'));
    

    allTasksDiv.addEventListener("click", function() {
        clearFunction();
        const listTitle = document.getElementById('list-title');
        listTitle.textContent = 'All';
        for (let i = 0; i < getArr.length; i++) {
            taskElement(getArr[i].title, getArr[i].dueDate);
        }
    })
}


const todaysTasks = () => {
    clearFunction();

    const getArr = JSON.parse(localStorage.getItem('All'));
    const listTitle = document.getElementById('list-title');
    listTitle.textContent = 'Today';

    const filteredArray = getArr.filter(task => moment(task.dueDate).format('Do MMM YYYY') == moment().format('Do MMM YYYY'));
    console.log(filteredArray);

    for (let i = 0; i < filteredArray.length; i++) {
        taskElement(filteredArray[i].title, filteredArray[i].dueDate)
    }
}

const monthsTasks = () => {
    clearFunction();

    const getArr = JSON.parse(localStorage.getItem('All'));
    const listTitle = document.getElementById('list-title');
    listTitle.textContent = 'This Month';

    const todaysDate = new Date();
    
    const filteredArray = getArr.filter(task => moment(task.dueDate).format('MMM') == moment(todaysDate).format("MMM"));
    console.log(filteredArray);

    for (let i = 0; i < filteredArray.length; i++) {
        taskElement(filteredArray[i].title, filteredArray[i].dueDate)
    }
}


export { loadAllTasks, todaysTasks, monthsTasks }