document.addEventListener('DOMContentLoaded', () => {
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';  // API URL
        const dataContainer = document.getElementById('api-data');  // Container for the user data

        try {
            // Fetch the data from the API
            const response = await fetch(apiUrl);
            const users = await response.json();  // Parse the JSON response

            // Clear loading message and display the user data
            dataContainer.innerHTML = '';  // Clear "Loading..." message

            // Create an unordered list to display user names
            const userList = document.createElement('ul');

            // Loop through each user and append their name to the list
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;  // Set the user name as the text content
                userList.appendChild(listItem);  // Append the list item to the unordered list
            });

            // Append the user list to the container
            dataContainer.appendChild(userList);

        } catch (error) {
            // Handle errors in fetching data
            dataContainer.innerHTML = 'Failed to load user data.';  // Show an error message
        }
    }

    // Call the fetchUserData function when the DOM content is loaded
    fetchUserData();
});
