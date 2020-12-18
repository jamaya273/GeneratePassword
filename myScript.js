
function getPassword() {
//initialize arrays with possible characters from Unicode tables
  var lowercase = [];
  j=-1;
  for (var i=97; i<=122; i++) {
    j++;   
    lowercase[j] = String.fromCharCode(i);
  };

  var uppercase = [];
  j=-1;
  for (var i=65; i<=90; i++) {
    j++;   
    uppercase[j] = String.fromCharCode(i);
  };

  var digits = [];
  j=-1;
  for (var i=48; i<=57; i++) {
    j++;   
    digits[j] = String.fromCharCode(i);
  };

  var specialchars = [];
  j=-1;
  for (var i=32; i<=47; i++) {
    j++;   
    specialchars[j] = String.fromCharCode(i);
  };
  for (var i=58; i<=64; i++) {
    j++;   
    specialchars[j] = String.fromCharCode(i);
  };
  for (var i=91; i<=96; i++) {
    j++;   
    specialchars[j] = String.fromCharCode(i);
  };


// prompt password length
  
  var vExit=false;  
  do {
  passLenght=prompt("Enter password lenght (8-128)");
  if (passLenght == null) { vExit = confirm("Exit?")
        if (vExit) {return ""};
    }
  }
  while ((passLenght<8 || passLenght>128) || passLenght == null )

 
  //prompt character types to include
  var confLw=confirm("Password includes lowercase characters");
  var confUp=confirm("Password includes uppercase characters");
  var confNm=confirm("Password includes numeric characters");
  var confSp=confirm("Password includes special characters");
  
  if ((confLw || confUp || confNm ||confSp)  != true)
   return "";
  
   var CharTypes = [confLw,confUp,confNm,confSp];
   var iteration = 0;
   do {
   var passString = ""; 
   var cl=0; 
   var cu=0;
   var cn=0;
   var cs=0;
  //loop passLength times
   for (var i=1; i<=passLenght; i++) {
    //Chose 1 of 4 character type
    var opType=false;
    var x = -1;
 
    do {
        x=Math.floor(Math.random() * Math.floor(4));
        opType = CharTypes[x];
    }  
    while (opType!=true)

    //Chose 1 char from given type
    if (x==0) {
        cl++;
        passString = passString + lowercase[Math.floor(Math.random() * Math.floor(lowercase.length-1))];
    } else if(x==1){
        cu++;
        passString = passString + uppercase[Math.floor(Math.random() * Math.floor(uppercase.length-1))];
    } else if(x==2){
        cn++;
        passString = passString + digits[Math.floor(Math.random() * Math.floor(digits.length-1))];
    }else if(x==3){
        cs++;
        passString = passString + specialchars[Math.floor(Math.random() * Math.floor(specialchars.length-1))];
    }

    ;

    }
    
    var validPassword = false;
    if (confLw && cl==0) {
        validPassword = false; 
    } else if (confUp && cu==0) {
        validPassword = false;
    } else if (confNm && cn==0) {
        validPassword = false;
    } else if (confSp && cs==0) {
        validPassword = false;
    } else {validPassword = true};
   
    // alert(validPassword);
    iteration++;
    
} while (validPassword!=true && iteration<=100);

    document.getElementById("generatedPassword").innerHTML = passString ;
} 
