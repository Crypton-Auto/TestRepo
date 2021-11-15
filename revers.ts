function strtoarr ()
{
    const str = readline.question("Input your string ");
    let arr = str.replace(/\s+/g, '').toLocaleLowerCase().split("");
    return arr;
}
const readline = require('readline-sync');

(function main ()
{   
    let cont = "y";
    let result = "";
    let end = true;
    while (cont == "y")
        {
        while (result.length <2)
            {
            result = strtoarr();
            if (result.length <2) 
                console.log("Need more symbols");
            }
        for (let j = 0; j<(result.length-1)/2; j++)
            if (result[j] != result[(result.length-1)-j])
                {
                    j = (result.length-1)/2;
                    end = true;
                }
        if (end)
            console.log("Not palindrome");
        else
            console.log("Palindrome");  
        end = false;
        while (!end)
            {
            cont = readline.question("Continue? y/n ");
            end = true;
            if (cont != "y" && cont != "n")
                {
                end = false;
                console.log("Only y or n \n");
                }
            } 
        }   
})();