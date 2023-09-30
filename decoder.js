let fs = require('fs');
let inText;
let i = 0
let result = ''

inText = fs.readFileSync("code.txt");
inText = inText.toString();

while (i < inText.length){
    letter = inText.charAt(i)
    if (letter == '#') {
        result += inText[i + 2].repeat(inText[i + 1].charCodeAt(0))
        i += 3
    }
    else {
        result += letter
        i += 1
        }
    }	

console.log(result);
fs.writeFileSync('decode.txt', result);
