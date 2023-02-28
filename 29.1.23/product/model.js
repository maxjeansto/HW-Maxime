
 //Recuperation du contenu du JSON Products
export function getProducts() {
    return new Promise((resolve, reject) => {
      fetch('./product/product.json')
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
        fetch('./product/password.json')
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