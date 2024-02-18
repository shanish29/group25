
// Function to check if appointment time has passed
function isPastAppointment(dateString) {
    const appointmentDate = new Date(dateString);
    const currentDate = new Date();
    return appointmentDate < currentDate;
}

// Function to display past appointments in a table
function displayPastAppointments() {
    const tableBody = document.getElementById('appointments-table');
    const rows = tableBody.querySelectorAll('tr');

    rows.forEach(row => {
        const appointmentDate = new Date(row.cells[2].textContent);
        if (isPastAppointment(appointmentDate)) {
            row.classList.add('appointment-past');
        }
    });
}

// Function to color rows based on appointment date
function colorRowsBasedOnAppointmentDate() {
    const rows = document.querySelectorAll('#appointments-table tr');
    const today = new Date();

    rows.forEach(row => {
        const appointmentDate = new Date(row.cells[2].textContent);
        const differenceInDays = Math.floor((appointmentDate - today) / (1000 * 60 * 60 * 24));

        if (differenceInDays < 0) {
            row.classList.add('appointment-past');
        } else if (differenceInDays >= 0) {
            row.classList.add('appointment-upcoming');
        }
    });
}

// Function to continuously update appointment colors
function updateAppointmentColors() {
    displayPastAppointments();
    colorRowsBasedOnAppointmentDate();
}