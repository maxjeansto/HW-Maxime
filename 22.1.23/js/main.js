var appDiv = document.getElementById("main");
const user = { fullName: "Maxime Saada", email: "saadamaxime@gmail.com", pass: "topsecret1251" };


init()

function init() {
    var loginSection = document.createElement("section")
    var emailDiv = document.createElement("div")
    var emailLabel = document.createElement("label");
    emailLabel.innerText = `Enter your email`;
    var emailInput = document.createElement("input");
    emailLabel.append(emailInput);
    emailDiv.append(emailLabel);
    loginSection.append(emailDiv);
    appDiv.append(loginSection);

    var fnameDiv = document.createElement("div")
    var fnameLabel = document.createElement("label");
    fnameLabel.innerText = `Enter your Name`;
    var fnameInput = document.createElement("input");
    fnameLabel.append(fnameInput);
    fnameDiv.append(fnameLabel);
    loginSection.append(fnameDiv);
    appDiv.append(loginSection);
    fnameDiv.style.display = "none"

    var passDiv = document.createElement("div")
    var passLabel = document.createElement("label");
    passLabel.innerText = `enter your password`;
    var passInput = document.createElement("input");
    passLabel.append(passInput);
    passDiv.append(passLabel);
    loginSection.append(passDiv);
    appDiv.append(loginSection);
    passDiv.style.display = "none";

    var btnDiv = document.createElement("div");
    var btn = document.createElement("button");
    btn.innerText = `Login Please`
    btnDiv.append(btn);
    loginSection.append(btnDiv);
    appDiv.append(loginSection);

    emailInput.addEventListener("input", checkEmail);
    fnameInput.addEventListener("input", checkName);
    passInput.addEventListener("input", checkPass);
    btn.addEventListener("click", login);
    btn.style.display = "none";


    function checkEmail() {
        if (emailInput.value.includes("@") && emailInput.value.includes(".com")) {
            fnameDiv.style.display = "block";
        } else {
            fnameDiv.style.display = "none";
        }

    }

    function checkName() {
        if (fnameInput.value.length > 5) {
            passDiv.style.display = "block";
        } else {
            passDiv.style.display = "none";
        }

    }

    function checkPass() {
        if (fnameInput.value === user.fullName) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }

    }


    function login() {
        if (emailInput.value.toLowerCase().replaceAll(" ", "") === user.email && passInput.value === user.pass && fnameInput.value === user.fullName) {
            goToDashboard();
        } else {
            alert("Wrong Credential");
        }
    }
    function goToDashboard() {
        var section = document.createElement("section")
        var h1 = document.createElement("h1");
        h1.innerText = `Welcom, ${user.fullName}`;
        section.append(h1);
        loginSection.remove();
        appDiv.append(section);
    }

}

