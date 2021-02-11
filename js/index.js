// initialisation : var + ajax
var mode = false;
var meteo = "lol";
var modemétéo = false;
var trier = false;
var weatherlist = [];
var templist = [];
var minmaxlist = [];
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
var mid0, mid1, mid2, mid3, mid4;
var midlist = [mid0, mid1, mid2, mid3, mid4];
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
          }
          function APImétéo(plus1, i) {
            if (plus1 == true && i == 0) {
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
            } else if (plus1 == false && i == 0) {
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
            } else {
              météo0list = templist.slice(0, 8 - i);
              météo1list = templist.slice(7 - i, 16 - i);
              météo2list = templist.slice(15 - i, 24 - i);
              météo3list = templist.slice(23 - i, 32 - i);
              météo4list = templist.slice(31 - i, 40 - i);
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
          var Graph0 = $.extend([], météo0list);
          console.log(Graph0);
          var Graph1 = $.extend([], météo1list);
          var Graph2 = $.extend([], météo2list);
          var Graph3 = $.extend([], météo3list);
          var Graph4 = $.extend([], météo4list);
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
      ".vérité, .calendrier, body, #mode, #météo1, #météo2, #météo3, #météo4, #Graph"
    ).toggleClass("night");
    $("#mode").text("Jour");
    $("#météo0, #météo1, #météo2, #météo3, #météo4").css({ color: "black" });
    $("#TB").attr("src", "img/triangle bas " + weather + ".png");
    $("#TH").attr("src", "img/triangle haut " + weather + ".png");
    $("#carréhaut, #carrébas").attr("src", "img/carré " + weather + ".png");
    $("#cityname").css({ color: "white" });
    chart.options.legend.labels.fontColor = "black";
    chart.options.scales.xAxes[0].ticks.fontColor = "black";
    chart.options.scales.xAxes[0].gridLines.color = "black";
    chart.options.scales.xAxes[0].scaleLabel.fontColor = "black";
    chart.options.scales.yAxes[0].ticks.fontColor = "black";
    chart.options.scales.yAxes[0].gridLines.color = "black";
    chart.options.scales.yAxes[0].scaleLabel.fontColor = "black";
    chart.update();
    mode = false;
  } else {
    $(".vérité, .calendrier, body, #mode, #Graph").toggleClass("night");
    $("#météo0, #météo1, #météo2, #météo3, #météo4").css({
      backgroundColor: "rgb(6, 15, 35)",
      color: "white",
    });
    $("#mode").text("Nuit");
    $("#TB").attr("src", "img/triangle bas night.png");
    $("#TH").attr("src", "img/triangle haut night.png");
    $("#carréhaut, #carrébas").attr("src", "img/carré night.png");
    $("#cityname").css({ color: "white" });
    chart.options.legend.labels.fontColor = "white";
    chart.options.scales.xAxes[0].ticks.fontColor = "white";
    chart.options.scales.xAxes[0].gridLines.color = "white";
    chart.options.scales.xAxes[0].scaleLabel.fontColor = "white";
    chart.options.scales.yAxes[0].ticks.fontColor = "white";
    chart.options.scales.yAxes[0].gridLines.color = "white";
    chart.options.scales.yAxes[0].scaleLabel.fontColor = "white";
    chart.update();
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
      k = dateFR.length;
      k--;
      console.log(k);
      date0 = dateFR[i];
      if (i++ >= k) {
        date1 = dateFR[0];
        date2 = dateFR[1];
        date3 = dateFR[2];
        date4 = dateFR[3];
      } else date1 = dateFR[i];
      if (i++ >= k) {
        date2 = dateFR[0];
        date3 = dateFR[1];
        date4 = dateFR[2];
      } else date2 = dateFR[i];
      if (i++ >= k) {
        date3 = dateFR[0];
        date4 = dateFR[1];
      } else date3 = dateFR[i];
      if (i++ >= k) {
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
});
$("#météo0").on("click", function () {
  showGraph();
});
$("#météo1").on("click", function () {
  showGraph();
});
$("#météo2").on("click", function () {
  showGraph();
});
$("#météo3").on("click", function () {
  showGraph();
});
$("#météo4").on("click", function () {
  showGraph();
});
var ctx = document.getElementById("Graphtemp").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: ["0h", "3h", "6h", "9h", "12h", "15h", "18h", "21h", "0"],
    datasets: [
      {
        label: "Demain",
        backgroundColor: "rgb(207, 58, 192)",
        borderColor: "rgb(207, 58, 192)",
        fill: false,
      },
      {
        label: "Demain + 1",
        backgroundColor: "rgb(136, 5, 250)",
        borderColor: "rgb(136, 5, 250)",
        fill: false,
      },
      {
        label: "Demain + 2",
        backgroundColor: "rgb(132, 250, 5)",
        borderColor: "rgb(132, 250, 5)",
        fill: false,
      },
      {
        label: "Demain + 3",
        backgroundColor: "rgb(250, 152, 5)",
        borderColor: "rgb(250, 152, 5)",
        fill: false,
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
  $("#météo0").animate({ top: "-=40%", opacity: "0" }, 750);
  $("#météo2, #météo3").animate({ top: "+=40%", opacity: "0" }, 750);
  $("#météo1").animate({ left: "-=30%", opacity: "0" }, 750);
  $("#météo4").animate({ left: "+=30%", opacity: "0" }, 750);
  $("#Graph").animate({ top: "30%", opacity: "1" }, 1000);
}
