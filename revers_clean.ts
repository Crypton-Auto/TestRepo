function strtoarr ()
{
    const str = readline.question("Input your string ");
    let arr = str.replace(/\s+/g, '').toLocaleLowerCase().split("");
    return arr;
}

const readline = require('readline-sync');

(function main ()
{   
    let result = strtoarr();
    let end = false;
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
})();