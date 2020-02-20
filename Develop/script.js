var generateBtn = document.querySelector("#generate");

var lowerCase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
var upperCase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var specialCharacters = ["`", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "|", "[", "]", ":", ";", ",", ".", "<", ">", "?", "/"]

prompt ("How many characters do you want in your password?")
var numberCharacters = prompt ("How many characters do you want in your password?");
if (numberCharacters) {
    alert ("You want " + numberCharacters + " characters in your password.")
}

var confirmLowerCase = confirm ("Do you want lowercase letters in your password?");
if (confirmLowerCase) {
    alert("You want lowercase letters in your password.") 
       else {
    alert("You don't want lowercase letters in your password.")
    }
  }



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