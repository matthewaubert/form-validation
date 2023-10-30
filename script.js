// cache DOM
const form = document.querySelector('form');
const formFields = {
  email: form.querySelector('#email'),
  country: form.querySelector('#country'),
  zip: form.querySelector('#zip'),
  pwd: form.querySelector('#pwd'),
  pwdConfirm: form.querySelector('#pwd-confirm')
};

// add event listeners
for (const field in formFields) {
  formFields[field].addEventListener('onchange', checkInput);
}
// form.addEventListener('submit', checkSubmission);

// check if field input is valid; show or remove error message as appropriate
function checkInput() {
  // if field input is valid, remove error message
  // if still an error, show error
}

// show error next to invalid field
function showError(field) {
  // errorMsg obj
  const errorMsg = {
    email: '',
    country: '',
    zip: '',
    pwd: '',
    pwdConfirm: ''
  };

  // if field is empty, display error message
}