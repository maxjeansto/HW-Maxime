import * as View from "./view.js";
import * as Model from "./model.js";

//on initialise le programme
export function init() {
   
    //on initialise  le formulaure
    View.passwordForm(function (event) {
    event.preventDefault();

    // Submit du mot de passe 
    Model.getPassword().then((answer) => {
      let passwords = answer;
      let userInput = View.pass.input.value;
      let passwordFound = false;
      for (let i = 0; i < passwords.length; i++) {
        if (userInput === passwords[i].pwd) {
          passwordFound = true;
          break;
        }
      }
      // Si mot de passe trouvé dans le json on genere la liste des produits
      if (passwordFound) {
        Model.getProducts().then((response) => {
          View.makeBoxeForProducts(response);
        });
        //sion on affiche une alerte Mot de passe incorret
      } else {
        alert("Mot de passe incorrect");
      }
    });
  });
}
