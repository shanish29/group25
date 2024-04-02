const petInfoForm = document.querySelector('#add-pet-form')
const err_msg = document.querySelector('.err-msg')
const backBtn = document.querySelector('.ovalbutton')
const addPetBtn = document.querySelector('.button')

const NameInput = document.querySelector('#name')
const ageInput = document.querySelector('#age')
const animalTypeInput = document.querySelector('#animalType')
const breedInput = document.querySelector('#breed')
const chipInput = document.querySelector('#chip')
const allergiesInput = document.querySelector('#allergies')


        const clearFields = () => {
            document.getElementById('name').value = '';
            document.getElementById('age').value = '';
            document.getElementById('animal-type').value = '';
            document.getElementById('breed').value = '';
            document.getElementById('chip').value = '';
            document.getElementById('allergies').value = '';
        };

        const validateAnimalType = () => {
            const animalTypeInput = document.getElementById('animal-type');
            const animalTypesList = document.getElementById('animal-types');
            const isValidAnimalType = Array.from(animalTypesList.options).some(option => option.value === animalTypeInput.value);

            if (!isValidAnimalType) {
                alert('Please select a valid animal type from the list.');
                animalTypeInput.value = '';
            }

            // Call the validateBreedLookup function when the animal type is changed
            validateBreedLookup();
        };

        const validateAddPetForm = () => {
            const nameInput = document.getElementById('name');
            const ageInput = document.getElementById('age');
            const animalTypeInput = document.getElementById('animal-type');
            const breedInput = document.getElementById('breed');
            const chipInput = document.getElementById('chip');
            const allergiesInput = document.getElementById('allergies');


            if (!nameInput.value.match(/^[A-Za-z]+$/)) {
                alert('Name must contain only letters.');
                return false;
            }

            const age = parseInt(ageInput.value);
            if (isNaN(age) || age < 0 || age > 120) {
                alert('Age must be between 0 and 120.');
                return false;
            }

            validateAnimalType();
            alert('Validation passed. Pet added successfully.');
            clearFields();

            return false;
        };

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

  petInfoForm.addEventListener('submit', onSubmit)


backBtn.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href = 'MyPets'
})

    addPetBtn.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href = 'MyPets'
})

//calling Function 1- matches a breed lookup table to the animal type chosen

validateBreedLookup();

