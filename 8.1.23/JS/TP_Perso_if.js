var age = false;
var size = 0;
age = confirm("Etes vous Majeur ?");
size = prompt("Tapez votre taille en cm");
if (size >= 150 && age !== "false") {

    alert("Vous avez la taille et l'age requis pour profiter du manege");
}

else {
    alert("Nous sommes désolés le manege est interdit au gens de moins d'1m50 et pas majeur");
}
