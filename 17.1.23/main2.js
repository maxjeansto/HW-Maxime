function separateLetter(str) {
    var result = [];
    var letters = str.split('');

    for (let index = 0; index < letters.length; index++) {
        var letter = letters[index];
        var equal = false;
        for (let index2 = 0; index2 < result.length; index2++) {
            if (result[index2].lettre === letter) {
                equal = true;
                result[index2].count++
                break;
            }
        }
        if (equal === false) {
            result.push({ lettre: letter, count: 1 });

        }
    }

return result;
}

var string = prompt("inserez votre mot").toLowerCase();
var results = separateLetter(string);
console.log(results);
