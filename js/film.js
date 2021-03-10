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
var Imagelist = [];
var Filmlist = [];
var PrecisionMode = false;
var ActivePrecision;
var Afflist = ["Aff1", "Aff2", "Aff3", "Aff4", "Aff5"];
var Affvar = 2;
var ListMode = false;
var listheight = 0;
function ActualFilm(FilmNumber) {
  $.getJSON(
    "https://api.themoviedb.org/3" +
      Film[FilmNumber] +
      "?api_key=c8ba3cbfd981404e3c6a588adfbce2d5&language=fr",
    function (data) {
      var ID = "Film" + FilmNumber;
      $("#container").append('<div id="' + ID + '" class="Precision"></div>');
      $("#" + ID).append(
        '<div id="text' + FilmNumber + '" class ="text"></div>'
      );
      $("#BoutonContainer").append(
        '<div id="Image' + FilmNumber + '" class="bouton"></div>'
      );
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
          "#Genre" + FilmNumber + "> #Genre" + FilmNumber + j + j + ".GenreText"
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
    $(this.parentNode).children("h2").animate({ opacity: "0.9" }, 150);
    $(this.parentNode).children(".Black").animate({ opacity: "0.7" }, 150);
  }
});
$(document).on("mouseout", ".bouton > img", function () {
  $(this.parentNode).children("h2").animate({ opacity: "0" }, 150);
  $(this.parentNode).children(".Black").animate({ opacity: "0" }, 150);
});
$(document).on("click", ".bouton > img", function () {
  if (PrecisionMode == false) {
    ActivePrecision =
      "#" + Filmlist[Imagelist.indexOf($(this.parentNode).attr("id"))];
    $(ActivePrecision).animate({ left: "6%", opacity: "1" });
    $(".bouton").css({ cursor: "default" });
    PrecisionMode = true;
  }
});
$(document).on("click", "#Retour", function () {
  $(ActivePrecision).animate({ left: "600%", opacity: "0" });
  $(".bouton").css({ cursor: "pointer" });
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
      $(".bouton").css({ width: "75em", height: "37em" });
      $(".bouton>h2").css({ fontSize: "2.5em" });
    } else if (Affvar == 1) {
      $(".bouton").css({ width: "36.9em", height: "19em" });
      $(".bouton>h2").css({ fontSize: "1.9em" });
    } else if (Affvar == 2) {
      $(".bouton").css({ width: "24.2em", height: "13.5em" });
      $(".bouton>h2").css({ fontSize: "1.7em" });
    } else if (Affvar == 3) {
      $(".bouton").css({ width: "17.8em", height: "10.4em" });
      $(".bouton>h2").css({ fontSize: "1.4em" });
    } else if (Affvar == 4) {
      $(".bouton").css({ width: "14em", height: "8em" });
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
$("#ColoneList").click(function () {
  if (ListMode == false) {
    $("#BoutonContainer").animate({ left: "200%" }, 350);
    $("#Affichage").animate({ top: "-10%" }, 350);
    setTimeout(function () {
      $("#listContainer").animate({ left: "0em" }, 500);
      $("#listContainer").show();
      $("#BoutonContainer").hide();
      listheight = $("#listFilm0").height();
    }, 500);
    ListMode = true;
  } else {
    $("#listContainer").animate({ left: "-200em" }, 500);
    $("#BoutonContainer").show();
    $("#Affichage").animate({ top: "4%" }, 350);
    setTimeout(function () {
      $("#BoutonContainer").animate({ left: "1%" }, 350);
      $("#listContainer").hide();
    }, 350);
    ListMode = false;
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
