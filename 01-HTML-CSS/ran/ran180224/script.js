// Function to reset background image
function resetBackgroundImage() {
    const backgroundImage = document.getElementById('background-image');
    backgroundImage.style.backgroundImage = `url('your-image.jpg')`; // Set background image
}

// Function to reload background image
function reloadBackgroundImage() {
    const backgroundImage = document.getElementById('background-image');
    backgroundImage.style.backgroundImage = `url('reminder.jpg')`;
}

// Function to create a new reminder item
function createReminder() {
    const reminderContainer = document.getElementById('reminder-container');
    const reminderInput = document.getElementById('reminder-input');

    if (reminderInput.value.trim() !== '') {
        const reminderItem = document.createElement('div');
        const reminderText = document.createElement('span');
        const deleteButton = document.createElement('button');
        
        reminderItem.classList.add('reminder');
        reminderText.textContent = reminderInput.value.trim();
        reminderItem.style.order = Math.floor(Math.random() * 100); // Randomize order
        reminderText.style.order = -1; // Move user input text to the end
        deleteButton.textContent = '❌';

        deleteButton.addEventListener('click', () => {
            reminderContainer.removeChild(reminderItem);
        });

        reminderItem.appendChild(reminderText);
        reminderItem.appendChild(deleteButton);
        reminderContainer.appendChild(reminderItem);

        reminderInput.value = '';
    }
}

// Add event listener to the Add Reminder button
document.getElementById('add-reminder-btn').addEventListener('click', () => {
    createReminder();
    reloadBackgroundImage();
});

// Add event listener to the reminder input to show placeholder text
const reminderInput = document.getElementById('reminder-input');
reminderInput.addEventListener('input', () => {
    const placeholderText = 'Enter your reminder';
    if (reminderInput.value.trim() === '') {
        reminderInput.setAttribute('placeholder', placeholderText);
    } else {
        reminderInput.removeAttribute('placeholder');
    }
});
