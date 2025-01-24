document.addEventListener("DOMContentLoaded", function () {
    // Select form and feedback div
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    // Attach the submit event listener
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Retrieve input values
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validate inputs
        const { isValid, messages } = validateForm(username, email, password);

        // Display feedback
        displayFeedback(isValid, messages, feedbackDiv);
    });

    // Function to validate the form
    function validateForm(username, email, password) {
        let isValid = true;
        const messages = [];

        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email validation
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        return { isValid, messages };
    }

    // Function to display feedback
    function displayFeedback(isValid, messages, feedbackDiv) {
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green color for success
        } else {
            feedbackDiv.innerHTML = messages.join("<br>"); // Show all error messages
            feedbackDiv.style.color = "#dc3545"; // Red color for errors
        }
    }
});
