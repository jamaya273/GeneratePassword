// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {
  //initialize arrays with possible characters from Unicode tables
  var lowercase = [];
  j = -1;
  for (var i = 97; i <= 122; i++) {
    j++;
    lowercase[j] = String.fromCharCode(i);
  };

  var uppercase = [];
  j = -1;
  for (var i = 65; i <= 90; i++) {
    j++;
    uppercase[j] = String.fromCharCode(i);
  };

  var digits = [];
  j = -1;
  for (var i = 48; i <= 57; i++) {
    j++;
    digits[j] = String.fromCharCode(i);
  };

  var specialchars = [];
  j = -1;
  for (var i = 32; i <= 47; i++) {
    j++;
    specialchars[j] = String.fromCharCode(i);
  };
  for (var i = 58; i <= 64; i++) {
    j++;
    specialchars[j] = String.fromCharCode(i);
  };
  for (var i = 91; i <= 96; i++) {
    j++;
    specialchars[j] = String.fromCharCode(i);
  };



  // prompt password length

  var vExit = false;
  do {
    passLenght = prompt("Enter password lenght (8-128)");
    if (passLenght == null) {
      vExit = confirm("Password lenght must be (8 to 128), Do you want to exit?")
      if (vExit) { return "" };
    }
  }
  while ((passLenght < 8 || passLenght > 128) || passLenght == null)


  //prompt character types to include
  vExit = false;
  do {
    var confLw = confirm("Does password include lowercase characters?");
    var confUp = confirm("Does password include uppercase characters?");
    var confNm = confirm("Does password include numeric characters?");
    var confSp = confirm("Does password include special characters?");

    if ((confLw || confUp || confNm || confSp) != true) {
      {
        vExit = confirm("At least one character type must be selected, Do you want to exit?")
        if (vExit) { return "" };
      }
    }
  } while ((confLw || confUp || confNm || confSp) != true);


  var CharTypes = [confLw, confUp, confNm, confSp];
  var iteration = 0;
  do {
    var passString = "";
    var cl = 0;
    var cu = 0;
    var cn = 0;
    var cs = 0;
    //loop passLength times
    for (var i = 1; i <= passLenght; i++) {
      //Chose 1 of 4 character type
      var opType = false;
      var x = -1;

      do {
        x = Math.floor(Math.random() * Math.floor(4));
        opType = CharTypes[x];
      }
      while (opType != true)

      //Chose randomly one char type
      if (x == 0) {
        cl++;
        passString = passString + lowercase[Math.floor(Math.random() * Math.floor(lowercase.length - 1))];
      } else if (x == 1) {
        cu++;
        passString = passString + uppercase[Math.floor(Math.random() * Math.floor(uppercase.length - 1))];
      } else if (x == 2) {
        cn++;
        passString = passString + digits[Math.floor(Math.random() * Math.floor(digits.length - 1))];
      } else if (x == 3) {
        cs++;
        passString = passString + specialchars[Math.floor(Math.random() * Math.floor(specialchars.length - 1))];
      };
    };

    var validPassword = false;
    if (confLw && cl == 0) {
      validPassword = false;
    } else if (confUp && cu == 0) {
      validPassword = false;
    } else if (confNm && cn == 0) {
      validPassword = false;
    } else if (confSp && cs == 0) {
      validPassword = false;
    } else { validPassword = true };

    iteration++;

  } while (validPassword != true && iteration <= 100);

  return (passString);
}

