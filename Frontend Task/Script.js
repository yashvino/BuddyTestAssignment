document.getElementById('registrationType').addEventListener('change', function() {
    var selectedOption = this.value;
    var numericInputContainer = document.getElementById('numericInputContainer');
    var presentationInputContainer = document.getElementById('presentationInputContainer');
    
    // Hide both additional input fields initially
    numericInputContainer.style.display = 'none';
    presentationInputContainer.style.display = 'none';
    
    // If "attendee" is selected, show the numeric input
    if (selectedOption === 'attendee') {
        numericInputContainer.style.display = 'block';
    }
    // If "speaker" is selected, show the presentation topic input
    else if (selectedOption === 'speaker') {
        presentationInputContainer.style.display = 'block';
    }
});

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get form values
    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;
    var registrationType = document.getElementById('registrationType').value;
    var numericInput = document.getElementById('numericInput').value;
    var presentationInput = document.getElementById('presentationInput').value;
    var agreeToTerms = document.getElementById('termsCheckbox').checked;
    
    // Validate the form before submission
    if (!name || !email || !registrationType || (registrationType === 'attendee' && !numericInput) || (registrationType === 'speaker' && !presentationInput) || !agreeToTerms) {
        // Display an error message if any required field is empty
        alert('Please fill out all required fields');
        return;
    }
    
    // Display submitted values
    var submittedValues = document.getElementById('submittedValues');
    submittedValues.innerHTML = `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Registration Type: ${registrationType}</p>
        <p>Number of Tickets: ${numericInput}</p>
        <p>Presentation Topic: ${presentationInput}</p>
        <p>Agree to Terms and Conditions: ${agreeToTerms ? 'Yes' : 'No'}</p>
    `;
    
    // Clear form fields
    document.getElementById('nameInput').value = '';
    document.getElementById('emailInput').value = '';
    document.getElementById('registrationType').value = '';
    document.getElementById('numericInput').value = '';
    document.getElementById('presentationInput').value = '';
    document.getElementById('termsCheckbox').checked = false;
});

