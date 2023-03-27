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
    
}


export { taskComplete }