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

      //OTHER EMAIL VALIDATE PATTERN
      function valid(email) {
    const input = document.createElement('input');
    input.type = 'email';
    input.value = email;
    return input.checkValidity();
}
console.log(valid("example@domain.com") ? "Valid email" : "Invalid email");

      // Validate password
      const passwordInput = document.getElementById('password');
      const passwordError = document.getElementById('passwordError');
      if (passwordInput.value.length < 8) {
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
const trim = document.getElementById('trim');
const push = document.getElementById('push');
feedbackDiv = ('feedbackDiv.innerHTML", "messages.join');
color = ('feedbackDiv.style.color');
("#dc3545");
<br>
  if ("Registration successful!", isValid is false');
