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

$(document).ready(function () {
  for (let i = 0; i < Film.length; i++) {
    $.getJSON(
      "https://api.themoviedb.org/3" +
        Film[i] +
        "?api_key=c8ba3cbfd981404e3c6a588adfbce2d5&language=fr",
      function (data) {
        var ID = "Film" + i;
        console.log(ID), $("body").append('<div id="' + ID + '"></div>');
        let Title = data["title"];
        if (Title === undefined) {
          $("#" + ID).append(
            '<h2 id="Title' + i + '">' + data["name"] + "</h2>"
          );
        } else {
          $("#" + ID).append(
            '<h2 id="Title' + i + '">' + data["title"] + "</h2>"
          );
        }
        $("#" + ID).append(
          '<h4 id="Genre' + i + '">' + data["genres"][0]["name"] + "</h4>"
        );
        $("#" + ID).append(
          '<h4 id="Summary' + i + '">' + data["overview"] + "</h4>"
        );
        $("#" + ID).append(
          '<img id="Summary' +
            i +
            '" src="https://image.tmdb.org/t/p/w500' +
            data["poster_path"] +
            '"/>'
        );
      }
    );
  }
});
