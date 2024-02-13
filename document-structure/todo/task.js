const form = document.getElementById("tasks__form");
const button = document.getElementById("tasks__add");

button.addEventListener('click', submit);

function removeTask(event) {
    event.preventDefault();
    const targetTask = event.target.parentElement;
    targetTask.remove();
}

function submit(event) {
    event.preventDefault();
    const task = document.getElementsByTagName("input");
    const taskList = document.getElementById("tasks__list");
    const trimmedStr = task[0].value.trim();
    if (trimmedStr.length > 0) {
        taskList.insertAdjacentHTML("beforeEnd", "<div class='task'><div class='task__title'></div><a href='#' class='task__remove'>&times;</a></div>");
        const taskTitle = document.getElementsByClassName("task__title");
        taskTitle[taskTitle.length - 1].innerText = task[0].value;
        const deleteButton = document.getElementsByClassName("task__remove");
        deleteButton[taskTitle.length - 1].addEventListener("click", removeTask);
        form.reset();
    }
}
