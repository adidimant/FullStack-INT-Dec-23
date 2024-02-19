// Function to create a new reminder item
function createReminder() {
    const reminderContainer = document.getElementById('reminder-container');

    // Create elements
    const reminderItem = document.createElement('div');
    const reminderText = document.createElement('span');
    const deleteButton = document.createElement('button');
    const completeButton = document.createElement('button');

    // Set attributes and text content
    reminderItem.classList.add('reminder');
    reminderText.textContent = 'New Reminder';
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'X';
    completeButton.textContent = '✓';

    // Append elements
    reminderItem.appendChild(reminderText);
    reminderItem.appendChild(deleteButton);
    reminderItem.appendChild(completeButton);
    reminderContainer.appendChild(reminderItem);

    // Add event listener to delete button
    deleteButton.addEventListener('click', () => {
        reminderContainer.removeChild(reminderItem);
    });

    // Add event listener to complete button
    completeButton.addEventListener('click', () => {
        reminderText.classList.add('completed-task');
        completeButton.style.display = 'none';
    });

    // Random positioning
    const addButton = document.getElementById('add-reminder-btn');
    addButton.style.position = 'absolute';
    addButton.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
    addButton.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
}

// Add event listener to the Add Reminder button
document.getElementById('add-reminder-btn').addEventListener('click', createReminder);
