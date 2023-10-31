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

    // if not a valid email address, show error
    if (this.validity.typeMismatch) {
      showError(this, errorMsg.invalid);
    // if field input is valid email address, remove error message
    } else {
      removeError(this);
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
      tooShort: 'Password must be at least 8 characters',
      tooLong: 'Password must be no more than 32 characters',
      patternMismatch: 'Password must contain at least 1 digit, 1 lowercase character, 1 uppercase character, 1 special character, and your firstborn child',
    };
    const constraint = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[.;:!@#$%^&*_=+-]).{8,32}$/;

    // console.log(this.value);
    // check if too short
    if (this.validity.tooShort) {
      showError(this, errorMsg.tooShort);
    // check if too long
    } else if (this.validity.tooLong) {
      showError(this, errorMsg.tooLong);
    // check if matches password regex
    } else if (!constraint.test(this.value)) {
      showError(this, errorMsg.patternMismatch);
    // else it's valid
    } else {
      removeError(this);
    }

    // check if empty
    checkEmpty(this, errorMsg.empty);
  },
  confirm: function() {
    // define error messages
    const errorMsg = {
      empty: 'You must confirm your password',
      invalid: 'Passwords do not match',
    };

    // check if matches password input
    if (this.value === pwd.value) {
      removeError(this);
    } else {
      showError(this, errorMsg.invalid);
    }

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
  field.setCustomValidity(errorMsg);
}

// reset content of error message
function removeError(field) {
  field.nextElementSibling.textContent = '';
  field.setCustomValidity('');
}

// function to validate fields before allowing submission
function checkSubmission(e) {
  // prevent form submission
  e.preventDefault();
  let fieldsAreValid = true;
  // iterate over fields
  for (const field in formFields) {
    // console.log(formFields[field].validity.valid);
    // if invalid
    if (!formFields[field].validity.valid) {
      // display error message
      checkInput[field].call(formFields[field]);
      fieldsAreValid = false;
    }
  }
  
  // if all fields are valid, give high five
  if (fieldsAreValid) giveHighFive();
}

function giveHighFive() {
  alert('High five!');
}

// add event listeners
for (const field in formFields) {
  formFields[field].addEventListener('change', checkInput[field]);
}
form.addEventListener('submit', checkSubmission);
