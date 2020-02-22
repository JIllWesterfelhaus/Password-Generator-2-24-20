var generateBtn = document.querySelector("#generate");

var megaArray = []

var lowerCase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
var upperCase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var specialCharacters = ["`", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "|", "[", "]", ":", ";", ",", ".", "<", ">", "?", "/"]

var numberCharacters = prompt("How many characters do you want in your password?  It must be between 8 and 128 characters.");

//Stop here if less than 8 characters or more than 128 characters requested.//

var confirmLowerCase = confirm("Do you want lowercase letters in your password?");

var confirmUpperCase = confirm("Do you want uppercase letters in your password?");

var confirmNumbers = confirm("Do you want numbers in your password?");

var confirmSpecialCharacters = confirm("Do you want special characters in your password?");

//Stop here if no character types or numbers are requested.//

function generatePassword() {

    megaArray = []

    if (confirmLowerCase) {
        megaArray = megaArray.concat(lowerCase)
    }

    if (confirmUpperCase) {
        megaArray = megaArray.concat(upperCase)
    }

    if (confirmNumbers) {
        megaArray = megaArray.concat(numbers)
    }

    if (confirmSpecialCharacters) {
        megaArray = megaArray.concat(specialCharacters)
    }

    console.log(megaArray)
    var password = ""
    for (var i = 0; i < numberCharacters; i++) {
        password += Math.floor()
    }

    //write code here to generate password from what client wants.  Math random, math floor?//
}
generatePassword()

// Write password to the #password input//
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button//
generateBtn.addEventListener("click", writePassword);