document.addEventListener("DOMContentLoaded", function () {
  // Get references to HTML elements by their IDs
  const inputField = document.getElementById("input");
  const insertButton = document.getElementById("button");
  const list = document.getElementById("list");
  const alertBox = document.getElementById("alert");

  // Initialize a counter to keep track of the inserted elements
  let counter = 0;

  // Add an event listener to the "Insert" button
  insertButton.addEventListener("click", function () {
    // Get the input value and trim any leading/trailing spaces
    const inputValue = inputField.value.trim();

    // Check if the input is empty or contains only spaces
    if (inputValue === "") {
      // Show the error alert
      alertBox.style.display = "block";
    } else {
      // Hide the error alert
      alertBox.style.display = "none";

      // Create a new list item element
      const listItem = document.createElement("li");

      // Set the text of the list item to the input value
      listItem.textContent = inputValue;

      // Reset the input field
      inputField.value = "";

      // Increment the counter
      counter++;

      // Check if the current element is the third element
      if (counter % 3 === 0) {
        // Apply red color to every third element
        listItem.style.color = "red";
      } else {
        // Apply black color to other elements
        listItem.style.color = "black";
      }

      // Append the list item to the list
      list.appendChild(listItem);
    }
  });
});
