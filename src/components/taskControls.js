import '../styles/style.css'
import moment from 'moment';

const taskComplete = (e) => {
    
    
    const listTitle = document.getElementById('list-title').textContent;
    const getArr = JSON.parse(localStorage.getItem('All'));
    const clickedDiv = e.parentNode.parentNode;

    if (listTitle === "Today") {
    
        const filteredArray = getArr.filter(task => moment(task.dueDate).format('Do MMM YYYY') == moment().format('Do MMM YYYY'));

        for (let i = 0; i < filteredArray.length; i++) {
            if (filteredArray[i].title === clickedDiv.firstChild.firstChild.textContent) {
                for (let j = 0; j < getArr.length; j++) {
                    if (getArr[j].title === filteredArray[i].title) {
                        getArr[j].complete = true;
                        localStorage.setItem(`All`, JSON.stringify(getArr));
                    }
                }
            }
        }

       for (let i = 1; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const array = JSON.parse(localStorage.getItem(key));
            for (let j = 0; j < array.length; j++) {
                if (array[j].title === clickedDiv.firstChild.firstChild.textContent) {
                    array[j].complete = true;
                    localStorage.setItem(key, JSON.stringify(array));
                }
            }
       }

    } else if (listTitle === "This Month") {
        const todaysDate = new Date();
        const filteredArray = getArr.filter(task => moment(task.dueDate).format('MMM YYYY') == moment(todaysDate).format("MMM YYYY"));

        for (let i = 0; i < filteredArray.length; i++) {
            if (filteredArray[i].title === clickedDiv.firstChild.firstChild.textContent) {
                for (let j = 0; j < getArr.length; j++) {
                    if (getArr[j].title === filteredArray[i].title) {
                        getArr[j].complete = true;
                        localStorage.setItem(`All`, JSON.stringify(getArr));
                    }
                }
            }
        }

        for (let i = 1; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const array = JSON.parse(localStorage.getItem(key));
            for (let j = 0; j < array.length; j++) {
                if (array[j].title === clickedDiv.firstChild.firstChild.textContent) {
                    array[j].complete = true;
                    localStorage.setItem(key, JSON.stringify(array));
                }
            }
       }

    } else if (listTitle === "This Year") {
        const todaysDate = new Date();
        const filteredArray = getArr.filter(task => moment(task.dueDate).format('YYYY') == moment(todaysDate).format("YYYY"));

        for (let i = 0; i < filteredArray.length; i++) {
            if (filteredArray[i].title === clickedDiv.firstChild.firstChild.textContent) {
                for (let j = 0; j < getArr.length; j++) {
                    if (getArr[j].title === filteredArray[i].title) {
                        getArr[j].complete = true;
                        localStorage.setItem(`All`, JSON.stringify(getArr));
                    }
                }
            }
        }

        for (let i = 1; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const array = JSON.parse(localStorage.getItem(key));
            for (let j = 0; j < array.length; j++) {
                if (array[j].title === clickedDiv.firstChild.firstChild.textContent) {
                    array[j].complete = true;
                    localStorage.setItem(key, JSON.stringify(array));
                }
            }
       }

    } else {
        const currentList = JSON.parse(localStorage.getItem(listTitle.toString()));

        for (let i = 0; i < currentList.length; i++) {
            if (currentList[i].title === clickedDiv.firstChild.firstChild.textContent) {
                currentList[i].complete = true;
                localStorage.setItem(`${listTitle}`, JSON.stringify(currentList));
            }
        }
    
        for (let i = 0; i < getArr.length; i++) {
            if (getArr[i].title === clickedDiv.firstChild.firstChild.textContent) {
                getArr[i].complete = true;
                localStorage.setItem('All', JSON.stringify(getArr));
            }
        }

        for (let i = 1; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const array = JSON.parse(localStorage.getItem(key));
            for (let j = 0; j < array.length; j++) {
                if (array[j].title === clickedDiv.firstChild.firstChild.textContent) {
                    array[j].complete = true;
                    localStorage.setItem(key, JSON.stringify(array));
                }
            }
       }
    }



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
    const getArr = JSON.parse(localStorage.getItem('All'));
    const clickedDiv = e.parentNode.parentNode;
    const clickedTask = clickedDiv.firstChild.firstChild.textContent;
    
    for (let i = getArr.length - 1; i >= 0; i--) {
        if (getArr[i].title === clickedTask) {
            getArr.splice(i, 1);
            localStorage.setItem('All', JSON.stringify(getArr));
        }
    }

    for (let i = 1; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const array = JSON.parse(localStorage.getItem(key));
        for (let j = 0; j < array.length; j++) {
            if (array[j].title === clickedTask) {
                array.splice(j, 1);
                localStorage.setItem(key, JSON.stringify(array));
            }
        }
   }
    
   clickedDiv.parentNode.removeChild(clickedDiv);
}


export { taskComplete, removeTask }