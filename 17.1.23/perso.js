function ScrapUrl(url) {
    var obj = {};
    var params = url.split("?")[1].split("&");
    for (let i = 0; i < params.length; i++) {
        let param = params[i].split("=");
        obj[param[0]] = param[1];
    }
    console.log(obj);
    return obj;
}

var form = prompt("Saisissez une url");
ScrapUrl(form);
console.log(ScrapUrl(form)["X-Plex-Token"]);