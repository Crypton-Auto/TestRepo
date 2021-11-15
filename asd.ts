var str = "1 2345 asa 54 32 1"
str = str.toLocaleUpperCase();
str = str.replace(/\s+/g, '');
console.log( str);
var lol = str.split("");


var arr = lol.reverse();

console.log( arr );
var new_arr = arr.join("");
console.log( new_arr );



if (new_arr == str)  {
    console.log('polindron');
} 
else {
    console.log('hueta');
}