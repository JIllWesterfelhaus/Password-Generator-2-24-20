var generateBtn = document.querySelector("#generate");

var lowerCase = ["q", "w",]  //do I need spaces between array items? Yes//
var upperCase = []
var numbers = [1,2,3,4,5,6,7,8,9,0]
var specialCharacters = []

function generatePassword() { //write code here to generate password from what client wants//
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);