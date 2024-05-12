const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');
const addButton = document.getElementById('add-button');

addButton.addEventListener('click', function() {
  const newTask = newTaskInput.value.trim();
  if (newTask) {
    const listItem = document.createElement('li');
    listItem.classList.add('task-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
      listItem.classList.toggle('completed');
    });

    const taskLabel = document.createElement('label');
    taskLabel.innerText = newTask;

    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.addEventListener('click', function() {
      newTaskInput.value = newTask;
      taskList.removeChild(listItem);
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', function() {
      taskList.removeChild(listItem);
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(taskLabel);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
    newTaskInput.value = '';
  }
});
