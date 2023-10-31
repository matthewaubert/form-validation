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
    // define error messages
    const errorMsg = {
      empty: 'You must enter an email',
      invalid: 'You must enter a valid email address',
    };
    // if field input is valid email address, remove error message
    if (this.validity.valid) {
      removeError(this);
    // if still an error, show error
    } else {
      showError(this, errorMsg.invalid);
    }
    // check if empty
    checkEmpty(this, errorMsg.empty);
  },
  country: function() {
    // define error messages
    const errorMsg = {
      empty: 'You must select a country',
      invalid: 'Valid country codes are: us, ch, fr, de, nl',
    };
    // check if one of 5 valid countries
    const validCountries = ['us', 'ch', 'fr', 'de', 'nl'];
    if (validCountries.includes(this.value)) {
      removeError(this);
    } else {
      showError(this, errorMsg.invalid);
    }
    // check if empty
    checkEmpty(this, errorMsg.empty);
  },
  zip: function() {
    // define error messages for each country
    const errorMsg = {
      empty: 'You must enter a ZIP code',
      invalid: '',
      us: 'U.S. ZIP codes must have exactly 5 digits',
      ch: 'Switzerland ZIP codes must have exactly 4 digits: e.g. CH-1950 or 1950',
      fr: 'France ZIP codes must have exactly 5 digits: e.g. F-75012 or 75012',
      de: 'Germany ZIP codes must have exactly 5 digits: e.g. D-12345 or 12345',
      nl: 'Netherland ZIP codes must have exactly 4 digits, followed by 2 letters except SA, SD and SS'
    };
    // define regex pattern for each country
    const constraints = {
      us: /^\d{5}$/,
      ch: /^(CH-)?\\d{4}$/,
      fr: /^(F-)?\\d{5}$/,
      de: /^(D-)?\\d{5}$/,
      nl: /^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$/
    };
    // check if matches regex pattern for its relevant country
    if (constraints[formFields.country.value].test(this.value)) {
      removeError(this);
    } else {
      showError(this, errorMsg[formFields.country.value]);
    }
    // check if empty
    checkEmpty(this, errorMsg.empty);
  },
  pwd: function() {
    // define error messages
    const errorMsg = {
      empty: 'You must enter a password',
      invalid: '',
    };
    // check if too short
    // check if too long
    // check if matches password regex
    // check if empty
    checkEmpty(this, errorMsg.empty);
  },
  confirm: function() {
    // define error messages
    const errorMsg = {
      empty: 'You must confirm your password',
      invalid: '',
    };
    // check if matches password input
    // check if empty
    checkEmpty(this, errorMsg.empty);
  }
};

// function to check if field is empty and show appropriate error message
function checkEmpty(field, errorMsg) {
  // console.log(errorMsg);
  // if field is empty, display error message
  if (field.validity.valueMissing) {
    showError(field, errorMsg);
  }
}

// function to display error message
function showError(field, errorMsg) {
  field.nextElementSibling.textContent = errorMsg;
}

function removeError(field) {
  field.nextElementSibling.textContent = ''; // reset content of message
}

// add event listeners
for (const field in formFields) {
  formFields[field].addEventListener('change', checkInput[field]);
}
// form.addEventListener('submit', checkSubmission);
