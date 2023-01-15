let fNames = [];
let results = [];
var succeed = "";

function moyenneSucceed(results) {
    var sum = 0;
    var nbr = 0;

    for (let i = 0; i < results.length; i++) {
        if (results[i] >= 70) {
            sum += results[i];
            nbr++;

        }

    }
    if (nbr >= 70) {
        return "Personne n'a eu la note de 70 ou plus";
    } else {
        return sum / nbr;
    }

}

function moyenneNotSucceed(results) {
    var sum = 0;
    var nbr = 0;

    for (let i = 0; i < results.length; i++) {
        if (results[i] < 70) {
            sum += results[i];
            nbr++;

        }

    }

    if (nbr === 0) {
        return "Personne n'a eu moins que 70";
    } else {
        return sum / nbr;
    }

}
for (let i = 0; i < 5; i++) {
    let fName = prompt("Please enter the name").toLowerCase();
    let result = parseInt(prompt("enter your result"));
    fNames.push(fName);
    results.push(result);
    if (result >= 70) {
        succeed += fNames[i] + " , ";
        console.log(succeed);

    }

}
console.log("Moyenne Succeed = " + moyenneSucceed(results));
console.log("Moyenne failed = " + moyenneNotSucceed(results));

