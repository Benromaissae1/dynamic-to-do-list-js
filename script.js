document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("enter a task");
            return;
        }

        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        // إنشاء زر الحذف (لاحظ استخدام 'button' كسلسلة نصية)
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remove';
        deleteButton.className = 'remove-btn';

        deleteButton.onclick = function () {
            taskList.removeChild(listItem);
        };

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = '';
    }

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});