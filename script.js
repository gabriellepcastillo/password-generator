 // Assignment code here
var characterTypes = function () {
    passwordPromts.lowercase = window.prompt("Would you like to include lowercase characters? Yes or No?");
    passwordPromts.lowercase = passwordPromts.lowercase.toLowerCase ();
    if (passwordPromts.lowercase === "yes") {
        window.alert ("You have choosen to include lowercase characters.");
        passwordPromts.lowercase = true
    }
    else if (passwordPromts.lowercase === "no") {
        window.alert ("You have choosen not to include lowercase characters.")
        passwordPromts.lowercase = false
    }
   
    passwordPromts.uppercase = window.prompt("Would you like to include uppercase characters? Yes or No?");
    passwordPromts.uppercase = passwordPromts.uppercase.toLowerCase ();
    if (passwordPromts.uppercase === "yes") {
        window.alert ("You have choosen to include uppercase characters.");
        passwordPromts.uppercase = true
    }
    else if (passwordPromts.uppercase === "no") {
        window.alert ("You have choosen not to include uppercase characters.")
        passwordPromts.uppercase = false
    }

    passwordPromts.numeric = window.prompt("Would you like to include numeric characters? Yes or No?");
    passwordPromts.numeric = passwordPromts.numeric.toLowerCase ();
    if (passwordPromts.numeric === "yes") {
        window.alert ("You have choosen to include numeric characters.");
        passwordPromts.numeric = true
    }
    else if (passwordPromts.numeric === "no") {
        window.alert ("You have choosen not to include numeric characters.")
        passwordPromts.numeric = false
    }

    passwordPromts.symbol = window.prompt("Would you like to include symbol characters? Yes or No?");
    passwordPromts.symbol = passwordPromts.symbol.toLowerCase ();
    if (passwordPromts.symbol === "yes") {
        window.alert ("You have choosen to include symbol characters.");
        passwordPromts.symbol = true
    }
    else if (passwordPromts.symbol === "no") {
        window.alert ("You have choosen not to include symbol characters.")
        passwordPromts.symbol = false
    }
    window.alert("generating password.");
};

var generatePassword = function() {
    passwordPromts.length < 8 || passwordPromts.length >128 
    passwordPromts.length = window.prompt("Choose the length of the password ( at least 8 characters and no more than 128 characters).")
    if (passwordPromts.length < 8 || passwordPromts.length > 128){
        window.alert("Please enter valid length that is between 8 and 128.");
    }
    else {
        window.alert("You have entered a length of " + passwordPromts.length + ".");
    }
    
    characterTypes();
    window.alert("generating password.");
function makePassword () {
    var characters = "";
    if (passwordPromts.lowercase === true) {
       return String.fromCharCode(97 + randomNumber (0, 26));
    }
    if (passwordPromts.uppercase === true) {
        return String.fromCharCode(65 + randomNumber (0, 26));
    }
    if (passwordPromts.numeric === true) {
        return String.fromCharCode(49 + randomNumber (0, 9));
    }
    if (passwordPromts.symbol === true) {
        return String.fromCharCode(33 + randomNumber (0, 14));
    }
    var results = "";
    var length = passwordPromts.length
    for (var i = 0, n = characters.length; i < length; i++) {
        results += characters.charAt(Math.floor(Math.random() * n));
    }
    window.alert("Your new password is" + results);
    return results;
}
makePassword();
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordPromts = {
    length: "",
    lowercase: "",
    uppercase: "",
    numeric: "",
    symbol: "",
};

//Ask Criteria and length

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);