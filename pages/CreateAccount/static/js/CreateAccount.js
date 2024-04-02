const createAccountForm = document.querySelector("#create-account-form");
const err_msg = document.querySelector(".err-msg");
const backBtn = document.querySelector(".ovalButton")
const submitBtn = document.querySelector(".button")

const idInput = document.querySelector("#id");
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const cityInput = document.querySelector("#city");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");



        const goBack = () => {
            // Add your logic to go back
            alert("Going back");
        };

        const clearFields = () => {
            document.getElementById('id').value = '';
            document.getElementById('first-name').value = '';
            document.getElementById('last-name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('city').value = '';
            document.getElementById('password').value = '';
        };

        const onSubmit = (e) => {
            e.preventDefault();
            const id = document.getElementById('id').value;
            const firstName = document.getElementById('first-name').value;
            const lastName = document.getElementById('last-name').value;
            const email = document.getElementById('email').value;
            const city = document.getElementById('city').value;
            const password = document.getElementById('password').value;
            const idRegex = /^\d{9}$/;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const nameRegex = /^[A-Za-z]+$/;
            const passwordRegex = /^.{6,}$/;
            let isValid = true;

            if (!id || !firstName || !lastName || !email || !city || !password) {
                alert("Please fill in all fields.");
                isValid = false;
            }

            if (!id.match(idRegex)) {
                alert("ID must be 9 digits.");
                isValid = false;
            }

            if (!email.match(emailRegex)) {
                alert("Please enter a valid email address.");
                isValid = false;
            }

            if (!firstName.match(nameRegex)) {
                alert("First name must contain only letters.");
                isValid = false;
            }

            if (!lastName.match(nameRegex)) {
                alert("Last name must contain only letters.");
                isValid = false;
            }

            if (!password.match(passwordRegex)) {
                alert("password must contain at least 6 characters.");
                isValid = false;
            }

            if (isValid) {
                alert("Validation passed. Account created successfully.");
                clearFields();
            }

            if (isValid) {
                // Construct the customer object
                const customer = {
                    "id": id,
                    "firstName": firstName,
                    "lastName": lastName,
                    "email": email,
                    "city": city,
                    // Add more fields as needed
                };

            }
        }
                createAccountForm.addEventListener('submit', onSubmit);

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "MyPets";
});

backBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = "index";
});





