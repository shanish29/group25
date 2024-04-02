
const signInform = document.querySelector('#signin-form')
const err_msg = document.querySelector('.err-msg')

const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')

const submitBtn = document.querySelector('.button')
const createAccountBtn = document.querySelector('.ovalButton')



const validEmail = (email) => {
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validEmail.test(email);
}


const validPassword = (password) => {
    if (password.length < 8) {
        return false;
    }
    for (let i = 0; i < password.length; i++) {
        if (password[i] === " ") {
            return false;
        }
    }
    return true;
}


const loginCustomer = (email, password) => {
    const customer = allCustomers.find(customer => customer.email === email);
    if (customer) {
        if (customer.password === password) {
            // Correct email and password, move to homePage
            err_msg.textContent = ''
            //clear fields
            emailInput.value = ''
            passwordInput.value = ''
            window.location.href = 'MyPets'

        } else {             // Incorrect password
            err_msg.textContent = 'Password is incorrect';
        }
    } else {         // Email not found
        err_msg.textContent = 'Email not found';
    }

};

 document.addEventListener('keydown', function(event) {
    if (event.shiftKey && event.key === 'P') {
        document.getElementById('popupMessage').style.display = 'block';
    }
});

    // Function to close the pop-up message
    function closePopup() {
        document.getElementById('popupMessage').style.display = 'none';
    }

    // form validation function
    function validateForm(event) {
        // Check if the login button was clicked
        if (event.submitter.classList.contains('button')) {
            // Perform validation

        }
    }
    // Function to show password
    function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}
var currentPage = window.location.href;

  // Function to remove the current page link from the navbar
  function hideCurrentPageLink() {
    console.log("Current Page:", currentPage);
    // Get all navbar links
    var navbarLinks = document.querySelectorAll('.navbar a');

    // Loop through each navbar link
    navbarLinks.forEach(function(link) {
      console.log("Navbar Link:", link.href);
      // Check if the link's href matches the current page URL
      if (link.href === currentPage) {
        // Remove the link from the navbar
        link.style.display = 'none';
        console.log("Link hidden:", link.href);
      }
    });
  }

  window.onload = hideCurrentPageLink;

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href = 'MyPets'
})

createAccountBtn.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href = 'CreateAccount'
})


src="../../../static/js/goToPage.js"
