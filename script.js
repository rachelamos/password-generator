// Assignment Code
// Variables for each decision on what characters and how long to make the password... as well as what can be included within each "type" choice.
var generateBtn = document.querySelector("#generate");

var upper;
var lower;
var number;
var special;
var length;

var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "~!@#$%^&*(){}[]|<>?,./+=-_";
var numberChar = "1234567890";
var includedChar = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// Prompt user for length of password.
// Prompt user for types of characters to be chosen.
// Add types of selected characters together.
generateBtn.addEventListener("click", () => {
    promptLength();
    promptChar();
    includedChar = "";

    if (upper) {

    }
    if (lower) {

    }
    if (special) {

    }
    if (number) {

    }
    console.log();
    writePassword()
});

// Function to call the prompt for length.
// Alert if length is not between 8-128 characters long.

// Function to call the types of characters to be included.
// Alert if none of the types are chosen.

// Function to get random compilation of all variables chosen.

// Function to take random compilation and make it the length chosen by user.