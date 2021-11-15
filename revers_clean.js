function strtoarr() {
    var str = readline.question("Input your string ");
    var arr = str.replace(/\s+/g, '').toLocaleLowerCase().split("");
    return arr;
}
var readline = require('readline-sync');
(function main() {
    var result = strtoarr();
    var end = false;
    for (var j = 0; j < (result.length - 1) / 2; j++)
        if (result[j] != result[(result.length - 1) - j]) {
            j = (result.length - 1) / 2;
            end = true;
        }
    if (end)
        console.log("Not palindrome");
    else
        console.log("Palindrome");
})();
