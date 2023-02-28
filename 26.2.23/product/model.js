
 //Recuperation du contenu du JSON Products
export function getProducts() {
    return new Promise((resolve, reject) => {
      fetch('https://s3-eu-west-1.amazonaws.com/dev.appdrag.com/tp-28-02-a631a1/products.json')
        .then((response) => {
          if (response.ok) {
            return response.json();
          } 
          throw new Error('Network response was not ok.');
 
        })
        .then((products) => {
          resolve(products);
          console.log(products);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  //Recuperation du contenu du JSON Password
export function getPassword() {
    return new Promise((resolve, reject) => {
        fetch('https://s3-eu-west-1.amazonaws.com/dev.appdrag.com/tp-28-02-a631a1/password.json')
        .then((answer) => {
            if (answer.ok) {
                return answer.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then((password) => {
            resolve(password);
            console.log(password);
                      
        })
        .catch((error) => {
            reject(error);
          });
    }

    )
}