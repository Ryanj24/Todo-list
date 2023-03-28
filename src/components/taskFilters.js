import '../styles/style.css'
import { clearFunction } from './clearFunction.js'
import { taskElement } from './mainContentLogic.js';
import moment from 'moment';

/*
const todaysTasks = document.getElementById('dueToday');
    const monthTasks = document.getElementById('thisMonth');
    const pastTasks = document.getElementById('expired');
*/

/*
const loadAllTasks = () => {

    const allTasksDiv = document.getElementById('all-Tasks');

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
}*/


const allTasks = () => {
    clearFunction();

    if (!localStorage.getItem('All')) {
        const all = [];
        localStorage.setItem('All', JSON.stringify(all));
    }

    const getArr = JSON.parse(localStorage.getItem('All'));
    const listTitle = document.getElementById('list-title');
    listTitle.textContent = 'All';

    /*
    for (let i = 0; i < getArr.length; i++) {
        taskElement(getArr[i].title, getArr[i].dueDate);
    }*/

    for (let i = 0; i < getArr.length; i++) {
        taskElement(getArr[i].title, getArr[i].dueDate, getArr[i].complete);
    }
}

const todaysTasks = () => {
    clearFunction();

    const getArr = JSON.parse(localStorage.getItem('All'));
    const listTitle = document.getElementById('list-title');
    listTitle.textContent = 'Today';

    const filteredArray = getArr.filter(task => moment(task.dueDate).format('Do MMM YYYY') == moment().format('Do MMM YYYY'));
    console.log(filteredArray);

    for (let i = 0; i < filteredArray.length; i++) {
        taskElement(filteredArray[i].title, filteredArray[i].dueDate, filteredArray[i].complete);
    }
}

const monthsTasks = () => {
    clearFunction();

    const getArr = JSON.parse(localStorage.getItem('All'));
    const listTitle = document.getElementById('list-title');
    listTitle.textContent = 'This Month';

    const todaysDate = new Date();
    
    const filteredArray = getArr.filter(task => moment(task.dueDate).format('MMM YYYY') == moment(todaysDate).format("MMM YYYY"));
    console.log(filteredArray);

    for (let i = 0; i < filteredArray.length; i++) {
        taskElement(filteredArray[i].title, filteredArray[i].dueDate, filteredArray[i].complete);
    }
}

const yearsTasks = () => {
    clearFunction();

    const getArr = JSON.parse(localStorage.getItem('All'));
    const listTitle = document.getElementById('list-title');
    listTitle.textContent = 'This Year';

    const todaysDate = new Date();
    
    const filteredArray = getArr.filter(task => moment(task.dueDate).format('YYYY') == moment(todaysDate).format("YYYY"));
    console.log(filteredArray);

    for (let i = 0; i < filteredArray.length; i++) {
        taskElement(filteredArray[i].title, filteredArray[i].dueDate, filteredArray[i].complete);
    }
}


//export { loadAllTasks, allTasks, todaysTasks, monthsTasks, yearsTasks }
export { allTasks, todaysTasks, monthsTasks, yearsTasks }