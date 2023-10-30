# Form Validation With JavaScript

This project was built as part of The Odin Project: JavaScript course in order to practice what I've learned about form validation using JavaScript.

## Understand the Problem

Build a browser form which collects Email, Country, Zip Code, Password, and Password Confirmation fields. I'll need to use live inline validation to inform the user whether a field is properly filled in or not.

The form will not actually submit, but will give an error message if the user attempts to submit with any invalid or unfilled required fields. All validation will occur in the JavaScript. If the form is properly "submitted", the user will receive a "high-five".

## Plan

1. Set up blank HTML doc

1. Consider how to set up the different form elements and their accompanying validators
   - What fields will I need?
     - email - input: email
     - country - select w/ options
     - zip code - input: text
     - password - input: password
     - password confirm - input: password
   - What functions will I need?
     - checkInput: check if field input is valid; show or remove error message as appropriate
     - showError: show error message next to invalid field
     - checkSubmission: check if all fields are valid - if so, give user high-five; if not, show error
   - What objects will I need?
     - errorMessage obj correlating field with its appropriate message

1. Write simple form elements

1. Write JavaScript code that checks validation. _When a user leaves a form field, it should automatically validate that field._

1. Test out all possible cases

1. Style validations with CSS using the :valid and :invalid pseudo-classes