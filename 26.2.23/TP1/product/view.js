import * as util from "./util.js";


//Declaration des variables de base
export var container = document.createElement("div");
container.className = "container";
export var pass = "";
export var label ="";
export var button ="";
export const form = document.createElement("form");
form.className = "form-container";

//Formulaire Mot de passe
export function passwordForm(_callback,) {
  label = new util.MyLabel("Tapez votre mot de passe pour acceder au produit");
  pass = new util.myInput ("password", "");
  button = new util.myButton("submit", "Submit", _callback);
  console.log(pass);
  form.append(label.label, pass.input, button.btn);
  console.log(form);
  
}
container.appendChild(form);
document.body.appendChild(container);

//Formulaire de Produit
export function makeBoxeForProducts(arr) {
  arr.forEach((x)=> {
    const button2 = document.createElement("button");
    button2.textContent = "Acheter";
    button2.addEventListener("click", buyNow);
    var product = document.createElement("div");
    product.className = "product";
    product.innerHTML = `
              <img src="${x.img}"/>
              <h3>${x.title}</h3>
              <p>
                ${x.desc}
              </p>
              <div class="price">${x.price}$</div>
              
            `;
    product.appendChild(button2);
    container.appendChild(product);
    if (container.contains(form)) {
      container.removeChild(form);
    }
    document.body.appendChild(container);
  });

  //button ajout au panier simuler
  function buyNow() {
    alert("Article dans le panier");
  }
}
