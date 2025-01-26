document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed.");
});

const form = document.getElementById('registration-form');

// Prevent form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 

      // Validate username
      const usernameInput = document.getElementById('username');
      const usernameError = document.getElementById('usernameError');
      if (usernameInput.value.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters long.';
        return; 
    } 
        else {
        usernameError.textContent = '';
      }

      // Validate email
      const emailInput = document.getElementById('email');
      const emailError = document.getElementById('emailError');
      if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        return;
      } 
      else {
        emailError.textContent = '';
      }

      // Validate password
      const passwordInput = document.getElementById('password');
      const passwordError = document.getElementById('passwordError');
      if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        return;
      } else {
        passwordError.textContent = '';
      }

      // Validate age
      const ageInput = document.getElementById('age');
      const ageError = document.getElementById('ageError');
      if (ageInput.value < 18 || ageInput.value > 99) {
        ageError.textContent = 'Age must be between 18 and 99.';
        return;
      } else {
        ageError.textContent = '';
      }

      // If all validations pass, submit the form
      form.submit();
    });

//Feedback Display Logic:
const form-feedback = document.getElementById('form-feedback');
      const form-feedbackError = document.getElementById('form-feedback');
      if (form-feedbackInput.value.length < 3) {
        form-feedbackError.textContent = 'form-feedback must be at least 3 characters long.';
        return; 
    } 
        else {
        form-feedbackError.textContent = '';
      }

feedbackDiv  style.display to "block"
If isValid remains true, set the textContent of feedbackDiv to "Registration successful!" 
style.color to "#28a745".
If isValid is false, join messages with <br> to form a single string, and assign this to the 
  innerHTML of feedbackDiv. Set feedbackDiv.style.color to "#dc3545".
