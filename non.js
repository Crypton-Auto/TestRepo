const readline = require('readline-sync');
let str=readline.question("Введите слово/фразу");
str = str.replace(/\s+/g, '');
let rts=str;
function reverseString(rts) {

    return rts.split("").reverse().join("");
  
  }
rts= reverseString(rts);

if (str == rts ) {
   console.log ("Это палиндром");
} else {console.log ("Это не палиндром")};



