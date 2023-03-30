import '../styles/style.css'
import { clearFunction } from './clearFunction.js'
import { taskElement } from './mainContentLogic.js';
import moment from 'moment';


const allTasks = () => {
    clearFunction();

    if (!localStorage.getItem('All')) {
        const all = [];
        localStorage.setItem('All', JSON.stringify(all));
    }

    const getArr = JSON.parse(localStorage.getItem('All'));
    const listTitle = document.getElementById('list-title');
    listTitle.textContent = 'All';

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

    for (let i = 0; i < filteredArray.length; i++) {
        taskElement(filteredArray[i].title, filteredArray[i].dueDate, filteredArray[i].complete);
    }
}

export { allTasks, todaysTasks, monthsTasks, yearsTasks }