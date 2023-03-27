import '../styles/style.css'

const taskComplete = (e) => {
    
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

    console.log(clickedDiv.firstChild.firstChild)
    
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
    
    //console.log();
    console.log(currentList);
    
}


export { taskComplete, removeTask }