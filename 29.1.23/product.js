const Products = [

    // exemple de produits 

    { title: "Macbook pro", desc: "Le Dernier Macbook Pro", price: 2950, img: "./img/macbook.jpeg" },
    { title: "Imac M1", desc: "Toute la puissance du M1 dans un Imac", price: 1590, img: "./img/MGPC3HB-A_12052021115420.jpeg" },
    { title: "Iphone 14 pro", desc: "Pro.Plus ultra", price: 1479, img: "./img/iphone.png" },
    { title: "Mac Mini", desc: "Musclé avec un grand V", price: 699, img: "./img/macmini.jpeg" }
];



// Creation des class pour le formulaire

class myInput {
    constructor(type, placeholder) {
        this.input = document.createElement("input");
        this.input.type = type;
        this.input.placeholder = placeholder;
    }
}

class myButton {
    constructor(type, value, _callback) {
        this.btn = document.createElement("input");
        this.btn.type = type;
        this.btn.value = value;
        this.btn.addEventListener("click", _callback);

    }
}

class myTxt {
    constructor(placeholder) {
        this.txt = document.createElement("textarea");
        this.txt.placeholder = placeholder;
    }
}



createForm();

function createForm() {

    //affichage des produits deja presents
    var container = document.createElement("div");
    container.className = "container";
    Products.forEach(function(obj) {
        var productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
          <img src="${obj.img}"/>
          <h3>${obj.title}</h3>
          <p>
            ${obj.desc}
          </p>
          <div class="price">${obj.price}$</div>
          <button>Acheter</button>
        `;
        container.appendChild(productDiv);
    });
    document.body.appendChild(container);


    // Creation du Formulaire
    const formContainer = document.createElement("div");
    formContainer.className = "form-container"
    const form = document.createElement("form");
    form.addEventListener("submit", addProduct);
    const title = new myInput("text", "Title");
    const price = new myInput("number", "Price");
    const img = new myInput("text", "Image URL");
    const desc = new myTxt("description du produit");
    const button = new myButton("submit", "Submit", addProduct);
    form.append(title.input, price.input, img.input, desc.txt, button.btn);
    formContainer.appendChild(form);
    document.body.appendChild(formContainer);

    // Ajout du produit apres submit dans le formulaire

    function addProduct(event) {
        event.preventDefault();
        var obj = {};
        obj.title = title.input.value;
        obj.desc = desc.txt.value;
        obj.price = price.input.value;
        obj.img = img.input.value;
        Products.push(obj);
        form.reset();

        const product = document.createElement("div");
        product.className = "product";
        product.innerHTML = `
          <img src="${obj.img}"/>
          <h3>${obj.title}</h3>
          <p>
            ${obj.desc}
          </p>
          <div class="price">${obj.price}$</div>
          <button>Acheter</button>
        `;
        container.appendChild(product);
    }
}








