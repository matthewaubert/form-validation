// cache DOM
const form = document.querySelector('form');
const formFields = {
  email: form.querySelector('#email'),
  country: form.querySelector('#country'),
  zip: form.querySelector('#zip'),
  pwd: form.querySelector('#pwd'),
  confirm: form.querySelector('#confirm')
};

// functions to check each form field
const checkInput = {
  email: function() {
    // check if valid email address
    // if field input is valid, remove error message
    if (this.validity.valid) {
      resetError(this);
    // if still an error, show error
    } else {
      showError(this);
    }
    // check if empty
    checkEmpty(this);
  },
  country: function() {
    // check if one of 5 valid countries
    // check if empty
    checkEmpty(this);
  },
  zip: function() {
    // for each country, define regex pattern
    const constraints = {
      us: 'd{5}$',
      ch: '^(CH-)?\\d{4}$',
      fr: '^(F-)?\\d{5}$',
      de: '^(D-)?\\d{5}$',
      nl: '^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$'
    };
    // for each country, define errorMsg
    const errorMsg = {
      us: 'U.S. ZIP codes must have exactly 5 digits',
      ch: 'Switzerland ZIP codes must have exactly 4 digits: e.g. CH-1950 or 1950',
      fr: 'France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012',
      de: 'Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345',
      nl: 'Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS'
    };
    // check if matches regex pattern for its relevant country
    // check if empty
    checkEmpty(this);
  },
  pwd: function() {
    // check if matches password regex
    // check if too short
    // check if too long
    // check if empty
    checkEmpty(this);
  },
  confirm: function() {
    // check if matches password input
    // check if empty
    checkEmpty(this);
  }
};

// function to check if field is empty and show appropriate error message
function checkEmpty(field) {
  // errorMsg obj
  const errorMsg = {
    email: 'enter an email',
    country: 'select a country',
    zip: 'enter a ZIP code',
    pwd: 'enter a password',
    confirm: 'confirm your password'
  };
  
  // if field is empty, display error message
  if (field.validity.valueMissing) {
    field.nextElementSibling.textContent = `You must ${errorMsg[field.id]}.`;
  }
}

function resetError(field) {
  field.nextElementSibling.textContent = ''; // reset content of message
}

// add event listeners
for (const field in formFields) {
  formFields[field].addEventListener('change', checkInput[field]);
}
// form.addEventListener('submit', checkSubmission);
