// Async function to fetch user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch the data from the API
        const response = await fetch(apiUrl);

        // Convert response to JSON
        const users = await response.json();

        // Clear the "Loading..." message
        dataContainer.innerHTML = "";

        // Create a <ul> to hold the users
        const userList = document.createElement("ul");

        // Loop through each user and create a <li>
        users.forEach(user => {
            const listItem = document.createElement("li");
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the list to the page
        dataContainer.appendChild(userList);

    } catch (error) {
        // Show error if something goes wrong
        dataContainer.innerHTML = "";
        dataContainer.textContent = "Failed to load user data.";
        console.error("Error fetching users:", error);
    }
}

// Run fetchUserData after the HTML is fully loaded
document.addEventListener("DOMContentLoaded", fetchUserData);
