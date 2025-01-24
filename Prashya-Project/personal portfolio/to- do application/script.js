// script.js

// Select elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Function to create a new task
function createTask(taskText) {
    // Create a list item for the task
    const li = document.createElement("li");

    // Create the task text
    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;
    li.appendChild(taskContent);

    // Create the 'Complete' button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.classList.add("complete-btn");
    completeBtn.addEventListener("click", () => {
        li.classList.toggle("completed");
    });
    li.appendChild(completeBtn);

    // Create the 'Delete' button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });
    li.appendChild(deleteBtn);

    // Append the new task to the task list
    taskList.appendChild(li);
}

// Add task when the 'Add Task' button is clicked
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        createTask(taskText);
        taskInput.value = ""; // Clear the input
    }
});

// Allow pressing Enter to add a task
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            createTask(taskText);
            taskInput.value = ""; // Clear the input
        }
    }
});
