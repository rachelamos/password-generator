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
var min = 8;
var max = 128;

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
        includedChar += upperChar;
    }
    if (lower) {
        includedChar += lowerChar;
    }
    if (special) {
        includedChar += specialChar;
    }
    if (number) {
        includedChar += numberChar;
    }
    console.log(includedChar);
    writePassword()
});

// Function to call the prompt for length.
// Alert if length is not between 8-128 characters long.
// Alert if do not enter length - still needed.
function promptLength() {
    var pwLength = prompt("Please choose the length of your password.");
    if (parseInt(pwLength) < min || parseInt(pwLength)
    > max) {
        alert("Password length must be between " + min + " and " + max);
        promptLength();
    } else if (!pwlength) {
        alert("You must enter desired length of your password.");
        promptLength();
    } else length = pwLength
}

// Function to call the types of characters to be included.
// Alert if none of the types are chosen.
function promptChar() {
    upper = confirm("Include uppercase letters?");
    lower = confirm("Include lowercase letters?");
    special = confirm("Include special characters?");
    number = confirm("Include numbers?");

    if (!upper && !lower && !special && !number) {
        alert("You must include at least one type of character.");
        promptChar();
    }
}

// Function to get random compilation of all variables chosen.
function randomChar(grouping) {
    return grouping[Math.floor(Math.random() * grouping.length)];
}

// Function to take random compilation and make it the length chosen by user.
function generatePassword() {
    var randomPassword = "";

    for(var i=0; i< length; i++) {
        randomPassword += randomChar(includedChar);
    }
    return randomPassword;
}