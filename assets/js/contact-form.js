// --------FORM VALIDATION---------- // START

const form = document.getElementById('contactForm');
const small = document.getElementsByTagName('small')[0];
const fullName = document.getElementById('name');
const emailAddress = document.getElementById('email');
const message = document.getElementById('message');

function validateEmail(input) {
  const emailaddress = input.toString();
  let isLower = false;

  if (emailaddress === emailaddress.toLowerCase() && emailaddress !== '') {
    isLower = true;
  }
  return isLower;
}

form.addEventListener('submit', (event) => {
  if (validateEmail(emailAddress.value)) {
    event.preventDefault();
    small.textContent = '';
  } else {
    small.textContent = 'Please enter email address in small caps.';
    event.preventDefault();
  }
});

// --------FORM VALIDATION---------- // END

// --------LOCAL STORAGE---------- // START

const userData = {};
function saveData(userData) {
  const fullName = document.getElementById('name').value;
  const emailAddress = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  userData = {
    fullName,
    emailAddress,
    message,
  };
  localStorage.setItem('user', JSON.stringify(userData));
  let dataRecord = [];
  dataRecord = JSON.parse(localStorage.getItem('dataUser'));

  localStorage.setItem('dataUser', JSON.stringify(dataRecord));
}

form.addEventListener('change', () => {
  saveData(userData);
});

window.onload = () => {
  let savedFormData = localStorage.getItem('user');
  savedFormData = JSON.parse(savedFormData);
  // Check if the form data object is found on localStorage
  if (savedFormData) {
  // populate inputs values if data was found
    fullName.value = savedFormData.fullName;
    emailAddress.value = savedFormData.emailAddress;
    message.value = savedFormData.message;
  }
};
// --------LOCAL STORAGE---------- // END