// Get DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${taskText}
            <button class="delete-button">Delete</button>
        `;

        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";

        // Add an event listener to delete the task
        const deleteButton = listItem.querySelector(".delete-button");
        deleteButton.addEventListener("click", () => {
            listItem.remove();
        });
    }
}

// Add a task when the "Add" button is clicked
addTaskButton.addEventListener("click", addTask);

// Add a task when Enter key is pressed
taskInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
