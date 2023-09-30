let fs = require('fs');
let inText;
let i = 0, count = 1, count_last= 1
let result = ''

inText = fs.readFileSync("output.txt");
inText = inText.toString();

	while (i < inText.length){
		while(inText.charAt(i) == inText.charAt(i+count))
		count++;
			letter = inText.charAt(i)
			count_last=count
			i += count;
			count  = 1;

			if (count_last > 3 || letter == '#') {
				for (let count_l = count_last; count_l > 0; count_l -= 255){
					if (count_last > 3 || letter == '#'){
						result += '#' + String.fromCharCode(Math.min(count_l, 255)) + letter}}
				}

			else result += letter.repeat(count_last)
		}	

console.log(result);
