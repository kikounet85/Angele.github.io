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
var RickMorty = "/tv/60625";
var SNK = "/tv/1429";
var IWantPancrea = "/movie/504253";
var YourLieInApril = "/tv/61663";
var IngloriousB = "/movie/16869";
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
  RickMorty,
  SNK,
  IWantPancrea,
  YourLieInApril,
  IngloriousB,
];
var PrisonBreak = "/tv/2288";
var BreakingBad = "/tv/1396";
var PulpFiction = "/movie/680";
var FightClub = "/movie/550";
var LesEvadé = "/movie/278";
var ReservoirDogs = "/movie/500";
var Inception = "/movie/27205";
var Arretemoi = "/movie/640";
var VeryBadTrip1 = "/movie/18785";
var Whiplash = "/movie/244786";
var DoctorWho = "/tv/57243";
var BatmanVSSuperman = "/movie/209112";
var OnePiece = "/tv/37854";
var FullMetalAlch = "/tv/31911";
var LEJoker = "/movie/475557";
var Brooklyn99 = "/tv/48891";
var ParcAndRec = "/tv/8592";
var Bleach = "/tv/30984";
var LesAffranchis = "/movie/769";
var BlackMirror = "/tv/42009";
var MrRobot = "/tv/62560";
var FilmPasvu = [
  PrisonBreak,
  BreakingBad,
  PulpFiction,
  FightClub,
  LesEvadé,
  ReservoirDogs,
  Inception,
  Arretemoi,
  VeryBadTrip1,
  Whiplash,
  DoctorWho,
  BatmanVSSuperman,
  OnePiece,
  FullMetalAlch,
  LEJoker,
  Brooklyn99,
  ParcAndRec,
  Bleach,
  LesAffranchis,
  BlackMirror,
  MrRobot,
];
var Imagelist = [];
var Filmlist = [];
var PrecisionMode = false;
var ActivePrecision;
var Afflist = ["Aff1", "Aff2", "Aff3", "Aff4", "Aff5"];
var Affvar = 2;
var ListMode = false;
var fullscreenMode = false;
var listheight = 0;
var ArrayGenre = [];
function ActualFilm(array, FilmNumber) {
  if (array == Film) {
    $.getJSON(
      "https://api.themoviedb.org/3" +
        array[FilmNumber] +
        "?api_key=c8ba3cbfd981404e3c6a588adfbce2d5&language=fr-FR",
      function (data) {
        var ID = "Film" + FilmNumber;
        $("#container").append('<div id="' + ID + '" class="Precision"></div>');
        $("#" + ID).append(
          '<div id="text' + FilmNumber + '" class ="text"></div>'
        );
        $("#BoutonContainer").append(
          '<div id="Image' + FilmNumber + '" class="bouton"></div>'
        );
        $("#Image" + FilmNumber).addClass("vu");
        $("#listContainer").append(
          '<div id="list' + ID + '" class="listContainer"></div>'
        );
        $("#Image" + FilmNumber).append(
          '<img id="Backdrop' +
            FilmNumber +
            '" src="https://image.tmdb.org/t/p/original' +
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
        $("#" + ID).append(
          '<h3 id="More' + FilmNumber + '" class ="More"><< En savoir plus</h3>'
        );
        $("#" + ID).append('<div id="Info' + ID + '" class="Info"></div>');
        $("#Info" + ID).append(
          '<h2 id="TypeTitle' + ID + '" class="TypeTitle">Type</h2>'
        );
        $("#Info" + ID).append('<h3 id="Type' + ID + '" class="Type"></h3>');
        $("#Info" + ID).append(
          '<h2 id="OriginalTitleT' +
            ID +
            '" class="OriginalTitleT">Titre d\'origine</h2>'
        );
        $("#Info" + ID).append(
          '<h3 id="OriginalTitle' + ID + '" class="OriginalTitle"></h3>'
        );
        $("#Info" + ID).append(
          '<h2 id="ReleaseDateTitle' +
            ID +
            '" class="ReleaseDateTitle">Date de sortie</h2>'
        );
        $("#Info" + ID).append(
          '<h3 id="ReleaseDate' + ID + '" class="ReleaseDate"></h3>'
        );
        $("#Info" + ID).append('<img class="Blackinfo" src="img/black.png"/>');
        $("#Info" + ID).append(
          '<h2 id="NoteTitle' + ID + '" class="NoteTitle">Notes</h2>'
        );
        $("#Info" + ID).append(
          '<h3 id="Averagevote' +
            ID +
            '" class="VoteAverage">' +
            data["vote_average"] +
            "/10</h3>"
        );
        $("#Info" + ID).append(
          '<h3 id="Averagecount' +
            ID +
            '" class="VoteCount">Noté par ' +
            data["vote_count"] +
            " personnes</h3>"
        );
        $("#Info" + ID).append(
          '<h2 id="DuréeTitle' + ID + '" class="DuréeTitle">Durée</h2>'
        );
        NoteColor(data["vote_average"], "#Averagevote" + ID);
        $("#Imagep" + FilmNumber).append(
          '<img class="Black" src="img/black.png"/>'
        );
        $("#list" + ID).append(
          '<h3 id="RuntimeList' + ID + '" class="RuntimeList"></h3>'
        );
        if (Title === undefined) {
          $("#text" + FilmNumber).append(
            '<h2 id="Title' + FilmNumber + '">' + data["name"] + "</h2>"
          );
          $("#Image" + FilmNumber).append(
            '<h2 id="BackTitle' + FilmNumber + '">' + data["name"] + "</h2>"
          );
          $("#list" + ID).append("<h2>" + data["name"] + "</h2>");
          $("#Info" + ID).append(
            '<h3 id="Runtime' +
              ID +
              '" class="Runtime">' +
              data["episode_run_time"][0] +
              " minutes en moyenne</h3>"
          );
          $("#Type" + ID).text("Série");
          $("#Info" + ID).append(
            '<h3 id="Saisons' +
              ID +
              '" class="Saison">' +
              data["number_of_seasons"] +
              " saisons</h3>"
          );
          $("#Info" + ID).append(
            '<h3 id="Episodes' +
              ID +
              '" class="Episodes">' +
              data["number_of_episodes"] +
              " épisodes</h3>"
          );
          $("#OriginalTitle" + ID).text(data["original_name"]);
          $("#ReleaseDate" + ID).text(
            moment(data["first_air_date"]).format("DD-MM-YYYY")
          );
          $("#list" + ID).append(
            '<h3 id="ReleasedateList' +
              ID +
              '" class="ReleasedateList">' +
              moment(data["first_air_date"]).format("DD-MM-YYYY") +
              "</h3>"
          );
          $("#list" + ID).append(
            '<h3 id="TypeList' + ID + '" class="TypeList">Série</h3>'
          );
          $("#list" + ID + ">.RuntimeList").text(
            data["episode_run_time"][0] + " minutes"
          );
          $("#list" + ID).append(
            '<h3 id="NumberEpisodeList' +
              ID +
              '" class="EpisodeList">' +
              data["number_of_episodes"] +
              " épisodes</h3>"
          );
          $("#list" + ID).append(
            '<h3 id="NumberSeasonList' +
              ID +
              '" class="SeasonList">' +
              data["number_of_seasons"] +
              " saisons</h3>"
          );
        } else {
          $("#text" + FilmNumber).append(
            '<h2 id="Title' + FilmNumber + '">' + data["title"] + "</h2>"
          );
          $("#Image" + FilmNumber).append(
            '<h2 id="BackTitle' + FilmNumber + '">' + data["title"] + "</h2>"
          );
          $("#list" + ID).append("<h2>" + data["title"] + "</h2>");
          $("#Info" + ID).append(
            '<h3 id="Runtime' + ID + '" class="Runtime"></h3>'
          );
          DuréeH(data["runtime"], "#Info" + ID + ">.Runtime");
          DuréeH(data["runtime"], "#list" + ID + ">.RuntimeList");
          $("#Type" + ID).text("Film");
          $("#OriginalTitle" + ID).text(data["original_title"]);
          $("#ReleaseDate" + ID).text(
            moment(data["release_date"]).format("DD-MM-YYYY")
          );
          $("#list" + ID).append(
            '<h3 id="TypeList' + ID + '" class="TypeList">Film</h3>'
          );
          $("#list" + ID).append(
            '<h3 id="ReleasedateList' +
              ID +
              '" class="ReleasedateList">' +
              moment(data["release_date"]).format("DD-MM-YYYY") +
              "</h3>"
          );
        }
        Titlesize(
          $("#Info" + ID + ">.OriginalTitle").text(),
          "#Info" + ID + ">.OriginalTitle"
        );
        $("#text" + FilmNumber).append(
          '<div id="Genre' + FilmNumber + '"></div>'
        );
        $ ^
          $("#list" + ID).append(
            '<div id="Genrelist' + ID + '" class="Genrelist"></div>'
          );
        $("#list" + ID).append(
          '<div id="Backdropdiv' + FilmNumber + '" class="Backdropdiv"></div>'
        );
        $("#list" + ID).addClass("vu");
        $("#Backdropdiv" + FilmNumber).append(
          '<img id="Backdroplist' +
            FilmNumber +
            '" src="https://image.tmdb.org/t/p/original' +
            data["backdrop_path"] +
            '"/>'
        );
        $("#list" + ID).append(
          '<h3 id="Note' +
            ID +
            '" class="AverageNote">' +
            data["vote_average"] +
            "/10</h3>"
        );
        for (let g = 0; g < data["genres"].length; g++) {
          let Checkup = data["genres"][g]["name"].includes("&");
          if (Checkup == true) {
            Splitand(data["genres"][g]["name"]);
          } else {
            ArrayGenre.push(data["genres"][g]["name"]);
          }
        }
        for (let j = 0; j < ArrayGenre.length; j++) {
          $("#Genre" + FilmNumber).append(
            '<h4 id="Genre' +
              FilmNumber +
              j +
              j +
              '" class="GenreText"> ' +
              ArrayGenre[j] +
              "</h4>"
          );
          $("#Genrelist" + ID).append(
            '<h4 id="Genre' +
              FilmNumber +
              j +
              j +
              '"> ' +
              ArrayGenre[j] +
              "</h4>"
          );
          GenreColor(
            ArrayGenre[j],
            "#Genre" +
              FilmNumber +
              "> #Genre" +
              FilmNumber +
              j +
              j +
              ".GenreText"
          );
          GenreColor(
            ArrayGenre[j],
            "#Genrelist" + ID + "> #Genre" + FilmNumber + j + j
          );
        }
        ArrayGenre = [];
        $("#text" + FilmNumber).append(
          '<p id="Summary' + FilmNumber + '">' + data["overview"] + "</p>"
        );
        $("#list" + ID).append(
          '<h4 id="Summary' + FilmNumber + '">' + data["overview"] + "</h4>"
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
  } else {
    $.getJSON(
      "https://api.themoviedb.org/3" +
        array[FilmNumber] +
        "?api_key=c8ba3cbfd981404e3c6a588adfbce2d5&language=fr-FR",
      function (data) {
        var ID = "Filmp" + FilmNumber;
        $("#container").append('<div id="' + ID + '" class="Precision"></div>');
        $("#" + ID).append(
          '<div id="textp' + FilmNumber + '" class ="text"></div>'
        );
        $("#BoutonContainerp").append(
          '<div id="Imagep' + FilmNumber + '" class="bouton"></div>'
        );
        $("#Imagep" + FilmNumber).addClass("pasvu");
        $("#listContainer").append(
          '<div id="list' + ID + '" class="listContainer"></div>'
        );
        $("#Imagep" + FilmNumber).append(
          '<img id="Backdropp' +
            FilmNumber +
            '" src="https://image.tmdb.org/t/p/original' +
            data["backdrop_path"] +
            '"/>'
        );
        $("#" + ID).append(
          '<h3 id="More' + FilmNumber + '" class ="More"><< En savoir plus</h3>'
        );
        $("#" + ID).append('<div id="Info' + ID + '" class="Info"></div>');
        $("#Info" + ID).append(
          '<h2 id="TypeTitle' + ID + '" class="TypeTitle">Type</h2>'
        );
        $("#Info" + ID).append('<h3 id="Type' + ID + '" class="Type"></h3>');
        $("#Info" + ID).append(
          '<h2 id="OriginalTitleT' +
            ID +
            '" class="OriginalTitleT">Titre d\'origine</h2>'
        );
        $("#Info" + ID).append(
          '<h3 id="OriginalTitle' + ID + '" class="OriginalTitle"></h3>'
        );
        $("#Info" + ID).append(
          '<h2 id="ReleaseDateTitle' +
            ID +
            '" class="ReleaseDateTitle">Date de sortie</h2>'
        );
        $("#Info" + ID).append(
          '<h3 id="ReleaseDate' + ID + '" class="ReleaseDate"></h3>'
        );
        $("#Info" + ID).append('<img class="Blackinfo" src="img/black.png"/>');
        $("#Info" + ID).append(
          '<h2 id="NoteTitle' + ID + '" class="NoteTitle">Notes</h2>'
        );
        $("#Info" + ID).append(
          '<h3 id="Averagevote' +
            ID +
            '" class="VoteAverage">' +
            data["vote_average"] +
            "/10</h3>"
        );
        $("#Info" + ID).append(
          '<h3 id="Averagecount' +
            ID +
            '" class="VoteCount">Noté par ' +
            data["vote_count"] +
            " personnes</h3>"
        );
        $("#Info" + ID).append(
          '<h2 id="DuréeTitle' + ID + '" class="DuréeTitle">Durée</h2>'
        );
        NoteColor(data["vote_average"], "#Averagevote" + ID);
        $("#Imagep" + FilmNumber).append(
          '<img class="Black" src="img/black.png"/>'
        );
        let Title = data["title"];
        $("#" + ID).append(
          '<img id="Posterp' +
            FilmNumber +
            '" src="https://image.tmdb.org/t/p/w500' +
            data["poster_path"] +
            '"/>'
        );
        $("#list" + ID).append(
          '<h3 id="RuntimeList' + ID + '" class="RuntimeList"></h3>'
        );
        if (Title === undefined) {
          $("#textp" + FilmNumber).append(
            '<h2 id="Titlep' + FilmNumber + '">' + data["name"] + "</h2>"
          );
          $("#Imagep" + FilmNumber).append(
            '<h2 id="BackTitlep' + FilmNumber + '">' + data["name"] + "</h2>"
          );
          $("#list" + ID).append("<h2>" + data["name"] + "</h2>");
          $("#Info" + ID).append(
            '<h3 id="Runtime' +
              ID +
              '" class="Runtime">' +
              data["episode_run_time"][0] +
              " minutes en moyenne</h3>"
          );
          $("#Type" + ID).text("Série");
          $("#Info" + ID).append(
            '<h3 id="Saisons' +
              ID +
              '" class="Saison">' +
              data["number_of_seasons"] +
              " saisons</h3>"
          );
          $("#Info" + ID).append(
            '<h3 id="Episodes' +
              ID +
              '" class="Episodes">' +
              data["number_of_episodes"] +
              " épisodes</h3>"
          );
          $("#OriginalTitle" + ID).text(data["original_name"]);
          $("#ReleaseDate" + ID).text(
            moment(data["first_air_date"]).format("DD-MM-YYYY")
          );
          $("#list" + ID).append(
            '<h3 id="ReleasedateList' +
              ID +
              '" class="ReleasedateList">' +
              moment(data["first_air_date"]).format("DD-MM-YYYY") +
              "</h3>"
          );
          $("#list" + ID).append(
            '<h3 id="TypeList' + ID + '" class="TypeList">Série</h3>'
          );
          $("#list" + ID + ">.RuntimeList").text(
            data["episode_run_time"][0] + " minutes"
          );
          $("#list" + ID).append(
            '<h3 id="NumberEpisodeList' +
              ID +
              '" class="EpisodeList">' +
              data["number_of_episodes"] +
              " épisodes</h3>"
          );
          $("#list" + ID).append(
            '<h3 id="NumberSeasonList' +
              ID +
              '" class="SeasonList">' +
              data["number_of_seasons"] +
              " saisons</h3>"
          );
        } else {
          $("#textp" + FilmNumber).append(
            '<h2 id="Titlep' + FilmNumber + '">' + data["title"] + "</h2>"
          );
          $("#Imagep" + FilmNumber).append(
            '<h2 id="BackTitlep' + FilmNumber + '">' + data["title"] + "</h2>"
          );
          $("#list" + ID).append("<h2>" + data["title"] + "</h2>");
          $("#Info" + ID).append(
            '<h3 id="Runtime' + ID + '" class="Runtime"></h3>'
          );
          DuréeH(data["runtime"], "#Info" + ID + ">.Runtime");
          $("#Type" + ID).text("Film");
          $("#OriginalTitle" + ID).text(data["original_title"]);
          $("#ReleaseDate" + ID).text(
            moment(data["release_date"]).format("DD-MM-YYYY")
          );
          $("#list" + ID).append(
            '<h3 id="TypeList' + ID + '" class="TypeList">Film</h3>'
          );
          $("#list" + ID).append(
            '<h3 id="ReleasedateList' +
              ID +
              '" class="ReleasedateList">' +
              moment(data["release_date"]).format("DD-MM-YYYY") +
              "</h3>"
          );
          DuréeH(data["runtime"], "#list" + ID + ">.RuntimeList");
        }
        $("#textp" + FilmNumber).append(
          '<div id="Genrep' + FilmNumber + '"></div>'
        );
        $("#list" + ID).append(
          '<div id="Genrelist' + ID + '" class="Genrelist"></div>'
        );
        $("#list" + ID).append(
          '<div id="Backdropdivp' + FilmNumber + '" class="Backdropdiv"></div>'
        );
        $("#list" + ID).addClass("pasvu");
        $("#Backdropdivp" + FilmNumber).append(
          '<img id="Backdroplistp' +
            FilmNumber +
            '" src="https://image.tmdb.org/t/p/original' +
            data["backdrop_path"] +
            '"/>'
        );
        $("#list" + ID).append(
          '<h3 id="Note' +
            ID +
            '" class="AverageNote">' +
            data["vote_average"] +
            "/10</h3>"
        );
        for (let g = 0; g < data["genres"].length; g++) {
          let Checkup = data["genres"][g]["name"].includes("&");
          if (Checkup == true) {
            Splitand(data["genres"][g]["name"]);
          } else {
            ArrayGenre.push(data["genres"][g]["name"]);
          }
        }
        for (let j = 0; j < data["genres"].length; j++) {
          $("#Genrep" + FilmNumber).append(
            '<h4 id="Genrep' +
              FilmNumber +
              j +
              j +
              '" class="GenreText"> ' +
              ArrayGenre[j] +
              "</h4>"
          );
          $("#Genrelist" + ID).append(
            '<h4 id="Genrep' +
              FilmNumber +
              j +
              j +
              '"> ' +
              ArrayGenre[j] +
              "</h4>"
          );
          GenreColor(
            ArrayGenre[j],
            "#Genrep" +
              FilmNumber +
              "> #Genrep" +
              FilmNumber +
              j +
              j +
              ".GenreText"
          );
          GenreColor(
            ArrayGenre[j],
            "#Genrelist" + ID + "> #Genrep" + FilmNumber + j + j
          );
        }
        ArrayGenre = [];
        Titlesize(
          $("#Info" + ID + ">.OriginalTitle").text(),
          "#Info" + ID + ">.OriginalTitle"
        );
        $("#textp" + FilmNumber).append(
          '<p id="Summaryp' + FilmNumber + '">' + data["overview"] + "</p>"
        );
        $("#list" + ID).append(
          '<h4 id="Summaryp' + FilmNumber + '">' + data["overview"] + "</h4>"
        );
        $("#textp" + FilmNumber).append('<h3 id="Retour"> Retour </h3>');
        $("#Imagep" + FilmNumber).append(
          '<img class="map0" src="https://image.tmdb.org/t/p/w500' +
            data["backdrop_path"] +
            '"/>'
        );
        console.log(data);
        Imagelist.push("Imagep" + FilmNumber);
        Filmlist.push("Filmp" + FilmNumber);
      }
    );
  }
}
function NoteColor(Note, IDNote) {
  if (Note <= 4) {
    $(IDNote).css({ color: "rgb(148, 22, 22)" });
    return;
  } else if (Note > 7) {
    $(IDNote).css({ color: "rgb(2, 150, 6)" });
    return;
  } else {
    $(IDNote).css({ color: "rgb(184, 120, 2)" });
    return;
  }
}
$(document).ready(function () {
  let i = 0;
  setInterval(function () {
    if (i < Film.length) {
      ActualFilm(Film, i, "vu");
      i++;
    } else {
      clearInterval;
    }
  }, 100);
});
$(document).ready(function () {
  let i = 0;
  setInterval(function () {
    if (i < FilmPasvu.length) {
      ActualFilm(FilmPasvu, i, "pasvu");
      i++;
    } else {
      clearInterval;
    }
  }, 100);
});
$(document).on("mouseover", ".bouton > img, .bouton > h2", function () {
  if (PrecisionMode == false) {
    $(this.parentNode).children("h2").animate({ opacity: "0.9" }, 150);
    $(this.parentNode).children(".Black").animate({ opacity: "0.7" }, 150);
    $(this.parentNode).css({
      boxShadow: "0px 0px 1000px rgba(209, 209, 209, 0.5)",
    });
  }
});
$(document).on("mouseout", ".bouton > img", function () {
  $(this.parentNode).children("h2").animate({ opacity: "0" }, 150);
  $(this.parentNode).children(".Black").animate({ opacity: "0" }, 150);
  $(this.parentNode).css({
    boxShadow: "0px 0px 0px rgba(209, 209, 209, 0.5)",
  });
});
$(document).on("click", ".bouton > img", function () {
  if (PrecisionMode == false) {
    ActivePrecision =
      "#" + Filmlist[Imagelist.indexOf($(this.parentNode).attr("id"))];
    $(ActivePrecision).animate({ left: "6%", opacity: "1" });
    $(".bouton").css({ cursor: "default" });
    setTimeout(function () {
      $(
        "#BoutonContainer, h1, #ColoneList, #VupasVu, #BoutonContainerp"
      ).toggleClass("Blur");
      $("#Vu, #pasVu, #ListIMG, #TVIMG").css({ cursor: "default" });
    }, 200);
    PrecisionMode = true;
  }
});
$(document).on("click", "#Retour", function () {
  $(ActivePrecision).animate({ left: "600%", opacity: "0" });
  $(".bouton").css({ cursor: "pointer" });
  $(
    "#BoutonContainer, h1, #ColoneList, #VupasVu, #BoutonContainerp"
  ).toggleClass("Blur");
  $("#Vu, #pasVu, #ListIMG, #TVIMG").css({ cursor: "pointer" });
  PrecisionMode = false;
});
$("#Aff1, #Aff2,#Aff3, #Aff4,#Aff5").hover(
  function () {
    if (Afflist.indexOf($(this).attr("id")) === Affvar) {
      return;
    } else {
      $(this).css({ backgroundColor: "rgb(153, 150, 150)" });
    }
  },
  function () {
    if (Afflist.indexOf($(this).attr("id")) == Affvar) {
    } else {
      $(this).css({ backgroundColor: "rgb(87, 87, 87)" });
    }
  }
);
$("#Aff1, #Aff2,#Aff3, #Aff4,#Aff5").click(function () {
  if (Afflist.indexOf($(this).attr("id")) === Affvar) {
    return;
  } else {
    Affvar = Afflist.indexOf($(this).attr("id"));
    if (Affvar == 0) {
      $(".bouton").css({ width: "97.7%", height: "50vw" });
      $(".bouton>h2").css({ fontSize: "2.5em" });
    } else if (Affvar == 1) {
      $(".bouton").css({ width: "48.1%", height: "26vw" });
      $(".bouton>h2").css({ fontSize: "1.9em" });
    } else if (Affvar == 2) {
      $(".bouton").css({ width: "31.5%", height: "17vw" });
      $(".bouton>h2").css({ fontSize: "1.7em" });
    } else if (Affvar == 3) {
      $(".bouton").css({ width: "23.2%", height: "12.5vw" });
      $(".bouton>h2").css({ fontSize: "1.4em" });
    } else if (Affvar == 4) {
      $(".bouton").css({ width: "18.25%", height: "9vw" });
      $(".bouton>h2").css({ fontSize: "medium" });
    }
    $("#Aff1, #Aff2,#Aff3, #Aff4,#Aff5").css({
      backgroundColor: "rgb(87, 87, 87)",
      color: "black",
    });
    $(this).css({
      backgroundColor: "rgb(48, 48, 48)",
      color: "rgba(250, 235, 215, 0.575)",
    });
  }
});
function GenreColor(Genre, IDGenre) {
  if (Genre == "Comédie") {
    $(IDGenre).css({ color: "rgb( 255, 142, 0)" });
    return;
  } else if (Genre == "Animation") {
    $(IDGenre).css({ color: "rgb(5, 176, 214)" });
    return;
  } else if (Genre == "Romance") {
    $(IDGenre).css({ color: "rgb(179, 16, 83)" });
    return;
  } else if (Genre == "Aventure") {
    $(IDGenre).css({ color: "rgb(201, 109, 0)" });
    return;
  } else if (Genre == "Drame") {
    $(IDGenre).css({ color: "rgb(124, 7, 7)" });
    return;
  } else if (Genre == "Action") {
    $(IDGenre).css({ color: "rgb(229, 60, 24)" });
    return;
  } else if (Genre == "Science-Fiction") {
    $(IDGenre).css({ color: "rgb(37, 186, 4)" });
    return;
  } else if (Genre == "Fantastique") {
    $(IDGenre).css({ color: "rgb(81, 50, 173)" });
    return;
  } else if (Genre == "Western") {
    $(IDGenre).css({ color: "rgb(184, 108, 0)" });
    return;
  } else if (Genre == "Crime") {
    $(IDGenre).css({ color: "rgb(82, 0, 0)" });
    return;
  } else if (Genre == "Thriller") {
    $(IDGenre).css({ color: "rgb(59, 61, 85)" });
    return;
  } else if (Genre == "Familial") {
    $(IDGenre).css({ color: "rgb(0, 203, 115)" });
    return;
  } else if (Genre == "Guerre") {
    $(IDGenre).css({ color: "rgb(105, 192, 11)" });
    return;
  } else if (Genre == "Musique") {
    $(IDGenre).css({ backgroundColor: "white", borderRadius: "2px" });
  } else {
    $(IDGenre).css({ color: "black" });
    return;
  }
}
$(".listContainer").click(function () {
  $(this).animate({ height: $("#listContainer").get(0).scrollHeight }, 350);
});
$("#ListIMG").click(function () {
  if (PrecisionMode == false) {
    if (ListMode == false) {
      $("#BoutonContainer, #BoutonContainerp").animate({ left: "200%" }, 350);
      $("#Affichage").animate({ top: "-10%" }, 350);
      setTimeout(function () {
        $("#listContainer").animate({ left: "0em" }, 500);
        $("#listContainer").show();
        $("#BoutonContainer, #BoutonContainerp").hide();
        listheight = $("#listFilm0").height();
        $("#ListIMG").css({ borderColor: "rgba(255, 255, 255, 0.829)" });
        $("#TVIMG").css({ borderColor: "black" });
      }, 500);
      ListMode = true;
    }
  }
});
$("#TVIMG").click(function () {
  if (PrecisionMode == false) {
    if (ListMode == true) {
      $("#listContainer").animate({ left: "-200em" }, 500);
      $("#BoutonContainer, #BoutonContainerp").show();
      $("#Affichage").animate({ top: "4%" }, 350);
      $(".listContainer").css({ height: "7em" });
      setTimeout(function () {
        $("#BoutonContainer, #BoutonContainerp").animate({ left: "0%" }, 350);
        $("#listContainer").hide();
        $("#TVIMG").css({ borderColor: "rgba(255, 255, 255, 0.829)" });
        $("#ListIMG").css({ borderColor: "black" });
      }, 350);
      ListMode = false;
    }
  }
});
$(document).on("click", ".listContainer", function () {
  if ($(this).height() == listheight) {
    $(this).animate({ height: $(this).get(0).scrollHeight }, 350);
  } else {
    $(this).animate({ height: "7em" }, 350);
  }
});
$("#pasVu").click(function () {
  if (PrecisionMode == false) {
    $(".vu").hide();
    $("#BoutonContainer").hide();
    $("#BoutonContainerp").show();
    $(".pasvu").show();
    $("#pasVu").css({ borderColor: "aliceblue" });
    $("#Vu").css({ borderColor: "black" });
    $("h1").text("Films à voir avec la Salopette");
  }
});
$("#Vu").click(function () {
  if (PrecisionMode == false) {
    $(".pasvu").hide();
    $("#BoutonContainerp").hide();
    $("#BoutonContainer").show();
    $(".vu").show();
    $("#Vu").css({ borderColor: "aliceblue" });
    $("#pasVu").css({ borderColor: "black" });
    $("h1").text("Recap des films vu avec la Salopette");
  }
});
$("#ListIMG, #TVIMG").hover(
  function () {
    if (PrecisionMode == false) {
      $(this).css({ transform: "scale(1.2)" });
    }
  },
  function () {
    if (PrecisionMode == false) {
      $(this).css({ transform: "scale(1)" });
    }
  }
);
$("#Vu, #pasVu").hover(
  function () {
    if (PrecisionMode == false) {
      $(this).css({ transform: "scale(1.1)" });
    }
  },
  function () {
    if (PrecisionMode == false) {
      $(this).css({ transform: "scale(1)" });
    }
  }
);
$("#fullscreen").click(function () {
  if (fullscreenMode == false) {
    $("#VupasVu, #ColoneList, #Affichage").animate({ opacity: "0" }, 200);
    setTimeout(function () {
      $("#VupasVu, #ColoneList, #Affichage").hide();
      fullscreenMode = true;
    }, 210);
  } else {
    $("#VupasVu, #ColoneList, #Affichage").show();
    $("#VupasVu, #ColoneList, #Affichage").animate({ opacity: "1" }, 200);
    fullscreenMode = false;
  }
});
function aniMore() {
  $(".More").animate({ left: "+=2%" }, 750);
  setTimeout(function () {
    $(".More").animate({ left: "-=2%" }, 750);
  }, 750);
  setTimeout(aniMore, 1500);
}
$(document).ready(function () {
  aniMore();
});
function Titlesize(Title, PATH) {
  if (Title.length <= 20) {
    $(PATH).css({ fontSize: "larger" });
    return;
  } else if (Title.length >= 30) {
    $(PATH).css({ fontSize: "0.8em" });
    return;
  } else if (Title.length >= 25) {
    $(PATH).css({ fontSize: "1em" });
    return;
  }
}
function DuréeH(heure, PATH) {
  let h, m;
  m = 0;
  h = Math.floor(heure / 60);
  m = heure - h * 60;
  $(PATH).text(h + " h " + m + " min");
}
function Splitand(Genre) {
  let GenreArray = Genre.split("&");
  if (GenreArray[0] == " Adventure") {
    ArrayGenre.push("Aventure");
  } else {
    ArrayGenre.push(GenreArray[0].trim());
  }
  if (GenreArray[1] == " Adventure") {
    ArrayGenre.push("Aventure");
  } else {
    ArrayGenre.push(GenreArray[1].trim());
  }
}
var FilterOn = [];
$(".Filter").click(function () {
  let TextClick = $(this).text().trim();
  $(this).css({ color: "white" });
  let CheckupArray = FilterOn.includes(TextClick);
  if (CheckupArray == false) {
    FilterOn.push($(this).text().trim());
    for (let i = 0; i < Film.length; i++) {
      let Checkup = $("#Genre" + i)
        .text()
        .includes(TextClick);
      if (Checkup == false) {
        $("#Image" + i).addClass("Caché");
        $("#listFilm" + i).addClass("Caché");
      }
    }
    for (let i = 0; i < Film.length; i++) {
      let Checkup = $("#Genrep" + i)
        .text()
        .includes(TextClick);
      if (Checkup == false) {
        $("#Imagep" + i).addClass("Caché");
        $("#listFilmp" + i).addClass("Caché");
      }
    }
  } else {
    $(this).css({ color: "black" });
    FilterOn.splice(FilterOn.indexOf(TextClick), 1);
    for (let i = 0; i < Film.length; i++) {
      if (FilterOn.length == 0) {
        $("#Image" + i).removeClass("Caché");
        $("#Imagep" + i).removeClass("Caché");
        $("#listFilm" + i).removeClass("Caché");
        $("#listFilmp" + i).removeClass("Caché");
      } else {
        let ArrayVerif = [];
        let Amount = FilterOn.length;
        Amount -= 1;
        for (let k = 0; k < FilterOn.length; k++) {
          let CheckArray = $("#Genre" + i)
            .text()
            .includes(TextClick);
          ArrayVerif.push(
            $("#Genre" + i)
              .text()
              .includes(FilterOn[k])
          );
          if (
            CheckArray == false &&
            Amount == k &&
            ArrayVerif.includes(false) == false
          ) {
            $("#Image" + i).removeClass("Caché");
            $("#listFilm" + i).removeClass("Caché");
          }
        }
        let ArrayVerifp = [];
        for (let k = 0; k < FilterOn.length; k++) {
          let CheckArray = $("#Genrep" + i)
            .text()
            .includes(TextClick);
          ArrayVerifp.push(
            $("#Genrep" + i)
              .text()
              .includes(FilterOn[k])
          );
          if (
            CheckArray == false &&
            Amount == k &&
            ArrayVerifp.includes(false) == false
          ) {
            $("#Imagep" + i).removeClass("Caché");
            $("#listFilmp" + i).removeClass("Caché");
          }
        }
      }
    }
  }
});
