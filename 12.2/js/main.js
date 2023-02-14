var users = [
  {
    email: "saadamaxime@gmail.com",
    passwd: "Topsecret1245",
  },
];

createForm_signup();

function createForm_signup() {
  var main = document.getElementById("form-container");
  var SignupForm = document.createElement("div");
  SignupForm.className = "signup-form";
  var h1 = document.createElement("h1");
  h1.innerText = "Inscription";
  var form = document.createElement("form");
  var eMail = myInput("email", "email", "Adresse e-mail");
  var Pswd = myInput("password", "password", "Mot de passe");
  var btn = myButton("submit", `S'inscrire`, addUser);
  var alreadyMember = document.createElement("p");
  alreadyMember.innerHTML = ` <p class="member-text">Déjà membre ? <a href="#" id="toggle-login">Se connecter</a></p>`;
  main.append(SignupForm);
  SignupForm.append(h1, form, alreadyMember, btn);
  form.append(eMail.div, Pswd.div);

  function addUser() {
    var email = document.getElementById("email").value;
    var passwd = document.getElementById("password").value;
    if (email && passwd) {
      if (JSON.parse(localStorage.getItem("email")) != email) {
        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem("password", JSON.stringify(passwd));
        alert("Vous vous êtes inscrit avec succès !");
      } else {
        alert("Ce Mail a deja été utilisé ");
      }
    } else {
      alert("Veuillez remplir tous les champs pour vous inscrire.");
    }
  }
}

var toggleLogin;

createForm_signin();
function createForm_signin() {
  var main = document.getElementById("form-container");
  var SigninForm = document.createElement("div");
  SigninForm.className = "login-form";
  var h1 = document.createElement("h1");
  h1.innerText = "Se connecter";
  var form = document.createElement("form");
  var eMail = myInput("email", "email", "Adresse e-mail");
  var Pswd = myInput("password", "password", "Mot de passe");
  var btn = myButton("submit", `Se Connecter`, addUser);
  var alreadyMember = document.createElement("p");
  alreadyMember.className = "member-text";
  alreadyMember.innerHTML = `Vous n'êtes pas inscrit ? <a href="#" id="toggle-login">Inscrivez-vous</a>`;
  main.append(SigninForm);
  SigninForm.append(h1, form, alreadyMember, btn);
  form.append(eMail.div, Pswd.div);
  const toggleLogin = document.querySelector("#toggle-login");
  console.log(toggleLogin);
  const signForm = document.querySelector(".login-form");
  toggleLogin.addEventListener("click", function (event) {
    event.preventDefault(); // empêche le lien de se comporter comme un lien normal
    console.log('Clic sur le lien détecté');
    signForm.classList.add("hide");
  });

  function addUser() {
    var email = document.getElementById("email").value;
    var passwd = document.getElementById("password").value;
    if (email && passwd) {
      if (JSON.parse(localStorage.getItem("email")) != email) {
        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem("password", JSON.stringify(passwd));
        alert("Vous vous êtes inscrit avec succès !");
      } else {
        alert("Ce Mail a deja été utilisé ");
      }
    } else {
      alert("Veuillez remplir tous les champs pour vous inscrire.");
    }
  }
}

function myInput(_id, _type, _labeltxt) {
  var usr = {};
  usr.div = document.createElement("div");
  usr.div.className = "form-group";
  usr.label = document.createElement("label");
  usr.label.innerHTML = _labeltxt;
  usr.input = document.createElement("input");
  usr.input.id = _id;
  usr.input.type = _type;
  usr.div.append(usr.label, usr.input);
  return usr;
}

function myButton(_type, _text, _callback) {
  btn = document.createElement("button");
  btn.innerText = _text;
  btn.addEventListener("click", _callback);
  return btn;
}

// const signInButton = document.getElementById('signin-button');
// const signInEmail = document.getElementById('signin-email');
// const signInPassword = document.getElementById('signin-password');

// const signUpButton = document.getElementById('signup-button');
// const signUpUsername = document.getElementById('signup-username');
// const signUpEmail = document.getElementById('signup-email');
// const signUpPassword = document.getElementById('signup-password');

// // Stockage des données utilisateur dans localStorage
// const users = JSON.parse(localStorage.getItem('users')) || [];

// // Fonction pour se connecter
// const signIn = (email, password) => {
//   const user = users.find(user => user.email === email && user.password === password);
//   if (user) {
//     alert(`Bienvenue ${user.username} !`);
//   } else {
//     alert('Adresse e-mail ou mot de passe incorrect.');
//   }
// };

// document.getElementById("signup-button").addEventListener("click", function () {
//   var username = document.getElementById("signup-username").value;
//   var email = document.getElementById("signup-email").value;
//   var password = document.getElementById("signup-password").value;
//   if (username && email && password) {
//     localStorage.setItem("username", JSON.stringify(username));
//     localStorage.setItem("email", JSON.stringify(email));
//     localStorage.setItem("password", JSON.stringify(password));
//     alert("Vous vous êtes inscrit avec succès !");
//   } else {
//     alert("Veuillez remplir tous les champs pour vous inscrire.");
//   }
// });

//
