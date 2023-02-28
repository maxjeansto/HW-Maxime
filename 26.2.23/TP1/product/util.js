// Creation des class pour le formulaire

export class MyLabel {
    constructor(text) {
        this.label = document.createElement("label");
        this.label.innerText = text;
    }
}



export class myInput {
    constructor(type, placeholder) {
        this.input = document.createElement("input");
        this.input.type = type;
        this.input.placeholder = placeholder;
    }
}

export class myButton {
    constructor(type, value, _callback) {
        this.btn = document.createElement("input");
        this.btn.type = type;
        this.btn.value = value;
        this.btn.addEventListener("click", _callback);

    }

}


export class myTxt {
    constructor(placeholder) {
        this.txt = document.createElement("textarea");
        this.txt.placeholder = placeholder;
    }
}