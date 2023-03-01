// controller.js
import * as Model from "./model.js";
import * as View from "./view.js";

function getData() {
  Model.getJson(() => {
    // On fait tournée en boucle la fonction getjson
    getData();
  });
}

export function init() {
  getData();
}
