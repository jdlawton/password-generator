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

//this function generates the new password based on the supplied criteria and appends each character to newPassword.
//once the password is built, it returns it.
var generatePassword = function() {
  var newPassword = "";
  for (i = 0; i < passwordCriteria.size; i++){
    var charType = randomNumber(1, 4);

    //compare tye new charType and if it is a type of character the user wants, generate a random character from that character set.
    if (charType === 1 && passwordCriteria.lowercase === 1) {
      newPassword += genLowercase();
      console.log(newPassword);
    }
    else if (charType === 2 && passwordCriteria.uppercase === 1) {
      newPassword += genUppercase();
      console.log(newPassword);
    }
    else if (charType === 3 && passwordCriteria.numeric === 1) {
      newPassword += genNumeric();
      console.log(newPassword);
    }
    else if (charType === 4 && passwordCriteria.special === 1) {
      newPassword += genSpecial();
      console.log(newPassword);
    }
    //if all else fails, decrement i to throw out this iteration through the loop and try again.
    else i--;
    
  }
  return newPassword;
}

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
}

//this function presents the user with a series of prompts to determine what criteria the password 
//should include. The criteria are stored in a global object to make it easier for all parts of the 
//program to access the criteria.
var criteriaPrompts = function() {
  
  while (passwordCriteria.size < 8 || passwordCriteria.size > 128) {
    passwordCriteria.size = window.prompt("How long should the password be? (8 - 128 characters)")
    if (passwordCriteria.size < 8 || passwordCriteria.size > 128) {
      window.alert ("Please enter a password size between 8 and 128 characters!");
    }
  }

  while (passwordCriteria.lowercase === 0 && passwordCriteria.uppercase === 0 && passwordCriteria.numeric === 0 && passwordCriteria.special === 0) {
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
    if (passwordCriteria.lowercase === 0 && passwordCriteria.uppercase === 0 && passwordCriteria.numeric === 0 && passwordCriteria.special === 0){
      window.alert ("You must choose at least one type of character to include in your password!");
    }
    console.log(passwordCriteria);
  }
}

//these functions generate a single character from the appropriate character set and return it.
//NOTE: I did not incldue all possible special characters to simplify the code for the challenge.
//The character sets are based on the ASCII table, I am assuming only standard english characters
//also no emoji's or anything else in Unicode.
var genLowercase = function() {
  return String.fromCharCode(97 + randomNumber(0, 25));
}

var genUppercase = function() {
  return String.fromCharCode(65 + randomNumber(0, 25));
}

var genNumeric = function() {
  return String.fromCharCode(49 + randomNumber(0, 8));
}

var genSpecial = function() {
  return String.fromCharCode(33 + randomNumber(0, 14));
}

// Add event listener to generate button (MAKES THE BUTTON ON THE HTML PAGE DO SOMETHING)
generateBtn.addEventListener("click", writePassword);
