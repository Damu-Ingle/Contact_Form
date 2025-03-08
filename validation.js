
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");
    let messageError = document.getElementById("messageError");

    nameError.innerText = "";
    emailError.innerText = "";
    phoneError.innerText = "";
    messageError.innerText = "";

    if (name === "") {
        // alert('name is requied')
        nameError.innerText = "Name is required!";
        isValid = false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        emailError.innerText = "Email is required!";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        emailError.innerText = "Enter a valid email address!";
        isValid = false;
    }

    let phonePattern = /^[0-9]{10}$/;
    if (phone === "") {
        phoneError.innerText = "Phone number is required!";
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        phoneError.innerText = "Enter a valid phone number (10-15 digits)!";
        isValid = false;
    }

    if (message === "") {
        messageError.innerText = "Message cannot be empty!";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("contactForm").submit();
    }
});