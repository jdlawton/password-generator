// Assignment code here


// Get references to the #generate element SELECTS THE BUTTON FROM THE HTML PAGE, VARIABLE IS USED IN THE LISTENER AT THE BOTTOM
var generateBtn = document.querySelector("#generate");

var passwordCriteria = {
  size: 0,
  lowercase: 0,
  uppercase: 0,
  numeric: 0,
  special: 0
}
console.log(passwordCriteria);
// PRIMARY FUNCTION THAT WILL BE CALLED WHEN THE BUTTON IS PUSHED, THIS WILL KICK OFF THE WHOLE PROCESS.
function writePassword() {

  // prompt user to determine password criteria
  criteriaPrompts ();

  //CALL A FUNCTION CALLED generatePassword
  var password = generatePassword();

  //THIS LINE QUERIES THE HTML DOCUMENT FOR THE ELEMENT /W ID=password, WHICH IS THE TEXT AREA WHERE THE GENERATED PASSWORD WILL BE DISPLAYED.
  var passwordText = document.querySelector("#password");
  //passwordText.value IS THE PART OF THE HTML ELEMENT THAT WILL HOLD THE TEXT. WHATEVER YOU ASSIGN TO IT WILL BE DISPLAYED ON THE HTML TEXT AREA.
  passwordText.value = password;


}

var generatePassword = function() {
  //var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  for (i = 0; i < passwordCriteria.size; i++){
    console.log(String.fromCharCode(97 + randomNumber(0, 25)));
  }
  return "password";
}

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
}

var criteriaPrompts = function() {
  passwordCriteria.size = window.prompt("How long should the password be? (8 - 128 characters)")
  //console.log(passwordCriteria.size);
  //Prompt for each type of characters to include and set the appropriate criteria to 1 if included.
  var lowercaseConfirm = window.confirm("Would you like to include lowercase letters?");
  if (lowercaseConfirm) {
    passwordCriteria.lowercase = 1;
  }
  var uppercaseConfirm = window.confirm("Would you like to include uppercase letters?");
  if (uppercaseConfirm) {
    passwordCriteria.uppercase = 1;
  }
  var numericConfirm = window.confirm("Would you like to include numbers?");
  if (numericConfirm) {
    passwordCriteria.numeric = 1;
  }
  var specialConfirm = window.confirm("Would you like to include special characters?");
  if (specialConfirm) {
    passwordCriteria.special = 1;
  }
  console.log(passwordCriteria);
}

// Add event listener to generate button (MAKES THE BUTTON ON THE HTML PAGE DO SOMETHING)
generateBtn.addEventListener("click", writePassword);
