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
];
var PrisonBreak = "/tv/2288";
var BreakingBad = "/tv/1396";
var PulpFiction = "/movie/680";
var IngloriousB = "/movie/16869";
var FightClub = "/movie/550";
var LesEvadé = "/movie/202695";
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
var FilmPasvu = [
  PrisonBreak,
  BreakingBad,
  PulpFiction,
  IngloriousB,
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
function ActualFilm(array, FilmNumber) {
  if (array == Film) {
    $.getJSON(
      "https://api.themoviedb.org/3" +
        array[FilmNumber] +
        "?api_key=c8ba3cbfd981404e3c6a588adfbce2d5&language=FR",
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
        if (Title === undefined) {
          $("#text" + FilmNumber).append(
            '<h2 id="Title' + FilmNumber + '">' + data["name"] + "</h2>"
          );
          $("#Image" + FilmNumber).append(
            '<h2 id="BackTitle' + FilmNumber + '">' + data["name"] + "</h2>"
          );
          $("#list" + ID).append("<h2>" + data["name"] + "</h2>");
        } else {
          $("#text" + FilmNumber).append(
            '<h2 id="Title' + FilmNumber + '">' + data["title"] + "</h2>"
          );
          $("#Image" + FilmNumber).append(
            '<h2 id="BackTitle' + FilmNumber + '">' + data["title"] + "</h2>"
          );
          $("#list" + ID).append("<h2>" + data["title"] + "</h2>");
        }
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
        for (let j = 0; j < data["genres"].length; j++) {
          $("#Genre" + FilmNumber).append(
            '<h4 id="Genre' +
              FilmNumber +
              j +
              j +
              '" class="GenreText"> ' +
              data["genres"][j]["name"] +
              "</h4>"
          );
          $("#Genrelist" + ID).append(
            '<h4 id="Genre' +
              FilmNumber +
              j +
              j +
              '"> ' +
              data["genres"][j]["name"] +
              "</h4>"
          );
          GenreColor(
            data["genres"][j]["name"],
            "#Genre" +
              FilmNumber +
              "> #Genre" +
              FilmNumber +
              j +
              j +
              ".GenreText"
          );
          GenreColor(
            data["genres"][j]["name"],
            "#Genrelist" + ID + "> #Genre" + FilmNumber + j + j
          );
        }
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
        "?api_key=c8ba3cbfd981404e3c6a588adfbce2d5&language=FR",
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
        if (Title === undefined) {
          $("#textp" + FilmNumber).append(
            '<h2 id="Titlep' + FilmNumber + '">' + data["name"] + "</h2>"
          );
          $("#Imagep" + FilmNumber).append(
            '<h2 id="BackTitlep' + FilmNumber + '">' + data["name"] + "</h2>"
          );
          $("#list" + ID).append("<h2>" + data["name"] + "</h2>");
        } else {
          $("#textp" + FilmNumber).append(
            '<h2 id="Titlep' + FilmNumber + '">' + data["title"] + "</h2>"
          );
          $("#Imagep" + FilmNumber).append(
            '<h2 id="BackTitlep' + FilmNumber + '">' + data["title"] + "</h2>"
          );
          $("#list" + ID).append("<h2>" + data["title"] + "</h2>");
        }
        $("#textp" + FilmNumber).append(
          '<div id="Genrep' + FilmNumber + '"></div>'
        );
        $ ^
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
        for (let j = 0; j < data["genres"].length; j++) {
          $("#Genrep" + FilmNumber).append(
            '<h4 id="Genrep' +
              FilmNumber +
              j +
              j +
              '" class="GenreText"> ' +
              data["genres"][j]["name"] +
              "</h4>"
          );
          $("#Genrelist" + ID).append(
            '<h4 id="Genrep' +
              FilmNumber +
              j +
              j +
              '"> ' +
              data["genres"][j]["name"] +
              "</h4>"
          );
          GenreColor(
            data["genres"][j]["name"],
            "#Genrep" +
              FilmNumber +
              "> #Genrep" +
              FilmNumber +
              j +
              j +
              ".GenreText"
          );
          GenreColor(
            data["genres"][j]["name"],
            "#Genrelist" + ID + "> #Genrep" + FilmNumber + j + j
          );
        }
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
      $("#BoutonContainer, h1, #ColoneList, #VupasVu").toggleClass("Blur");
      $("#Vu, #pasVu, #ListIMG, #TVIMG").css({ cursor: "default" });
    }, 200);
    PrecisionMode = true;
  }
});
$(document).on("click", "#Retour", function () {
  $(ActivePrecision).animate({ left: "600%", opacity: "0" });
  $(".bouton").css({ cursor: "pointer" });
  $("#BoutonContainer, h1, #ColoneList, #VupasVu").toggleClass("Blur");
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
      $(".bouton").css({ width: "97.7%", height: "37em" });
      $(".bouton>h2").css({ fontSize: "2.5em" });
    } else if (Affvar == 1) {
      $(".bouton").css({ width: "48.1%", height: "19em" });
      $(".bouton>h2").css({ fontSize: "1.9em" });
    } else if (Affvar == 2) {
      $(".bouton").css({ width: "31.5%", height: "13.5em" });
      $(".bouton>h2").css({ fontSize: "1.7em" });
    } else if (Affvar == 3) {
      $(".bouton").css({ width: "23.2%", height: "10.4em" });
      $(".bouton>h2").css({ fontSize: "1.4em" });
    } else if (Affvar == 4) {
      $(".bouton").css({ width: "18.25%", height: "8em" });
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
  console.log($(this).height());
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
