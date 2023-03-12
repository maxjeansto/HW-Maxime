// document.getElementById("rechercher-btn").addEventListener("click", function() {
//   event.preventDefault();
//   var titre = document.getElementById("search-input").value;
//   fetch("https://www.omdbapi.com/?apikey=20d6481d&type=movie&s=" + titre)
//     .then(response => response.json())
//     .then(resultat => {
//       console.log(resultat)
//       if (resultat.Response == "True") {
//         var affichage = "<h2>Résultat de la recherche :</h2>";
//         affichage += "<p>Titre : " + resultat.Title + "</p>";
//         affichage += "<p>Année : " + resultat.Year + "</p>";
//         affichage += "<p>Réalisateur : " + resultat.Director + "</p>";
//         affichage += "<p>Acteurs : " + resultat.Actors + "</p>";
//         document.getElementById("movie-list").innerHTML = affichage;
//       } else {
//         document.getElementById("resultat").innerHTML = "<p>Aucun résultat trouvé.</p>";
//       }
//     })
//     .catch(error => console.log(error));
// });



document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("rechercher-btn").addEventListener("click", function(event) {
    event.preventDefault();
    var titre = document.getElementById("search-input").value;
    // fetch("https://www.omdbapi.com/?apikey=20d6481d&t=" + titre + "&plot=full")
    fetch("https://www.omdbapi.com/?apikey=20d6481d&type=movie&s=" + titre + "&plot=full")
      .then(response => response.json())
      .then(resultat => {
        if (resultat.Response == "True") {
          console.log(resultat);
          var headerResultat = document.getElementById("header_resultat");
          headerResultat.innerHTML = "<h2>Résultat de la recherche :</h2>";
          var affichage = "";
          resultat.Search.forEach(function(film) {
            affichage += "<div>";
            affichage += "<p>Titre : " + film.Title + "</p>";
            affichage += "<p>Année : " + film.Year + "</p>";
            affichage += "<p>Type : " + film.Type + "</p>";
            affichage += `<img id="poster" src="${film.Poster}" alt="Affiche" data-imdb-id="${film.imdbID}">`;
            affichage += "</div>";
          });
          document.getElementById("movie-list").innerHTML = affichage;
          clikImage();
        } else {
          document.getElementById("movie-list").innerHTML = "<p>Aucun résultat trouvé.</p>";
        }
      })
      .catch(error => console.log(error));
  });
});

function clikImage() {
  var modal = document.querySelector(".modal");
  var modalContent = document.querySelector(".modal-content");
  var modalImage = document.querySelector(".modal-image");
  var modalDescription = document.querySelector(".modal-description");
  var images = document.querySelectorAll("#poster");

  images.forEach(function(image) {
    image.addEventListener("click", function(event) {
      event.preventDefault();
      var imdbID = this.getAttribute("data-imdb-id");
      fetch("https://www.omdbapi.com/?apikey=20d6481d&i=" + imdbID + "&plot=full")
        .then(response => response.json())
        .then(resultat => {
          if (resultat.Response == "True") {
            console.log(resultat);
            modalImage.src = resultat.Poster;
            modalDescription.textContent = resultat.Plot;
          }
        });
      modal.style.display = "block";
    });
  });

  var closeBtn = document.querySelector(".close");
  closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
  });

  window.addEventListener("click", function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}



