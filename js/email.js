window.onload = function () {
    emailjs.init({
        publicKey: "GCq2XPeQ3w7StNkYx",
    });

    const inputs = ["firstname", "lastname", "email", "phone", "address", "occupation"];
    inputs.forEach(id => {
        document.getElementById(id).addEventListener("input", validateForm);
    });

    validateForm();


    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    emailInput.addEventListener('input', function () {
        if (emailInput.checkValidity()) {
            emailError.textContent = ''; // Clear error message
        } else {
            emailError.textContent = 'Please enter a valid email address.';
        }
    });

    const phoneInput = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');

    phoneInput.addEventListener('input', function () {
        if (phoneInput.value.length != 10) {
            phoneError.textContent = 'Please enter a valid Phone Number.';
        } else {
            phoneError.textContent = '';
        }
    });

    const firstnameInput = document.getElementById('firstname');
    const firstnameError = document.getElementById('firstnameError');

    firstnameInput.addEventListener('input', function () {
        if (firstnameInput.value.length == 1) {
            firstnameError.textContent = 'Please enter a valid First Name.';
        } else {
            firstnameError.textContent = '';
        }
    });

    const lastnameInput = document.getElementById('lastname');
    const lastnameError = document.getElementById('lastnameError');

    lastnameInput.addEventListener('input', function () {
        if (lastnameInput.value.length == 1) {
            lastnameError.textContent = 'Please enter a valid Last Name.';
        } else {
            lastnameError.textContent = '';
        }
    });

    const addressInput = document.getElementById('address');
    const addressError = document.getElementById('addressError');

    addressInput.addEventListener('input', function () {
        if (addressInput.value.length == 1) {
            addressError.textContent = 'Please enter a valid Address.';
        } else {
            addressError.textContent = '';
        }
    });

}

function sendEmail(event) {
    document.getElementById("submitBtn").disabled = true;
    //to avoid page load
    event.preventDefault();

    let params = {
        name: document.getElementById("firstname").value + ' ' + document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        gender: document.getElementById("occupation").value,
        phone: "+91" + document.getElementById("phone").value,
        address: document.getElementById("address").value,
        // attachment: document.getElementById("upload").value,
    };
    emailjs.send("service_1uqcyb8", "template_lalpomj", params).then(
        () => {
            alert("Email Sent Successfully!!!");
            clearForm();
            document.getElementById("submitBtn").disabled = true;
        },
        (error) => {
            clearForm();
            document.getElementById("submitBtn").disabled = true;

            console.log("Emailjs Error:" + error);
            alert("Email sending failed!");
        }
    );
}

function validateForm() {
    const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const occupation = document.getElementById("occupation").value.trim();

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPhone = /^\d{10}$/.test(phone);
    const isValidName = firstname.length > 1 && lastname.length > 1;
    const isValidAddress = address.length > 1;
    const isValidOccupation = occupation.length > 0;

    const isFormValid = isValidEmail && isValidPhone && isValidName && isValidAddress && isValidOccupation;

    document.getElementById("submitBtn").disabled = !isFormValid;
}

function clearForm() {
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("occupation").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
}