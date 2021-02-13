// initialisation : var + ajax
var mode = false;
var meteo = "lol";
var modemétéo = false;
var trier = false;
var modegraph = false;
var proposmode = false;
var weatherlist = [];
var templist = [];
var minmaxlist = [];
var dt = new Date();
var time = dt.getHours();
var météo0list, météo1list, météo2list, météo3list, météo4list;
var Graph0, Graph1, Graph2, Graph3, Graph4;
var color0, color1, color2, color3, color4;
var ciellist, météolist, colorlist;
var date0 = moment().format("dddd");
var date1 = moment().add(1, "days").format("dddd");
var date2 = moment().add(2, "days").format("dddd");
var date3 = moment().add(3, "days").format("dddd");
var date4 = moment().add(4, "days").format("dddd");
var datelist = [];
var datetext = ["#date0", "#date1", "#date2", "#date3", "#date4"];
var mid0, mid1, mid2, mid3, mid4;
var midlist = [mid0, mid1, mid2, mid3, mid4];
var wind0, wind1, wind2, wind3, wind4;
var windlist = [];
var hum0, hum1, hum2, hum3, hum4;
var humlist = [];
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
var minmax0, minmax1, minmax2, minmax3, minmax4;
function updateWeatherChart(number, content) {
  chart.data.datasets[number].data = content;
  chart.update();
}
function updateDate(number, content) {
  chart.data.datasets[number].label = content;
  chart.update();
}
function updateYaxis(content) {
  chart.options.scales.yAxes[0].scaleLabel.labelString = content;
  chart.update();
}
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
      var APIn;
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
            APIn = 0;
          } else if (time >= 1 && time <= 3) {
            cntjson = 39;
            plus1 = true;
            APIn = 0;
          } else if (time >= 4 && time <= 6) {
            cntjson = 38;
            APIn = 1;
          } else if (time >= 7 && time <= 9) {
            cntjson = 37;
            APIn = 2;
          } else if (time >= 10 && time <= 12) {
            cntjson = 36;
            APIn = 3;
          } else if (time >= 13 && time <= 15) {
            cntjson = 35;
            APIn = 4;
          } else if (time >= 16 && time <= 18) {
            cntjson = 34;
            APIn = 5;
          } else if (time >= 19 && time <= 21) {
            cntjson = 33;
            APIn = 6;
          }
          for (var i = 0; i <= cntjson; i++) {
            weatherlist.push(data["list"][i]["weather"][0]["main"]);
            templist.push(data["list"][i]["main"]["temp"]);
            windlist.push(data["list"][i]["wind"]["speed"]);
            humlist.push(data["list"][i]["main"]["humidity"]);
          }
          function APImétéo(plus1, i) {
            if (plus1 == true && i == 0) {
              météo0list = templist.slice(0, 9);
              météo1list = templist.slice(8, 17);
              météo2list = templist.slice(16, 25);
              météo3list = templist.slice(24, 33);
              météo4list = templist.slice(32, 40);
              wind0 = windlist.slice(0, 9);
              wind1 = windlist.slice(8, 17);
              wind2 = windlist.slice(16, 25);
              wind3 = windlist.slice(24, 33);
              wind4 = windlist.slice(32, 40);
              hum0 = humlist.slice(0, 9);
              hum1 = humlist.slice(8, 17);
              hum2 = humlist.slice(16, 25);
              hum3 = humlist.slice(24, 33);
              hum4 = humlist.slice(32, 40);
              ciel0 = weatherlist[4];
              ciel1 = weatherlist[12];
              ciel2 = weatherlist[20];
              ciel3 = weatherlist[28];
              ciel4 = weatherlist[36];
            } else if (plus1 == false && i == 0) {
              météo0list = templist.slice(0, 8);
              météo1list = templist.slice(7, 16);
              météo2list = templist.slice(15, 24);
              météo3list = templist.slice(23, 32);
              météo4list = templist.slice(31, 40);
              wind0 = windlist.slice(0, 8);
              wind1 = windlist.slice(7, 16);
              wind2 = windlist.slice(15, 24);
              wind3 = windlist.slice(23, 32);
              wind4 = windlist.slice(31, 40);
              hum0 = humlist.slice(0, 8);
              hum1 = humlist.slice(7, 16);
              hum2 = humlist.slice(15, 24);
              hum3 = humlist.slice(23, 32);
              hum4 = humlist.slice(31, 40);
              ciel0 = weatherlist[3];
              ciel1 = weatherlist[11];
              ciel2 = weatherlist[19];
              ciel3 = weatherlist[27];
              ciel4 = weatherlist[35];
            } else {
              météo0list = templist.slice(0, 8 - i);
              météo1list = templist.slice(7 - i, 16 - i);
              météo2list = templist.slice(15 - i, 24 - i);
              météo3list = templist.slice(23 - i, 32 - i);
              météo4list = templist.slice(31 - i, 40 - i);
              wind0 = windlist.slice(0, 8 - i);
              wind1 = windlist.slice(7 - i, 16 - i);
              wind2 = windlist.slice(15 - i, 24 - i);
              wind3 = windlist.slice(23 - i, 32 - i);
              wind4 = windlist.slice(31 - i, 40 - i);
              hum0 = humlist.slice(0, 8 - i);
              hum1 = humlist.slice(7 - i, 16 - i);
              hum2 = humlist.slice(15 - i, 24 - i);
              hum3 = humlist.slice(23 - i, 32 - i);
              hum4 = humlist.slice(31 - i, 40 - i);
              if (i > 3) {
                ciel0 = weatherlist[0];
              } else {
                ciel0 = weatherlist[3 - i];
              }
              ciel1 = weatherlist[11 - i];
              ciel2 = weatherlist[19 - i];
              ciel3 = weatherlist[27 - i];
              ciel4 = weatherlist[35 - i];
            }
          }
          APImétéo(plus1, APIn);
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
          minmax0 = météo0list;
          minmax1 = météo1list;
          minmax2 = météo2list;
          minmax3 = météo3list;
          minmax4 = météo4list;
          Graph0 = $.extend([], météo0list);
          Graph1 = $.extend([], météo1list);
          Graph2 = $.extend([], météo2list);
          Graph3 = $.extend([], météo3list);
          Graph4 = $.extend([], météo4list);
          minmaxlist = [
            météo0list,
            météo1list,
            météo2list,
            météo3list,
            météo4list,
          ];
          updateWeatherChart(0, Graph1);
          updateWeatherChart(1, Graph2);
          updateWeatherChart(2, Graph3);
          updateWeatherChart(3, Graph4);
          $("#graphTitle").text("Température");
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
      ".vérité, .calendrier, body, #mode, #météo1, #météo2, #météo3, #météo4, #Graph, #TempératureBouton, #VentBouton, #HumiditéBouton, #RetourBouton, #Outils, #Durée, #languages, #librairies"
    ).toggleClass("night");
    $("#mode").text("Jour");
    $("#météo0, #météo1, #météo2, #météo3, #météo4").css({ color: "black" });
    $("#TB").attr("src", "img/triangle bas " + weather + ".png");
    $("#TH").attr("src", "img/triangle haut " + weather + ".png");
    $("#carréhaut, #carrébas").attr("src", "img/carré " + weather + ".png");
    $("#HTML").attr("src", "img/HTML day.png");
    $("#CSS").attr("src", "img/CSS day.png");
    $("#JS").attr("src", "img/JS day.png");
    $("#JQUERY").attr("src", "img/logo-jquery day.png");
    $("#cityname").css({ color: "white" });
    chart.options.legend.labels.fontColor = "black";
    pie.options.legend.labels.fontColor = "black";
    pie.options.title.fontColor = "black";
    chart.options.scales.xAxes[0].ticks.fontColor = "black";
    chart.options.scales.xAxes[0].gridLines.color = "black";
    chart.options.scales.xAxes[0].scaleLabel.fontColor = "black";
    chart.options.scales.yAxes[0].ticks.fontColor = "black";
    chart.options.scales.yAxes[0].gridLines.color = "black";
    chart.options.scales.yAxes[0].scaleLabel.fontColor = "black";
    chart.update();
    pie.update();
    mode = false;
  } else {
    $(
      ".vérité, .calendrier, body, #mode, #Graph, #TempératureBouton, #VentBouton, #HumiditéBouton, #RetourBouton, #Outils, #Durée, #languages, #librairies"
    ).toggleClass("night");
    $("#météo0, #météo1, #météo2, #météo3, #météo4").css({
      backgroundColor: "rgb(6, 15, 35)",
      color: "white",
    });
    $("#mode").text("Nuit");
    $("#TB").attr("src", "img/triangle bas night.png");
    $("#TH").attr("src", "img/triangle haut night.png");
    $("#HTML").attr("src", "img/HTML night.png");
    $("#CSS").attr("src", "img/CSS night.png");
    $("#JS").attr("src", "img/JS night.png");
    $("#JQUERY").attr("src", "img/logo-jquery night.png");
    $("#carréhaut, #carrébas").attr("src", "img/carré night.png");
    $("#cityname").css({ color: "white" });
    chart.options.legend.labels.fontColor = "white";
    pie.options.legend.labels.fontColor = "white";
    pie.options.title.fontColor = "white";
    chart.options.scales.xAxes[0].ticks.fontColor = "white";
    chart.options.scales.xAxes[0].gridLines.color = "white";
    chart.options.scales.xAxes[0].scaleLabel.fontColor = "white";
    chart.options.scales.yAxes[0].ticks.fontColor = "white";
    chart.options.scales.yAxes[0].gridLines.color = "white";
    chart.options.scales.yAxes[0].scaleLabel.fontColor = "white";
    chart.update();
    pie.update();
    mode = true;
  }
  if (mode == true && modemétéo == true) {
    $("#météo").css({ color: "white" });
    $("body").css({ backgroundImage: "url(img/backnight.png)" });
  } else if (mode == false && modemétéo == true) {
    $("#météo").css({ color: "black" });
    var pic0 = "url(img/backsun.jpg)";
    var pic1 = "url(img/backrain.jpg)";
    var pic2 = "url(img/backcloud.jpg)";
    var piclist = [pic0, pic1, pic2];
    var random = Math.floor(Math.random() * Math.floor(3));
    $("body").css({
      "background-image": piclist[random],
    });
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
    $("#weather, h1, #cityname, #Propos").animate({ opacity: "1" }, 750);
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
  function date() {
    for (var i = 0; i <= 7; i++) {
      if (date0 == dateEN[i]) {
        k = dateFR.length;
        k--;
        date0 = dateFR[i];
        console.log("a" + i);
        if (i++ >= k) {
          console.log(i);
          date1 = dateFR[0];
          date2 = dateFR[1];
          date3 = dateFR[2];
          date4 = dateFR[3];
          return;
        } else date1 = dateFR[i];
        console.log("b" + i);
        if (i++ >= k) {
          console.log("c" + i);
          date2 = dateFR[0];
          date3 = dateFR[1];
          date4 = dateFR[2];
          return;
        } else date2 = dateFR[i];
        if (i++ >= k) {
          console.log("d" + i);
          date3 = dateFR[0];
          date4 = dateFR[1];
          return;
        } else date3 = dateFR[i];
        console.log(i);
        if (i++ >= k) {
          date4 = dateFR[0];
          return;
        } else date4 = dateFR[i];
      }
    }
  }
  date();
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
$("#hoverbas, #Propos").hover(function () {
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
  if (modegraph == false && proposmode == false) {
    if (modemétéo == false) {
      $("h1").animate({ opacity: "0" }, 1000);
      $("#weather").animate({ top: "-=1%", left: "-=28%" }, 1300);
      $("#cityname").animate({ fontSize: "190%", left: "-=6%" }, 1300);
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
      $("#weather").animate(
        { top: "+=1%", left: "+=28%", color: "white" },
        1300
      );
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
    if (trier == false) {
      for (var i = 0; i <= 4; i++) {
        minmaxlist[i].sort(function (a, b) {
          return a - b;
        });
      }
      for (var i = 0; i <= 4; i++) {
        $("#min" + i).text(minmaxlist[i][0]);
        var k = minmaxlist[i].length;
        k -= 1;
        $("#max" + i).text(minmaxlist[i][k]);
      }
      for (var i = 0; i <= 4; i++) {
        var z = minmaxlist[i].length;
        var e = 0;
        z--;
        for (var k = 0; k < minmaxlist[i].length; k++) {
          e += minmaxlist[i][k];
          if (k == z) {
            midlist[i] = Math.round((e / minmaxlist[i].length) * 100) / 100;
            $("#mid" + i).text(midlist[i]);
          }
        }
      }
      trier = true;
    }
  }
});
$("#météo0").on("click", function () {
  showGraph(99);
  for (i = 0, k = 1; i <= 3; i++, k++) {
    updateDate(i, datelist[k]);
  }
});
$("#météo1").on("click", function () {
  showGraph(0);
  for (i = 0, k = 1; i <= 3; i++, k++) {
    updateDate(i, datelist[k]);
  }
});
$("#météo2").on("click", function () {
  showGraph(1);
  for (i = 0, k = 1; i <= 3; i++, k++) {
    updateDate(i, datelist[k]);
  }
});
$("#météo3").on("click", function () {
  showGraph(2);
  for (i = 0, k = 1; i <= 3; i++, k++) {
    updateDate(i, datelist[k]);
  }
});
$("#météo4").on("click", function () {
  showGraph(3);
  for (i = 0, k = 1; i <= 3; i++, k++) {
    updateDate(i, datelist[k]);
  }
});
$("#RetourBouton").on("click", function () {
  showGraph(i);
});
var ctx = document.getElementById("Graphtemp").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: ["0h", "3h", "6h", "9h", "12h", "15h", "18h", "21h", "0h"],
    datasets: [
      {
        label: "Demain",
        backgroundColor: "rgb(207, 58, 192)",
        borderColor: "rgb(207, 58, 192)",
        fill: false,
        hidden: true,
      },
      {
        label: date1,
        backgroundColor: "rgb(136, 5, 250)",
        borderColor: "rgb(136, 5, 250)",
        fill: false,
        hidden: true,
      },
      {
        label: "Demain + 2",
        backgroundColor: "rgb(132, 250, 5)",
        borderColor: "rgb(132, 250, 5)",
        fill: false,
        hidden: true,
      },
      {
        label: "Demain + 3",
        backgroundColor: "rgb(250, 152, 5)",
        borderColor: "rgb(250, 152, 5)",
        fill: false,
        hidden: true,
      },
    ],
  },

  options: {
    legend: {
      labels: {
        fontColor: "black",
        fontSize: 20,
      },
    },
    responsive: true,
    scales: {
      xAxes: [
        {
          display: true,
          ticks: {
            fontColor: "black",
            fontSize: 20,
          },
          gridLines: {
            display: true,
            color: "black",
          },
          scaleLabel: {
            display: true,
            labelString: "Heure",
            fontColor: "black",
            fontSize: 20,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
            fontColor: "black",
            fontSize: 20,
          },
          display: true,
          gridLines: {
            display: true,
            color: "black",
          },
          scaleLabel: {
            display: true,
            labelString: "Température (°)",
            fontColor: "black",
            fontSize: 20,
          },
        },
      ],
    },
  },
});
function showGraph(i) {
  if (modegraph == false) {
    $("#météo0").animate({ top: "-=40%", opacity: "0" }, 750);
    $("#météo2, #météo3").animate({ top: "+=60%", opacity: "0" }, 850);
    $("#météo1").animate({ left: "-=30%", opacity: "0" }, 750);
    $("#météo4").animate({ left: "+=30%", opacity: "0" }, 750);
    $("#Graph").animate({ top: "14.5%", opacity: "1" }, 1000);
    $("#weather").animate({ top: "-=25%" }, 750);
    $("#MétéoTitle").animate({ opacity: "1" }, 750);
    if (i <= 3) {
      chart.data.datasets[i].hidden = false;
      chart.update();
    } else {
      chart.data.datasets[0].hidden = false;
      chart.data.datasets[1].hidden = false;
      chart.data.datasets[2].hidden = false;
      chart.data.datasets[3].hidden = false;
      chart.update();
    }
    modegraph = true;
  } else {
    $("#météo0").animate({ top: "+=40%", opacity: "1" }, 750);
    $("#météo2, #météo3").animate({ top: "-=60%", opacity: "1" }, 850);
    $("#météo1").animate({ left: "+=30%", opacity: "1" }, 750);
    $("#météo4").animate({ left: "-=30%", opacity: "1" }, 750);
    $("#Graph").animate({ top: "100%", opacity: "0" }, 1000);
    $("#weather").animate({ top: "+=25%" }, 750);
    $("#MétéoTitle").animate({ opacity: "0" }, 750);
    chart.data.datasets[0].hidden = true;
    chart.data.datasets[1].hidden = true;
    chart.data.datasets[2].hidden = true;
    chart.data.datasets[3].hidden = true;
    chart.update();
    modegraph = false;
  }
}
$("#TempératureBouton").on("click", function () {
  updateWeatherChart(0, Graph1);
  updateWeatherChart(1, Graph2);
  updateWeatherChart(2, Graph3);
  updateWeatherChart(3, Graph4);
  $("#graphTitle").text("Température");
  updateYaxis("Température (°)");
});
$("#VentBouton").on("click", function () {
  updateWeatherChart(0, wind1);
  updateWeatherChart(1, wind2);
  updateWeatherChart(2, wind3);
  updateWeatherChart(3, wind4);
  updateYaxis("Vitesse (Km/h)");
  $("#graphTitle").text("Vent");
});
$("#HumiditéBouton").on("click", function () {
  updateWeatherChart(0, hum1);
  updateWeatherChart(1, hum2);
  updateWeatherChart(2, hum3);
  updateWeatherChart(3, hum4);
  $("#graphTitle").text("Humidité");
  updateYaxis("Humidité (%)");
});
$("#hoverbas, #Propos").on("click", function () {
  if (proposmode == false && modegraph == false && modemétéo == false) {
    $("#Propos").animate({ top: "-3%", left: "43.5%" }, 750);
    $("h1").animate({ opacity: "0" }, 750);
    setTimeout(function () {
      $("#librairies, #languages").animate({ opacity: "1", left: "2%" }, 950);
      $("#Durée, #Outils").animate({ opacity: "1", left: "74%" }, 950);
    }, 200);
    $("#GraphLang").animate({ opacity: "1" }, 2300);
    proposmode = true;
  } else if (modemétéo == false && modegraph == false) {
    $("#Propos").animate({ top: "84%", left: "6%" }, 750);
    $("h1").animate({ opacity: "1" }, 750);
    setTimeout(function () {
      $("#librairies, #languages").animate({ opacity: "0", left: "-52%" }, 950);
      $("#Durée, #Outils").animate({ opacity: "0", left: "124%" }, 950);
    }, 200);
    $("#GraphLang").animate({ opacity: "0" }, 1800);
    proposmode = false;
  }
});
var pie = new Chart(document.getElementById("GraphLang"), {
  type: "pie",
  data: {
    labels: ["HTML", "CSS", "JavaScript"],
    datasets: [
      {
        label: "Languages (%)",
        backgroundColor: ["#e02e00", "#006eba", "#e4bd00"],
        borderColor: ["#f34000", "#0098d9", "#ffd800"],
        data: [8.8, 23.3, 67.9],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Pourcentage de languages utilisés",
      fontSize: 20,
    },
    legend: {
      labels: {
        fontColor: "black",
        fontSize: 15,
      },
    },
    responsive: true,
  },
});
$("#Github").on("click", function () {
  window.open("https://desktop.github.com");
});
$("#JQUERY").on("click", function () {
  window.open("https://jquery.com");
});
$("#CSS").on("click", function () {
  window.open("https://developer.mozilla.org/fr/docs/Web/CSS");
});
$("#HTML").on("click", function () {
  window.open("https://developer.mozilla.org/fr/docs/Web/HTML");
});
$("#JS").on("click", function () {
  window.open("https://developer.mozilla.org/fr/docs/Web/JavaScript");
});
$("#VSCODE").on("click", function () {
  window.open("https://code.visualstudio.com");
});
$("#Photoshop").on("click", function () {
  window.open("https://www.adobe.com/fr/products/photoshop.html");
});
"#CHART".on("click", function () {
  window.open("https://www.chartjs.org");
});
"#MOMENT".on("click", function () {
  window.open("https://momentjs.com");
});
