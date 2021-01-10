// Assignment Code
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
generateBtn.addEventListener("click", writePassword);
