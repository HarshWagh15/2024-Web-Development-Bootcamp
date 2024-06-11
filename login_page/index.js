function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");

    // Perform a fetch request to the Node.js server for authentication
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Successful login
            errorMessage.innerText = "Login successful!";
            errorMessage.style.color = "green";
            // Redirect or change the UI as needed
        } else {
            // Failed login
            errorMessage.innerText = "Invalid username or password. Please try again.";
            errorMessage.style.color = "red";
        }
    })
    .catch(error => {
        console.error('Error:', error);
        errorMessage.innerText = "An error occurred. Please try again later.";
        errorMessage.style.color = "red";
    });
}
