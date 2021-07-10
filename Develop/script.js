// Assignment code here
// Create 4 array to hold each characater
/* upper case
lower case
numbers
special character
*/
/*prompt user 4 conditions
check numbers
prevent 8-128 */

                                                  
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
