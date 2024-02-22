const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');

signInForm.addEventListener('submit', signIn);
signUpForm.addEventListener('submit', signUp);

function signIn(event) {
  event.preventDefault();
  const signInEmail = document.getElementById('signInEmail').value;
  const signInPassword = document.getElementById('signInPassword').value;

  // Validation for empty fields
  if (!signInEmail) {
    alert('Please enter your email for sign in.');
    return;
  }

  if (!signInPassword) {
    alert('Please enter your password for sign in.');
    return;
  }
n
  console.log('Signing in...');
}

function signUp(event) {
  event.preventDefault();
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const username = document.getElementById('username').value;
  const signUpEmail = document.getElementById('signUpEmail').value;
  const dob = document.getElementById('dob').value;
  const gender = document.getElementById('gender').value;
  const signUpPassword = document.getElementById('signUpPassword').value;

  if (!firstName) {
    alert('Please enter your first name.');
    return;
  }

  if (!lastName) {
    alert('Please enter your last name.');
    return;
  }

  if (!username) {
    alert('Please enter a username.');
    return;
  }

  if (!signUpEmail) {
    alert('Please enter your email for sign up.');
    return;
  }

  if (!dob) {
    alert('Please enter your date of birth.');
    return;
  }

  if (!gender) {
    alert('Please select your gender.');
    return;
  }

  if (!signUpPassword) {
    alert('Please enter a password for sign up.');
    return;
  }

  const passwordRegex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  if (!passwordRegex.test(signUpPassword)) {
    alert('Password must contain at least 8 characters with at least one special character.');
    return;
  }
}
