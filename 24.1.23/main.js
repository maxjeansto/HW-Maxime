const Categories = [{ value: "", text: "--Choose a categorie" },
{ value: "Sport", text: "Sport" },
{ value: "Casual", text: "Casual" },
{ value: "Evening", text: "Evening" },
{ value: "Relax", text: "Relax" }];

const Products = [];


createForm();

function createForm() {
    var model = myInput("model-input", "Enter the model name", "text");
    var brand = myInput("brand-input", "Enter the brand name", "text");
    var price = myInput("price-input", "Enter the price name ", "number");
    var sale = myInput("sale-input", "", "checkbox", "form-check-input");
    var categories = mySelect("category-select", "", Categories);
    var btn = myButton("submit", "", "Add this product", addProduct)
    var formDiv = document.getElementById("form-div");
    formDiv.append(model.div, brand.div, price.div, categories.div, sale.div, btn.div);

    function addProduct() {
        var obj = {};
        obj.model = model.input.value;
        obj.brand = brand.input.value;
        obj.price = price.input.value;
        obj.categories = categories.select.value;
        var validation = true;
        for (var key in obj) {
            switch (key) {
                case "model":
                    if (!obj.model) {
                        model.input.style.borderColor = "red";
                        validation = false;
                    } else {
                        model.input.style.borderColor = "";
                    }
                    break;
                case "brand":
                    if (!obj.brand) {
                        brand.input.style.borderColor = "red";
                        validation = false;
                    } else {
                        brand.input.style.borderColor = "";
                    }
                    break;
                case "price":
                    if (!obj.price) {
                        price.input.style.borderColor = "red";
                        validation = false;
                    } else {
                        price.input.style.borderColor = "";
                    }
                    break;
                case "categories":
                    if (!obj.categories) {
                        categories.select.style.borderColor = "red";
                        validation = false;
                    } else {
                        categories.select.style.borderColor = "";
                    }
                    break;
            }
        }
        if (validation) {
            Products.push(obj);
            model.input.value = "";
            brand.input.value = "";
            price.input.value = "";
            categories.select.value = "";
            createCard(obj);
        } else {
            alert("All field are required");
        }
    }

    function createCard(product) {
        var card = document.createElement("div");
        card.className = "card";
        var cardBody = document.createElement("div");
        cardBody.className = "card-body";
        var model = document.createElement("p");
        model.innerText = "Model: " + product.model;
        var brand = document.createElement("p");
        brand.innerText = "Brand: " + product.brand;
        var price = document.createElement("p");
        price.innerText = "Price: " + product.price;
        var category = document.createElement("p");
        category.innerText = "Category: " + product.categories;
        cardBody.append(model, brand, price, category);
        card.append(cardBody);
        var productList = document.getElementById("product-list");
        productList.append(card);
    }


    function myInput(_id, _placeholder, _type, _class = "") {
        var obj = {}
        obj.div = document.createElement("div");
        obj.input = document.createElement("input");
        obj.input.className = "form-control " + _class;
        obj.input.id = _id;
        obj.input.placeholder = _placeholder;
        obj.input.type = _type;
        obj.div.append(obj.input);
        return obj;
    }

    function mySelect(_id, _class, _arr) {
        var obj = {}
        obj.div = document.createElement("div");
        obj.select = document.createElement("select");
        obj.select.id = _id
        obj.select.className = "form-select " + _class;
        for (let i = 0; i < _arr.length; i++) {
            const opt = _arr[i];
            var option = document.createElement("option");
            option.value = opt.value;
            option.innerText = opt.text;
            obj.select.append(option);

        }
        obj.div.append(obj.select);
        return obj;

    }

    function myButton(_id, _class = "", _text, _callback) {
        var obj = {}
        obj.div = document.createElement("div");
        obj.btn = document.createElement("button");
        obj.btn.className = "btn btn-success " + _class;
        obj.btn.innerText = _text;
        obj.btn.addEventListener("click", _callback);
        obj.div.append(obj.btn);
        return obj;
    }

    const inputs = [model.input, brand.input, price.input];
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].onchange = checkInput;
      }
      
      function checkInput() {
        if (this.value === "") {
          this.classList.add("error");
        } else {
          this.classList.remove("error");
        }
      }

}

// a chaque fois que vous creer afficher une carte avec les informations de l objet comme un panier
