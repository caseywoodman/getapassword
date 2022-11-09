// global variables
// this is my database (numbers, special char, lowercase, uppercase)
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let special = ["!", "@", "#", "$", "%", "&", "(", ")"];
let password = [];

// Assignment Code
let generateBtn = document.querySelector("#generate");

// this funtion will generate the password and return
function generatePassword() {
  let allChoices = [];
  //ask user how long
  let passwordLength = window.prompt("Please choose a password length between 8 and 128");

  // ask user if they want numbers
  let isNumber = window.confirm("Do you want to include Numbers?");
  // ask user if they want uppercase
  let isUpper = window.confirm("Do you want to use Upper Case letters?");
  // ask user if they want lowercase
  let isLower = window.confirm("Do you want to include Lower Case Letters?");
  // ask user if they want special characters
  let isSpecial = window.confirm("Do you want to include Special Characters?");

  // Alerting if the number is too small or too big
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("please enter a number between 8 & 128");
    generatePassword();
  }

  // create a password using random numbers to the length chosen
  password = [];
  if (isNumber === true) {
    //Push all Numbers to allChoices Array
    allChoices = allChoices.concat(number);
    // Push 1 number onto the password
    let maximum = number.length;
    let rnd = Math.floor(Math.random() * maximum);
    password.push(number[rnd]);
    passwordLength--;
  }
  if (isUpper === true) {
    //Push all Upper to allChoices Array
    allChoices = allChoices.concat(upper);
    let maximum = upper.length;
    let rnd = Math.floor(Math.random() * maximum);
    password.push(upper[rnd]);
    passwordLength--;
  }
  if (isLower === true) {
    //Push all Lower to allChoices Array
    allChoices = allChoices.concat(lower);
    let maximum = lower.length;
    let rnd = Math.floor(Math.random() * maximum);
    password.push(lower[rnd]);
    passwordLength--;
  }
  if (isSpecial === true) {
    //Push all Special to allChoices Array
    allChoices = allChoices.concat(special);
    let maximum = special.length;
    let rnd = Math.floor(Math.random() * maximum);
    password.push(special[rnd]);
    passwordLength--;
  }

  // Loop to make random password
  for (let i = 0; i < passwordLength; i++) {
    let maximum = allChoices.length;
    let rnd = Math.floor(Math.random() * maximum);
    password.push(allChoices[rnd]);
  }
}

// Write password to the #password input
function writePassword() {
  generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
