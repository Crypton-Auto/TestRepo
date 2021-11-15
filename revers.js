function strtoarr() {
    var str = readline.question("Input your string ");
    var arr = str.replace(/\s+/g, '').toLocaleLowerCase().split("");
    return arr;
}
var readline = require('readline-sync');
(function main() {
    var cont = "y";
    var result = "";
    var end = true;
    while (cont == "y") {
        while (result.length < 2) {
            result = strtoarr();
            if (result.length < 2)
                console.log("Need more symbols");
        }
        for (var j = 0; j < (result.length - 1) / 2; j++)
            if (result[j] != result[(result.length - 1) - j]) {
                j = (result.length - 1) / 2;
                end = true;
            }
        if (end)
            console.log("Not palindrome");
        else
            console.log("Palindrome");
        end = false;
        while (!end) {
            cont = readline.question("Continue? y/n ");
            end = true;
            if (cont != "y" && cont != "n") {
                end = false;
                console.log("Only y or n \n");
            }
        }
    }
})();
