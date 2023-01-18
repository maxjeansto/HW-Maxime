function letters(str) {
    var word = {}
    var letter = str.split("");
    for (let i = 0; i < letter.length; i++) {
        if (word[letter[i]]) {
            word[letter[i]]++
        }
        else {
        word[letter[i]] = 1;
    }


    }
    //console.log(word);
return word;
}

var string = prompt("inserez votre mot").toLowerCase();
var result = letters(string);
console.log(result);
