// For Testing

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    // Sample hardcoded login credentials (for testing)
    const validEmail = 'user@example.com';
    const validPassword = 'password123';

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Check if the credentials match
        if (email === validEmail && password === validPassword) {
            alert('Login successful!');
            // Here you can redirect to another page or proceed further
        } else {
            errorMessage.style.display = 'block'; // Show error message
        }
    });
});
