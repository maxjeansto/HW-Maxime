var people = 4;
var david = 0;
var fName = "";
var eyes = false;

while (people != 0) {
    people--;
    fName = prompt("Quel est votre Nom");
    fName = fName.toLowerCase();
    eyes = confirm("Avez vous les yeux bleu ? ");
    if (fName === "david" && eyes === true) {
        david++;
    }
}
alert("There are " + david + " Davids with blue eyes in the room");