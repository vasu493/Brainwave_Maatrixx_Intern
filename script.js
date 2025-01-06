function addTask() {
    const taskInput = document.getElementById('todo-input');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;
    
    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(deleteBtn);
    li.onclick = function() {
        li.classList.toggle('completed');
    };

    document.getElementById('todo-list').appendChild(li);
    taskInput.value = '';  // Clear input after adding task
}
