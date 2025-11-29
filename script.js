// 1️⃣ Ensure JS runs only after HTML is loaded
document.addEventListener("DOMContentLoaded", function() {

    // 2️⃣ Select the form
    const form = document.getElementById("registration-form");

    // 3️⃣ Select the feedback div
    const feedbackDiv = document.getElementById("form-feedback");

    // 4️⃣ Listen for form submission
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Stop form from submitting to server

        // 5️⃣ Get input values and remove extra spaces
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // 6️⃣ Validation setup
        let isValid = true;        // Tracks overall validation
        let messages = [];         // Stores all error messages

        // 7️⃣ Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // 8️⃣ Email validation
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // 9️⃣ Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // 🔟 Display feedback
        feedbackDiv.style.display = "block"; // Make it visible

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green
        } else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545"; // Red
        }

    });

});
