const codeInput = document.getElementById("codeInput");
const submitBtn = document.getElementById("submitBtn");
const keyboard = document.getElementById("keyboard");
const keyClass = "key";
const keys = [];
let targetCode = "";
let attempts = 3;
let Code = "";
let timeoutId;

// Creation du clavier
for (let i = 0; i < 9; i++) {
    const key = document.createElement("div");
    key.classList.add(keyClass);
    key.textContent = i + 1;
    keyboard.appendChild(key);
    keys.push(key);
}

// Afficher le clavier apres avoir rempli le input
submitBtn.addEventListener("click", function () {
    targetCode = codeInput.value;
    console.log(targetCode);
    codeInput.style.display = "none";
    submitBtn.style.display = "none";
    keyboard.style.display = "flex";
});


for (const key of keys) {
    key.addEventListener("click", () => {
        Code += key.textContent;
        console.log(Code);
        key.style.backgroundColor = "lightgray";
        clearTimeout(timeoutId);
        timeoutId = setTimeout(delay, 3000);
        if (Code.length === 4) {
            setTimeout((3000);() => {
                Code === targetCode ? (() => {console.log(targetCode); alert("Success"); resetAll();})() :
                    (attempts === 0 ? (() => {alert("La police arrive!"); resetAll();})() :
                        (() => {alert(`Code Incorrect. Vous avez encore ${attempts} essaies.`); reset(); attempts--; })());
                clearTimeout(timeoutId);});}});}


function delay() {
    Code = "";
    for (const key of keys) {
        key.style.backgroundColor = "";
    }
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
        Code = "";
    }, 3000);
    alert("Vous avez depasser le temps impartit")
}

function reset() {
    Code = "";
    for (const key of keys) {
        key.style.backgroundColor = "";
    }
}

function resetAll() {
    targetCode = "";
    Code = "";
    for (const key of keys) {
        key.style.backgroundColor = "";
    }
}