document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskDate = document.getElementById('task-date');
    const tasksContainer = document.getElementById('tasks-container');

    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        addTask(taskInput.value, taskDate.value);
        taskInput.value = '';
        taskDate.value = '';
    });

    function addTask(task, date) {
        if (task === '') return;

        const taskElement = document.createElement('div');
        taskElement.classList.add('task');

        taskElement.innerHTML = `
            <span>${task} - ${date}</span>
            <div class="actions">
                <i class="fas fa-pencil-alt edit"></i>
                <i class="fas fa-trash delete"></i>
                <i class="fas fa-check done"></i>
            </div>
        `;

        tasksContainer.appendChild(taskElement);

        const editBtn = taskElement.querySelector('.edit');
        const deleteBtn = taskElement.querySelector('.delete');
        const doneBtn = taskElement.querySelector('.done');

        editBtn.addEventListener('click', () => editTask(taskElement));
        deleteBtn.addEventListener('click', () => deleteTask(taskElement));
        doneBtn.addEventListener('click', () => toggleDone(taskElement));
    }

    function editTask(taskElement) {
        const taskText = taskElement.querySelector('span').textContent.split(' - ')[0];
        taskInput.value = taskText;
        taskDate.value = taskElement.querySelector('span').textContent.split(' - ')[1];
        tasksContainer.removeChild(taskElement);
    }

    function deleteTask(taskElement) {
        tasksContainer.removeChild(taskElement);
    }

    function toggleDone(taskElement) {
        taskElement.classList.toggle('done');
    }
});
