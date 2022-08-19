 // Assignment code here
 
 var generatePassword = function() {
    passwordPrompts.length < 8 || passwordPrompts.length >128 
    passwordPrompts.length = window.prompt("Choose the length of the password ( at least 8 characters and no more than 128 characters).")
    if (passwordPrompts.length < 8 || passwordPrompts.length > 128){
        window.alert("Please enter valid length that is between 8 and 128.");
    }
    else {
        window.alert("You have entered a length of " + passwordPrompts.length + ".");
    }
    characterTypes ();
    
    function makePassword () {
        var characters = "";
        if (passwordPrompts.symbol === true)  {
            characters = ("~","!","@","#","$","%","^","&","*","(",")","_","-","=","+","<",">",",",".","/","'","`","|")
        }
        if (passwordPrompts.numeric === true) {
            characters = ("0","1","2","3","4","5","6","7","8","9")
        }
        if (passwordPrompts.lowercase === true) {
            characters = ("a","b","c","e","d","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z")
        }
        if (passwordPrompts.uppercase === true) {
            characters = ("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z")
        }
    
        window.alert("Your password is " + result)
        
    }
    
makePassword();
};

var characterTypes = function () {
    passwordPrompts.lowercase = window.prompt("Would you like to include lowercase characters? Yes or No?");
    passwordPrompts.lowercase = passwordPrompts.lowercase.toLowerCase ();
    if (passwordPrompts.lowercase === "yes") {
        window.alert ("You have choosen to include lowercase characters.");
        passwordPrompts.lowercase = true
    }
    else if (passwordPrompts.lowercase === "no") {
        window.alert ("You have choosen not to include lowercase characters.")
        passwordPrompts.lowercase = false
    }
   
    passwordPrompts.uppercase = window.prompt("Would you like to include uppercase characters? Yes or No?");
    passwordPrompts.uppercase = passwordPrompts.uppercase.toLowerCase ();
    if (passwordPrompts.uppercase === "yes") {
        window.alert ("You have choosen to include uppercase characters.");
        passwordPrompts.uppercase = true
    }
    else if (passwordPrompts.uppercase === "no") {
        window.alert ("You have choosen not to include uppercase characters.")
        passwordPrompts.uppercase = false
    }

    passwordPrompts.numeric = window.prompt("Would you like to include numeric characters? Yes or No?");
    passwordPrompts.numeric = passwordPrompts.numeric.toLowerCase ();
    if (passwordPrompts.numeric === "yes") {
        window.alert ("You have choosen to include numeric characters.");
        passwordPrompts.numeric = true
    }
    else if (passwordPrompts.numeric === "no") {
        window.alert ("You have choosen not to include numeric characters.")
        passwordPrompts.numeric = false
    }

    passwordPrompts.symbol = window.prompt("Would you like to include symbol characters? Yes or No?");
    passwordPrompts.symbol = passwordPrompts.symbol.toLowerCase ();
    if (passwordPrompts.symbol === "yes") {
        window.alert ("You have choosen to include symbol characters.");
        passwordPrompts.symbol = true
    }
    else if (passwordPrompts.symbol === "no") {
        window.alert ("You have choosen not to include symbol characters.")
        passwordPrompts.symbol = false
    }
    window.alert("generating password.");
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var passwordPrompts = {
    lowercase: "",
    uppercase: "",
    numeric: "",
    symbol:"",
}
// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);