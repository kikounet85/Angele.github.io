// initialisation : var + ajax
var mode = false;
var meteo = "lol";
var modemétéo = false;
var weatherlist = [];
var templist = [];
var dt = new Date();
var time = dt.getHours();
var météo0list, météo1list, météo2list, météo3list, météo4list;
var color0, color1, color2, color3, color4;
var ciellist, météolist, colorlist;
var date0 = moment().format("dddd");
var date1 = moment().add(1, "days").format("dddd");
var date2 = moment().add(2, "days").format("dddd");
var date3 = moment().add(3, "days").format("dddd");
var date4 = moment().add(4, "days").format("dddd");
var datelist = [];
var datetext = ["#date0", "#date1", "#date2", "#date3", "#date4"];
var dateFR = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];
var dateEN = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
$.ajax({
  url: "https://geolocation-db.com/jsonp",
  jsonpCallback: "callback",
  dataType: "jsonp",
  success: function (location) {
    $("#country").html(location.country_name);
    $("#state").html(location.state);
    $("#city").html(location.city);
    $("#latitude").html(location.latitude);
    $("#longitude").html(location.longitude);
    $("#ip").html(location.IPv4);
  },
});
$(document).ready(function () {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(showcityname);
    function showcityname(position) {
      var lat = position.coords.latitude;
      var longit = position.coords.longitude;
      var cntjson;
      var plus1;
      var ciel0, ciel1, ciel2, ciel3, ciel4;
      var apiKey = "5ac0c007ae8d872392d6a4bbe5fc7080";
      $.getJSON(
        "https://api.openweathermap.org/data/2.5/forecast?lat=" +
          lat +
          "&lon=" +
          longit +
          "&appid=" +
          apiKey +
          "&units=metric",
        function (data) {
          if (time == 0 || time >= 22) {
            cntjson = 39;
            plus1 = false;
          } else if (time >= 1 && time <= 3) {
            cntjson = 39;
            plus1 = true;
          } else if (time >= 4 && time <= 6) {
            cntjson = 38;
          } else if (time >= 7 && time <= 9) {
            cntjson = 37;
          } else if (time >= 10 && time <= 12) {
            cntjson = 36;
          } else if (time >= 13 && time <= 15) {
            cntjson = 35;
          } else if (time >= 16 && time <= 18) {
            cntjson = 34;
          } else if (time >= 19 && time <= 21) {
            cntjson = 33;
          }
          for (var i = 0; i <= cntjson; i++) {
            weatherlist.push(data["list"][i]["weather"][0]["main"]);
            templist.push(data["list"][i]["main"]["temp"]);
          }
          if (cntjson == 39 && plus1 == false) {
            météo0list = templist.slice(0, 9);
            météo1list = templist.slice(8, 17);
            météo2list = templist.slice(16, 25);
            météo3list = templist.slice(24, 33);
            météo4list = templist.slice(32, 40);
            ciel0 = weatherlist[4];
            ciel1 = weatherlist[12];
            ciel2 = weatherlist[20];
            ciel3 = weatherlist[28];
            ciel4 = weatherlist[36];
          } else if (cntjson == 39 && plus1 == true) {
            météo0list = templist.slice(0, 8);
            météo1list = templist.slice(7, 16);
            météo2list = templist.slice(15, 24);
            météo3list = templist.slice(23, 32);
            météo4list = templist.slice(31, 40);
            ciel0 = weatherlist[3];
            ciel1 = weatherlist[11];
            ciel2 = weatherlist[19];
            ciel3 = weatherlist[27];
            ciel4 = weatherlist[35];
          } else if (cntjson == 38) {
            météo0list = templist.slice(0, 7);
            météo1list = templist.slice(6, 15);
            météo2list = templist.slice(14, 23);
            météo3list = templist.slice(22, 31);
            météo4list = templist.slice(30, 39);
            ciel0 = weatherlist[2];
            ciel1 = weatherlist[10];
            ciel2 = weatherlist[18];
            ciel3 = weatherlist[26];
            ciel4 = weatherlist[34];
          } else if (cntjson == 37) {
            météo0list = templist.slice(0, 6);
            météo1list = templist.slice(5, 14);
            météo2list = templist.slice(13, 22);
            météo3list = templist.slice(21, 30);
            météo4list = templist.slice(29, 38);
            ciel0 = weatherlist[1];
            ciel1 = weatherlist[9];
            ciel2 = weatherlist[17];
            ciel3 = weatherlist[25];
            ciel4 = weatherlist[33];
          } else if (cntjson == 36) {
            météo0list = templist.slice(0, 5);
            météo1list = templist.slice(4, 13);
            météo2list = templist.slice(12, 21);
            météo3list = templist.slice(20, 29);
            météo4list = templist.slice(28, 37);
            ciel0 = weatherlist[0];
            ciel1 = weatherlist[8];
            ciel2 = weatherlist[16];
            ciel3 = weatherlist[24];
            ciel4 = weatherlist[32];
          } else if (cntjson == 35) {
            météo0list = templist.slice(0, 4);
            météo1list = templist.slice(3, 12);
            météo2list = templist.slice(11, 20);
            météo3list = templist.slice(19, 28);
            météo4list = templist.slice(27, 36);
            ciel0 = weatherlist[0];
            ciel1 = weatherlist[7];
            ciel2 = weatherlist[15];
            ciel3 = weatherlist[23];
            ciel4 = weatherlist[31];
          } else if (cntjson == 34) {
            météo0list = templist.slice(0, 3);
            météo1list = templist.slice(2, 11);
            météo2list = templist.slice(10, 19);
            météo3list = templist.slice(18, 27);
            météo4list = templist.slice(26, 35);
            ciel0 = weatherlist[0];
            ciel1 = weatherlist[6];
            ciel2 = weatherlist[14];
            ciel3 = weatherlist[22];
            ciel4 = weatherlist[30];
          } else if (cntjson == 33) {
            météo0list = templist.slice(0, 2);
            météo1list = templist.slice(1, 10);
            météo2list = templist.slice(9, 18);
            météo3list = templist.slice(17, 26);
            météo4list = templist.slice(25, 34);
            ciel0 = weatherlist[0];
            ciel1 = weatherlist[5];
            ciel2 = weatherlist[13];
            ciel3 = weatherlist[21];
            ciel4 = weatherlist[29];
          }
          ciellist = [$(".what").text(), ciel1, ciel2, ciel3, ciel4];
          météolist = ["#météo0", "#météo1", "#météo2", "#météo3", "#météo4"];
          colorlist = [color0, color1, color2, color3, color4];
          $("#temp0").html(météo0list);
          $("#temp1").html(météo1list);
          $("#temp2").html(météo2list);
          $("#temp3").html(météo3list);
          $("#temp4").html(météo4list);
          for (var i = 1; i <= 4; i++) {
            if (ciellist[i] == "Clear") {
              $(météolist[i]).addClass("sun");
              colorlist[i] = 0;
            } else if (ciellist[i] == "Rain" || ciellist[i] == "Drizzle") {
              $(météolist[i]).addClass("rain");
              colorlist[i] = 1;
            } else if (
              ciellist[i] == "Atmosphere" ||
              ciellist[i] == "Clouds" ||
              ciellist[i] == "Mist"
            ) {
              $(météolist[i]).addClass("cloud");
              colorlist[i] = 2;
            }
          }
        }
      );
    }
  }
});
$("#météo0").hover(
  function () {
    if (mode == false) {
      if ($(".what").text() == "Clear") {
        $("body").css({
          "background-image": "url(img/backsun.jpg)",
        });
      } else if (
        $(".what").text() == "Rain" ||
        $(".what").text() == "Drizzle"
      ) {
        $("body").css({
          "background-image": "url(img/backrain.jpg)",
        });
      } else {
        $("body").css({
          "background-image": "url(img/backcloud.jpg)",
        });
      }
    }
    $("#date0t").text(date0);
  },
  function () {
    $("#date0t").text("Aujourd'hui");
  }
);
$("#météo1").hover(function () {
  if (mode == false) {
    if (colorlist[1] == 0) {
      $("body").css({
        "background-image": "url(img/backsun.jpg)",
      });
    } else if (colorlist[1] == 1) {
      $("body").css({
        "background-image": "url(img/backrain.jpg)",
      });
    } else {
      $("body").css({
        "background-image": "url(img/backcloud.jpg)",
      });
    }
  }
});
$("#météo2").hover(function () {
  if (mode == false) {
    if (colorlist[2] == 0) {
      $("body").css({
        "background-image": "url(img/backsun.jpg)",
      });
    } else if (colorlist[2] == 1) {
      $("body").css({
        "background-image": "url(img/backrain.jpg)",
      });
    } else {
      $("body").css({
        "background-image": "url(img/backcloud.jpg)",
      });
    }
  }
});
$("#météo3").hover(function () {
  if (mode == false) {
    if (colorlist[3] == 0) {
      $("body").css({
        "background-image": "url(img/backsun.jpg)",
      });
    } else if (colorlist[3] == 1) {
      $("body").css({
        "background-image": "url(img/backrain.jpg)",
      });
    } else {
      $("body").css({
        "background-image": "url(img/backcloud.jpg)",
      });
    }
  }
});
$("#météo4").hover(function () {
  if (mode == false) {
    if (colorlist[4] == 0) {
      $("body").css({
        "background-image": "url(img/backsun.jpg)",
      });
    } else if (colorlist[4] == 1) {
      $("body").css({
        "background-image": "url(img/backrain.jpg)",
      });
    } else {
      $("body").css({
        "background-image": "url(img/backcloud.jpg)",
      });
    }
  }
});
$(document).ready(function () {
  // geolocation enabled

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(showcityname);

    function showcityname(position) {
      var lat = position.coords.latitude;
      var longit = position.coords.longitude;
      var city_name;
      var temp;
      var pressure;
      var wind_speed;
      var country_name;
      var weather_description;
      var apiKey = "5ac0c007ae8d872392d6a4bbe5fc7080";

      $.getJSON(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
          lat +
          "&lon=" +
          longit +
          "&appid=" +
          apiKey +
          "&units=metric",
        function (data) {
          city_name = data["name"];
          country_name = data["sys"]["country"];
          weather_description = data["weather"][0]["main"];
          temp = data["main"]["temp"];
          pressure = data["main"]["pressure"];
          wind_speed = data["wind"]["speed"];

          $("#cityname").html(city_name);
          $(".temp").html(Math.round(temp) + "°");
          $(".pressure").html(pressure + " mBar");
          $(".wind-spd").html(wind_speed + " m/s");
          $(".what").html(weather_description);
          if (weather_description == "Clear" && mode == 0) {
            $("#TB").attr("src", "img/triangle bas sun.png");
            $("#TH").attr("src", "img/triangle haut sun.png");
            $("#carréhaut, #carrébas").attr("src", "img/carré sun.png");
          } else if (
            (weather_description == "Rain" && mode == 0) ||
            (weather_description == "Drizzle" && mode == 0)
          ) {
            $("#TB").attr("src", "img/triangle bas rain.png");
            $("#TH").attr("src", "img/triangle haut rain.png");
            $("#carréhaut, #carrébas").attr("src", "img/carré rain.png");
          } else if (
            (weather_description == "Atmosphere" && mode == 0) ||
            (weather_description == "Clouds" && mode == 0) ||
            (weather_description == "Mist" && mode == 0)
          ) {
            $("#TB").attr("src", "img/triangle bas cloud.png");
            $("#TH").attr("src", "img/triangle haut cloud.png");
            $("#carréhaut, #carrébas").attr("src", "img/carré cloud.png");
          }
        }
      );
    }
  }
});
$.fn.nightmode = function () {
  var weather;
  if (meteo == 0) {
    weather = "sun";
  } else if (meteo == 1) {
    weather = "rain";
  } else {
    weather = "cloud";
  }
  if (mode == true) {
    for (var i = 0; i <= 4; i++) {
      if (ciellist[i] == "Clear") {
        $(météolist[i]).css({ backgroundColor: "rgb(236, 215, 33)" });
        colorlist[i] = 0;
      } else if (ciellist[i] == "Rain" || ciellist[i] == "Drizzle") {
        $(météolist[i]).css({ backgroundColor: "rgb(31, 103, 236)" });
        colorlist[i] = 1;
      } else {
        $(météolist[i]).css({ backgroundColor: "rgb(99, 96, 89)" });
        colorlist[i] = 2;
      }
    }
    $(
      ".vérité, .calendrier, body, #mode, #météo1, #météo2, #météo3, #météo4"
    ).toggleClass("night");
    $("#mode").text("Jour");
    $("#météo0, #météo1, #météo2, #météo3, #météo4").css({ color: "black" });
    $("#TB").attr("src", "img/triangle bas " + weather + ".png");
    $("#TH").attr("src", "img/triangle haut " + weather + ".png");
    $("#carréhaut, #carrébas").attr("src", "img/carré " + weather + ".png");
    $("#cityname").css({ color: "white" });
    mode = false;
  } else {
    $(".vérité, .calendrier, body, #mode").toggleClass("night");
    $("#météo0, #météo1, #météo2, #météo3, #météo4").css({
      backgroundColor: "rgb(6, 15, 35)",
      color: "white",
    });
    $("#mode").text("Nuit");
    $("#TB").attr("src", "img/triangle bas night.png");
    $("#TH").attr("src", "img/triangle haut night.png");
    $("#carréhaut, #carrébas").attr("src", "img/carré night.png");
    $("#cityname").css({ color: "white" });
    mode = true;
  }
  if (mode == true && modemétéo == true) {
    $("#météo").css({ color: "white" });
    $("body").css({ backgroundImage: "url(img/backnight.png)" });
  } else if (mode == false && modemétéo == true) {
    $("#météo").css({ color: "black" });
  }
};
// night mode auto 18h - 10h
$(document).ready(function () {
  if (time > 17 || time < 10) {
    $(this).nightmode();
  }
});
// animations de départ
$(document).ready(function () {
  setTimeout(function () {
    $(".calendrier, .vérité").animate({ top: "-=7%", opacity: "1" }, 750);
    $("#weather, h1, #cityname").animate({ opacity: "1" }, 750);
    $("#mode").animate({ opacity: "1", top: "-=5%" }, 750);
  }, 1200);
  $("#TB").animate(
    { top: "+=8.09%", left: "-=8.09%", opacity: "1", width: "50%" },
    1000
  );
  $("#TH").animate(
    { top: "-=8.09%", left: "+=8.09%", opacity: "1", width: "50%" },
    1000
  );
  for (var i = 0; i <= 7; i++) {
    if (date0 == dateEN[i]) {
      date0 = dateFR[i];
      if (i++ > dateFR.length) {
        date1 = dateFR[0];
        date2 = dateFR[1];
        date3 = dateFR[2];
        date4 = dateFR[3];
      } else date1 = dateFR[i];
      if (i++ > dateFR.length) {
        date2 = dateFR[0];
        date3 = dateFR[1];
        date4 = dateFR[2];
      } else date2 = dateFR[i];
      if (i++ > dateFR.length) {
        date3 = dateFR[0];
        date4 = dateFR[1];
      } else date3 = dateFR[i];
      if (i++ > dateFR.length) {
        date4 = dateFR[0];
      } else date4 = dateFR[i];
    }
  }
  datelist = [date0, date1, date2, date3, date4];
  for (i = 0; i <= datelist.length; i++) {
    $(datetext[i]).text(datelist[i]);
  }
});
// var météo
$(document).ajaxStop(function () {
  var temps;
  temps = $(".what").text();
  if (temps == "Clear") {
    meteo = 0;
  } else if (temps == "Rain" || temps == "Drizzle") {
    meteo = 1;
  } else {
    meteo = 2;
  }
  $("#météo0").removeClass("cloud");
  if (temps == "Clear") {
    $("#météo0").addClass("sun");
  } else if (temps == "Rain" || meteo == "Drizzle") {
    $("#météo0").addClass("rain");
  } else {
    $("#météo0").addClass("cloud");
  }
});
// animation hover + triangles
$(".calendrier, .vérité, #météo0, #météo1, #météo2, #météo3, #météo4").hover(
  function () {
    $(this).animate({ top: "+=4%" }, 250);
  },
  function () {
    $(this).animate({ top: "-=4%" }, 250);
  }
);
$("#hoverhaut, #weather").hover(function () {
  $("#TH").toggleClass("wow");
});
$("#hoverbas").hover(function () {
  $("#TB").toggleClass("wow");
});
//redirection boutons
$(".calendrier").on("click", function () {
  window.location.href = "avent/avent.html";
});
$(".vérité").on("click", function () {
  window.location.href = "vérité.html";
});
// night mode bouton
$("#mode").on("click", function () {
  $(this).nightmode();
});
// bouton météo
$("#hoverhaut, #weather").on("click", function () {
  $("#carréhaut, #carrébas").css({ opacity: "1" });
  if (modemétéo == false) {
    $("h1").animate({ opacity: "0" }, 1000);
    $("#weather").animate({ top: "-=1%", left: "-=28%" }, 1300);
    $("#cityname").animate({ fontSize: "200%", left: "-=6%" }, 1300);
    $(".temp").animate({ opacity: "0" }, 250);
    $(".vérité, .calendrier").animate({ top: "+=20%", opacity: "0" }, 1300);
    $(".vérité, .calendrier").animate({ top: "300%" }, 1);
    $("#carréhaut").animate({ top: "+=99%" }, 700);
    setTimeout(function () {
      $("#carréhaut").animate({ left: "-=99%" }, 500);
    }, 700);
    $("#carrébas").animate({ top: "-=99%" }, 700);
    setTimeout(function () {
      $("#carrébas").animate({ left: "+=99%" }, 500);
    }, 700);
    $("#météo0").css({ top: "-3%" });
    $("#météo0").animate({ opacity: "1", top: "+=20%" }, 1300);
    $("#météo1").css({ top: "44%" });
    $("#météo1").animate({ opacity: "1", left: "+=20%" }, 1300);
    $("#météo4").css({ top: "44%" });
    $("#météo4").animate({ opacity: "1", left: "-=20%" }, 1300);
    setTimeout(function () {
      $("#météo2, #météo3").css({ top: "64%" });
      $("#météo2, #météo3").animate({ opacity: "1", top: "-=20%" }, 1300);
    }, 1300);
    modemétéo = true;
    if (mode == true) {
      $("#météo").animate({ fontSize: "+=100%", color: "white" }, 1300);
      $("#météo").css({ color: "white" });
      $("body").css({ backgroundImage: "url(img/backnight.png)" });
    } else {
      $("#météo").animate({ fontSize: "+=100%", color: "black" }, 1300);
      $("#météo").css({ color: "black" });
    }
  } else {
    $("h1").animate({ opacity: "1" }, 1000);
    $("#cityname").animate({ fontSize: "90%", left: "+=6%" }, 1300);
    $("#weather").animate({ top: "+=1%", left: "+=28%", color: "white" }, 1300);
    $("h1").animate({ opacity: "1" }, 1500);
    $("#météo").animate({ fontSize: "-=100%", color: "white" }, 1300);
    $("#météo").css({ color: "white" });
    $(".temp, #cityname").animate({ opacity: "1" }, 250);
    $(".vérité, .calendrier").css({ top: "43.8%" });
    $(".vérité, .calendrier").animate({ top: "-=20%", opacity: "1" }, 1300);
    $("#carréhaut").animate({ left: "+=99%" }, 500);
    setTimeout(function () {
      $("#carréhaut").animate({ top: "-=99%" }, 700);
    }, 500);
    $("#carrébas").animate({ left: "-=99%" }, 500);
    setTimeout(function () {
      $("#carrébas").animate({ top: "+=99%" }, 700);
    }, 500);
    $("#météo0").animate({ opacity: "0", top: "-=20%" }, 1300);
    $("#météo0").animate({ top: "300%" }, 1);
    $("#météo1").animate({ left: "-=20%", opacity: "0" }, 1300);
    $("#météo4").animate({ left: "+=20%", opacity: "0" }, 1300);
    setTimeout(function () {
      $("#météo2, #météo3").animate({ opacity: "0", top: "+=33%" }, 1300);
      $("#météo0, #météo1, #météo2, #météo3, #météo4").animate(
        { top: "300%" },
        1
      );
    }, 1300);
    setTimeout(function () {
      $("body").css({ backgroundImage: "" });
    }, 2601);
    modemétéo = false;
  }
});
