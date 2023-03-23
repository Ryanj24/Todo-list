import '../styles/style.css'

const filters = () => {
    const taskFilters = document.createElement('div');
    taskFilters.classList.add('filters-div')

    const arr = ["Home", "Today", "Upcoming", "Past"];

    const iconsClasses = [['fa-solid', 'fa-house'], ['fa-solid', 'fa-calendar-day'], ['fa-solid', 'fa-calendar-days'], ['fa-solid', 'fa-calendar-xmark']]

    for (let i = 0; i < arr.length; i++) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('task-filter');
        const icon = document.createElement('i');
        icon.classList.add(`${iconsClasses[i][0]}`, `${iconsClasses[i][1]}`);
        itemDiv.appendChild(icon);

        const label = document.createElement('p');
        label.innerHTML = arr[i];
        itemDiv.appendChild(label);

        taskFilters.appendChild(itemDiv);
    }

    return taskFilters;
}

const lists = () => {

    const listsContainer = document.createElement('div');
    listsContainer.classList.add('lists-div');

    const listsHeader = document.createElement('h1');
    listsHeader.textContent = 'Lists';

    listsContainer.appendChild(listsHeader);

    return listsContainer;
}

export { filters, lists }