function startPassword() {
    alert("Let's start your password!");
}

var generateBtn = document.querySelector("#generate");

var megaArray = []

var lowerCase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
var upperCase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var specialCharacters = ["`", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "|", "[", "]", ":", ";", ",", ".", "<", ">", "?", "/"]

var numberCharacters = prompt("How many characters do you want in your password?  It must be between 8 and 128 characters.");

var confirmLowerCase = confirm("Do you want lowercase letters in your password?");

var confirmUpperCase = confirm("Do you want uppercase letters in your password?");

var confirmNumbers = confirm("Do you want numbers in your password?");

var confirmSpecialCharacters = confirm("Do you want special characters in your password?");

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

    //if (promptNumberCharacters)=>8 {
       // writePassword
    //}  else  {
       // null
    //}

    console.log(megaArray)
    var password = ""
    for (var i = 0; i < numberCharacters; i++) {
        password += megaArray[Math.floor(Math.random() * megaArray.length)]
    }
    return password
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword)


