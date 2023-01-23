function voyeles(str) {
    var Voyelesltr = "aeiou";
    var Consonnesltr = "bcdfghjklmnpqrstvwxz";
    var ArrayVoyeles = [];
    var ArrayConsomme = [];

    for (let i = 0; i < str.length; i++) {
        if (Voyelesltr.indexOf(str[i]) !== -1) {
            ArrayVoyeles.push(str[i]);
        } else if (Consonnesltr.indexOf(str[i]) !== -1) {
            ArrayConsomme.push(str[i]);
        }

    }
    ArrayVoyeles.sort();
    console.log(ArrayVoyeles);
    ArrayConsomme.sort();
    console.log(ArrayConsomme);
    
    return [ArrayVoyeles.join(" , "), ArrayConsomme.join(" , ")];
}


function printResult(arr) {
  console.log("Votre chaîne contient les voyelles suivantes: " + arr[0] + " Et les consonnes suivantes: " + arr[1]);
}

var string = prompt("Entrez votre nom").toLowerCase();
var result = voyeles(string);
printResult(result);


