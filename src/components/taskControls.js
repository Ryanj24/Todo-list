import '../styles/style.css'
import moment from 'moment';

const taskComplete = (e) => {
    
    
    const listTitle = document.getElementById('list-title').textContent;
    const allTasks = JSON.parse(localStorage.getItem('All'));
    const currentList = JSON.parse(localStorage.getItem(listTitle.toString()));
    const clickedDiv = e.parentNode.parentNode;

    if (listTitle === "Today") {
        const getArr = JSON.parse(localStorage.getItem('All'));
        const filteredArray = getArr.filter(task => moment(task.dueDate).format('Do MMM YYYY') == moment().format('Do MMM YYYY'));

        for (let i = 0; i < filteredArray.length; i++) {
            if (filteredArray[i].title === clickedDiv.firstChild.firstChild.textContent) {
                console.log(filteredArray[i].title);
                
            }
        }
    } /*else if (listTitle === "This Month") {

    } else if (listTitle === "This Year") {

    } else {

    }*/

    /*
    for (let i = 0; i < currentList.length; i++) {
        if (currentList[i].title === clickedDiv.firstChild.firstChild.textContent) {
            currentList[i].complete = true;
            localStorage.setItem(`${listTitle}`, JSON.stringify(currentList));
        }
    }

    for (let i = 0; i < allTasks.length; i++) {
        if (allTasks[i].title === clickedDiv.firstChild.firstChild.textContent) {
            allTasks[i].complete = true;
            localStorage.setItem('All', JSON.stringify(allTasks));
        }
    }*/


    const currentDiv = e.parentNode.parentNode.firstChild;
    if (currentDiv.firstChild.tagName == 'P') {
        const strikethrough = document.createElement('s');
        strikethrough.appendChild(e.parentNode.parentNode.firstChild.firstChild)
        currentDiv.insertBefore(strikethrough, e.parentNode.parentNode.firstChild.firstChild)
    }
}

const editTask = (e) => {
    ///
}

const removeTask = (e) => {
    const listTitle = document.getElementById('list-title').textContent;
    const allTasks = JSON.parse(localStorage.getItem('All'));
    const currentList = JSON.parse(localStorage.getItem(listTitle.toString()));
    const clickedDiv = e.parentNode.parentNode;

    //console.log(listTitle);
    //console.log(allTasks);
    //console.log(currentList);
    //console.log(clickedDiv.firstChild);
    //console.log(clickedDiv.firstChild.firstChild);
    
    
    for (let i = 0; i < currentList.length; i++) {
        if (currentList[i].title === clickedDiv.firstChild.firstChild.textContent) {
            currentList.splice(currentList[i], 1);
            localStorage.setItem(`${listTitle}`, JSON.stringify(currentList));
        }
    }

    for (let i = 0; i < allTasks.length; i++) {
        if (allTasks[i].title === clickedDiv.firstChild.firstChild.textContent) {
            allTasks.splice(allTasks[i], 1);
            localStorage.setItem('All', JSON.stringify(allTasks));
        }
    }
    clickedDiv.parentNode.removeChild(clickedDiv)

    
}


export { taskComplete, removeTask }