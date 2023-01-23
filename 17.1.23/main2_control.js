function getLetters(str) {
    var voyelles = "aeiou";
    var consonnes = "bcdfghjklmnpqrstvwxz";
    var ArrayCons = [];
    var ArrayVoyelle = [];

    for (let i = 0; i < str.length; i++) {
        if (voyelles.indexOf(str[i]) !== -1) {
            ArrayVoyelle.push(str[i]);
        } else if (consonnes.indexOf(str[i]) !== -1) {
            ArrayCons.push(str[i]);

        }


    }
    console.log(ArrayCons);
    console.log(str);
    return [ArrayVoyelle.join(" , "), ArrayCons.join(" , ")];
}
function printResult(arr) {
    console.log("Votre chaîne contient les voyelles suivantes: " + arr[0] + " Et les consonnes suivantes: " + arr[1]);
  }


var form = prompt("Inserez votre nom ").toLowerCase();
var result = getLetters(form);
printResult(result);
