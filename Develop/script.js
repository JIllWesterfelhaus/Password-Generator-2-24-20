var generateBtn = document.querySelector("#generate");

var lowerCase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
var upperCase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var specialCharacters = ["`", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "|", "[", "]", ":", ";", ",", ".", "<", ">", "?", "/"]

prompt ("How many characters do you want in your password? It must be between 8 and 128 characters.")
var numberCharacters = prompt ("How many characters do you want in your password?  It must be between 8 and 128 characters.");
if (numberCharacters) {
    alert ("You want " + numberCharacters + " characters in your password.")
}

//Stop here if less than 8 characters or more than 128 characters requested.//

var confirmLowerCase = confirm ("Do you want lowercase letters in your password?");
if (confirmLowerCase) {
    alert("You want lowercase letters in your password.")}
    else {
        alert ("You do not want lowercase letters in your password.");
    }
    
var confirmUpperCase = confirm ("Do you want uppercase letters in your password?");
if (confirmUpperCase) {
    alert("You want uppercase letters in your password.")}
    else {
        alert ("You do not want uppercase letters in your password.");
     }   

var confirmNumbers = confirm ("Do you want numbers in your password?");
if (confirmNumbers) {
    alert("You want numbers in your password.")}
    else {
        alert ("You do not want numbers in your password.");
    } 

var confirmSpecialCharacters = confirm ("Do you want special characters in your password?");
if (confirmSpecialCharacters) {
    alert("You want special characters in your password.")}
    else {
        alert ("You do not want special characters in your password.");
    } 

//Stop here if no character types or numbers are requested.//

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