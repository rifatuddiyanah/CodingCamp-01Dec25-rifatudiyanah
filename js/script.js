/// Initial welcome message prompt
welcomeMessage();

/// Function to display welcome message
function welcomeMessage() {
    /// Prompt user for their name
    let userResponse = prompt("Sealamat datang di website PT. Perwira Husada! Masukkan nama anda:");

    /// If user cancels or inputs empty string, default to "Guest"
    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Tamu";
    }

    /// Display personalized welcome message on the webpage
    document.getElementById("welcome-speech").innerHTML = "Halo, " + userResponse + "! Selamat datang di Website PT Perwira Husada!";
}

/// Form validation function

function validateForm() { 
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields!");
        return;
    }

    // tampilkan hasil
    document.getElementById("result").classList.remove("hidden");
    document.getElementById("result-name").innerHTML = "Name: " + name;
    document.getElementById("result-email").innerHTML = "Email: " + email;
    document.getElementById("result-message").innerHTML = "Message: " + message;

    // optional: reset form
    document.querySelector("form").reset();
}