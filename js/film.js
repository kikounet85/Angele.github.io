var TrentejoursMax = "/movie/613377";
var LeVoyageDeChihiro = "/movie/129";
var LeTombeauDesLucioles = "/movie/12477";
var YourName = "/movie/372058";
var Jojo = "/tv/45790";
var Nausicaa = "/movie/81";
var Pokemon1b = "/movie/571891";
var TheOffice = "/tv/2316";
var Film = [
  TrentejoursMax,
  LeVoyageDeChihiro,
  LeTombeauDesLucioles,
  YourName,
  Jojo,
  Nausicaa,
  Pokemon1b,
  TheOffice,
];
function ActualFilm(FilmNumber) {
  $.getJSON(
    "https://api.themoviedb.org/3" +
      Film[FilmNumber] +
      "?api_key=c8ba3cbfd981404e3c6a588adfbce2d5&language=fr",
    function (data) {
      var ID = "Film" + FilmNumber;
      console.log(ID), $("body").append('<div id="' + ID + '"></div>');
      let Title = data["title"];
      if (Title === undefined) {
        $("#" + ID).append(
          '<h2 id="Title' + FilmNumber + '">' + data["name"] + "</h2>"
        );
      } else {
        $("#" + ID).append(
          '<h2 id="Title' + FilmNumber + '">' + data["title"] + "</h2>"
        );
      }
      $("#" + ID).append(
        '<h4 id="Genre' +
          FilmNumber +
          '">' +
          data["genres"][0]["name"] +
          "</h4>"
      );
      $("#" + ID).append(
        '<h4 id="Summary' + FilmNumber + '">' + data["overview"] + "</h4>"
      );
      $("#" + ID).append(
        '<img id="Poster' +
          FilmNumber +
          '" src="https://image.tmdb.org/t/p/w500' +
          data["poster_path"] +
          '"/>'
      );
      setTimeout(50);
    }
  );
}

$(document).ready(function () {
  for (let i = 0; i < Film.length; i++) {
    ActualFilm(i);
  }
});
