// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(length) {
  var password = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890"();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
For(var i = 0; i  <  writePassword.length; i++)

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
