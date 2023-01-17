function DotEmail(email) {
    let correctEmail = email.toLowerCase();
    if (correctEmail.includes("@gmail.com")) {
        correctEmail = correctEmail.split("@")[0].replace(/\./g, "") + "@gmail.com"
        return correctEmail;
    }

    else {
        return ("Votre mail doit etre un gmail");
    }
}
var email = prompt("tapez votre adresse mail");
console.log(DotEmail(email));