var TrentejoursMax = "/movie/613377";
var LeVoyageDeChihiro = "/movie/129";
var LeTombeauDesLucioles = "/movie/12477";
var YourName = "/movie/372058";
var Jojo = "/tv/45790";
var Nausicaa = "/movie/81";
var Django = "/movie/68718";
var KillBill1 = "/movie/24";
var KillBill2 = "/movie/393";
var Pokemon1b = "/movie/571891";
var Pokemon2 = "/movie/12599";
var Pokemon3 = "/movie/10991";
var Pokemon4 = "/movie/12600";
var Pokemon5 = "/movie/33875";
var Pokemon6 = "/movie/36218";
var Pokemon7 = "/movie/34065";
var Pokemon8 = "/movie/34067";
var Pokemon9 = "/movie/16808";
var Pokemon10 = "/movie/25961";
var Pokemon11 = "/movie/47292";
var Pokemon12 = "/movie/39057";
var Pokemon13 = "/movie/50087";
var TheOffice = "/tv/2316";
var Rohan = "/movie/798596";
var SNK = "/tv/1429";
var Film = [
  TrentejoursMax,
  LeVoyageDeChihiro,
  LeTombeauDesLucioles,
  YourName,
  Jojo,
  Nausicaa,
  Django,
  KillBill1,
  KillBill2,
  Pokemon1b,
  Pokemon2,
  Pokemon3,
  Pokemon4,
  Pokemon5,
  Pokemon6,
  Pokemon7,
  Pokemon8,
  Pokemon9,
  Pokemon10,
  Pokemon11,
  Pokemon12,
  Pokemon13,
  TheOffice,
  Rohan,
  SNK,
];
var Imagelist = [];
var Filmlist = [];
var PrecisionMode = false;
var ActivePrecision;
function ActualFilm(FilmNumber) {
  $.getJSON(
    "https://api.themoviedb.org/3" +
      Film[FilmNumber] +
      "?api_key=c8ba3cbfd981404e3c6a588adfbce2d5&language=fr",
    function (data) {
      var ID = "Film" + FilmNumber;
      console.log(ID),
        $("#container").append('<div id="' + ID + '" class="Precision"></div>');
      $("#" + ID).append(
        '<div id="text' + FilmNumber + '" class ="text"></div>'
      );
      $("#container").append(
        '<div id="Image' + FilmNumber + '" class="bouton"></div>'
      );
      $("#Image" + FilmNumber).append(
        '<img id="Backdrop' +
          FilmNumber +
          '" src="https://image.tmdb.org/t/p/w500' +
          data["backdrop_path"] +
          '"/>'
      );
      $("#Image" + FilmNumber).append(
        '<img class="Black" src="img/black.png"/>'
      );
      let Title = data["title"];
      $("#" + ID).append(
        '<img id="Poster' +
          FilmNumber +
          '" src="https://image.tmdb.org/t/p/w500' +
          data["poster_path"] +
          '"/>'
      );
      if (Title === undefined) {
        $("#text" + FilmNumber).append(
          '<h2 id="Title' + FilmNumber + '">' + data["name"] + "</h2>"
        );
        $("#Image" + FilmNumber).append(
          '<h2 id="BackTitle' + FilmNumber + '">' + data["name"] + "</h2>"
        );
      } else {
        $("#text" + FilmNumber).append(
          '<h2 id="Title' + FilmNumber + '">' + data["title"] + "</h2>"
        );
        $("#Image" + FilmNumber).append(
          '<h2 id="BackTitle' + FilmNumber + '">' + data["title"] + "</h2>"
        );
      }
      $("#text" + FilmNumber).append(
        '<h4 id="Genre' +
          FilmNumber +
          '">' +
          data["genres"][0]["name"] +
          "</h4>"
      );
      $("#text" + FilmNumber).append(
        '<p id="Summary' + FilmNumber + '">' + data["overview"] + "</p>"
      );
      $("#text" + FilmNumber).append('<h3 id="Retour"> Retour </h3>');
      $("#Image" + FilmNumber).append(
        '<img class="map0" src="https://image.tmdb.org/t/p/w500' +
          data["backdrop_path"] +
          '"/>'
      );
      console.log(data);
      Imagelist.push("Image" + FilmNumber);
      Filmlist.push("Film" + FilmNumber);
    }
  );
}

$(document).ready(function () {
  let i = 0;
  setInterval(function () {
    if (i < Film.length) {
      ActualFilm(i);
      i++;
    } else {
      clearInterval;
    }
  }, 100);
});
$(document).on("mouseover", ".bouton > img, .bouton > h2", function () {
  if (PrecisionMode == false) {
    $(this.parentNode).children("h2").animate({ opacity: "0.9" }, 100);
    $(this.parentNode).children(".Black").animate({ opacity: "0.7" }, 100);
  }
});
$(document).on("mouseout", ".bouton > img", function () {
  $(this.parentNode).children("h2").animate({ opacity: "0" }, 100);
  $(this.parentNode).children(".Black").animate({ opacity: "0" }, 100);
});
$(document).on("click", ".bouton > img", function () {
  if (PrecisionMode == false) {
    ActivePrecision =
      "#" + Filmlist[Imagelist.indexOf($(this.parentNode).attr("id"))];
    $(ActivePrecision).animate({ left: "6%" });
    $(".bouton").css({ cursor: "default" });
    PrecisionMode = true;
  }
});
$(document).on("click", "#Retour", function () {
  $(ActivePrecision).animate({ left: "600%" });
  $(".bouton").css({ cursor: "pointer" });
  PrecisionMode = false;
});
