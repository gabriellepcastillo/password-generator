 // Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordCriteria = {
    length: "",
    lowercase: "",
    uppercase: "",
    numeric: "",
    symbol: "",
};

//Ask Criteria and length

var characterTypes = function () {
    passwordCriteria.lowercase = window.prompt("Would you like to include lowercase characters? Yes or No?");
    passwordCriteria.lowercase = passwordCriteria.lowercase.toLowerCase ();
    if (passwordCriteria.lowercase === "yes") {
        window.alert ("You have choosen to include lowercase characters.");
        passwordCriteria.lowercase = true
    }
    else if (passwordCriteria.lowercase === "no") {
        window.alert ("You have choosen not to include lowercase characters.")
        passwordCriteria.lowercase = false
    }
   
    passwordCriteria.uppercase = window.prompt("Would you like to include uppercase characters? Yes or No?");
    passwordCriteria.uppercase = passwordCriteria.uppercase.toLowerCase ();
    if (passwordCriteria.uppercase === "yes") {
        window.alert ("You have choosen to include uppercase characters.");
        passwordCriteria.uppercase = true
    }
    else if (passwordCriteria.uppercase === "no") {
        window.alert ("You have choosen not to include uppercase characters.")
        passwordCriteria.uppercase = false
    }

    passwordCriteria.numeric = window.prompt("Would you like to include numeric characters? Yes or No?");
    passwordCriteria.numeric = passwordCriteria.numeric.toLowerCase ();
    if (passwordCriteria.numeric === "yes") {
        window.alert ("You have choosen to include numeric characters.");
        passwordCriteria.numeric = true
    }
    else if (passwordCriteria.numeric === "no") {
        window.alert ("You have choosen not to include numeric characters.")
        passwordCriteria.numeric = false
    }

    passwordCriteria.symbol = window.prompt("Would you like to include symbol characters? Yes or No?");
    passwordCriteria.symbol = passwordCriteria.symbol.toLowerCase ();
    if (passwordCriteria.symbol === "yes") {
        window.alert ("You have choosen to include symbol characters.");
        passwordCriteria.symbol = true
    }
    else if (passwordCriteria.symbol === "no") {
        window.alert ("You have choosen not to include symbol characters.")
        passwordCriteria.symbol = false
    }
    window.alert("generating password.");
};

var generatePassword = function() {
    passwordCriteria.length < 8 || passwordCriteria.length >128 
    passwordCriteria.length = window.prompt("Choose the length of the password ( at least 8 characters and no more than 128 characters).")
    if (passwordCriteria.length <8 || passwordCriteria.length > 128){
        window.alert("Please enter valid length.");
    }
    else {
        window.alert("You have entered a length of " + passwordCriteria.length + ".");
    }
    
    characterTypes();
    window.alert("generating password.");

function makePassword () {
    var characters = "";
    if (passwordCriteria.lowercase === true) {
        characters = "abcdefghijklmnopqrstuvwxyz"
    }
    if (passwordCriteria.uppercase === true) {
        characters = characters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if (passwordCriteria.numeric === true) {
        characters = characters + "0123456789";
    }
    if (passwordCriteria.symbol === true) {
        characters = characters + "!@#$%^&*()-_=+<>/{]}{|~`"
    }
    var results = "";
    var length = passwordCriteria.length
    for (var i = 0, n = characters.length; i < length; i++) {
        results += characters.charAt(Math.floor(Math.random() * n));
    }
    window.alert("Your new password is" + results);
    return results;
}

    makePassword();
};
// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);