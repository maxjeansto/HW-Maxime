export function getJson(callback) {
    return new Promise((resolve, reject) => {
        //recuperation du json contenant les urls des images 
        fetch(
            "https://s3-eu-west-1.amazonaws.com/dev.appdrag.com/tp-28-02-a631a1/car.json"
        )
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(data => {
                resolve(data);
                console.log(data);
                // Exécution des promesses dans l'ordre avec l url des images
                orderChasis(data[2].url)
                    .then(() => orderEngine(data[0].url))
                    .then(() => orderWheels(data[1].url))
                    .then(() => orderInterior(data[3].url))
                    .then(() => orderCar(data[4].url))
                    .then(() => callback())
                    .catch(error => console.log(error));
            })
            .catch((error) => {
                reject(error);
              });
    });
    
}
// function Math random pour recuperer un delay aleatoire pour le timeout
function r() {
    return Math.random() * 3000 + 1000;
}

// functions implantation des images recuperer
function orderChasis(src) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById('current-step').src = src;
        resolve();
      }, r());
    });
  }

  function orderEngine(src) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById('current-step').src = src;
        resolve();
      }, r());
    });
  }

  function orderWheels(src) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById('current-step').src = src;
        resolve();
      }, r());
    });
  }

  function orderInterior(src) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById('current-step').src = src;
        resolve();
      }, r());
    });
  }
 function orderCar(src) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.getElementById('current-step').src = src;
        resolve();
      }, r());
    });
  }