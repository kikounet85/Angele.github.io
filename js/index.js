// initialisation : var + ajax
var mode = false;
var meteo = "lol";
var modemétéo = false;
var weatherlist = [];
var templist = [];
var dt = new Date();
var time = dt.getHours();
var météo0list, météo1list, météo2list, météo3list, météo4list;
$.fn.nightmode = function () {
    var weather;
    if (meteo == 0) {
        weather = "sun";
    } else if (meteo == 1) {
        weather = "rain";
    } else {
        weather = "cloud"
    }
    if (mode == true) {
        $(".vérité, .calendrier, body, #mode, #météo0, #météo1, #météo2, #météo3, #météo4").toggleClass("night");
        $("#mode").text("Jour");
        $("#TB").attr("src", "img/triangle bas " + weather + ".png");
        $("#TH").attr("src", "img/triangle haut " + weather + ".png");
        $("#carréhaut, #carrébas").attr("src", "img/carré " + weather + ".png");
        mode = false;
    } else {
        $(".vérité, .calendrier, body, #mode, #météo0, #météo1, #météo2, #météo3, #météo4").toggleClass("night");
        $("#mode").text("Nuit");
        $("#TB").attr("src", "img/triangle bas night.png");
        $("#TH").attr("src", "img/triangle haut night.png");
        $("#carréhaut, #carrébas").attr("src", "img/carré night.png");
        mode = true;
    } if (mode == true && modemétéo == true) {
        $("#météo").css({ color: "white"})
    } else if (mode == false && modemétéo == true) {
        $("#météo").css({ color: "black"})
    };
}
$(document).ready(function () {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(showcityname);
        function showcityname(position) {
            var lat = position.coords.latitude;
            var longit = position.coords.longitude;
            var altitude = position.coords.altitude;
            var latitude_text = document.getElementById("latitude-val");
            var altitude_text = document.getElementById("altit");
            var city_name;
            var temp;
            var pressure;
            var wind_speed;
            var country_name;
            var weather_description;
            var cntjson;
            var plus1;
            var apiKey = "5ac0c007ae8d872392d6a4bbe5fc7080";
            $.getJSON("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + longit + "&appid=" + apiKey + "&units=metric", function (data) {
                if (time == 0 || time >= 22 ) {
                    cntjson = 39
                    plus1 = false
                }
                else if (time >= 1 && time <= 3) {
                    cntjson = 39
                    plus1 = true
                }
                else if (time >= 4 && time <= 6) {
                    cntjson = 38
                }
                else if (time >= 7 && time <= 9) {
                    cntjson = 37
                }
                else if (time >= 10 && time <= 12) {
                    cntjson = 36
                }
                else if (time >= 13 && time <= 15) {
                    cntjson = 35
                }
                else if (time >= 16 && time <= 18) {
                    cntjson = 34
                }
                else if (time >= 19 && time <= 21) {
                    cntjson = 33
                };
                for (var i = 0; i <= cntjson; i++) {
                    weatherlist.push(+data["list"][i]["weather"][0]["main"]);
                    templist.push(data["list"][i]["main"]["temp"]);
                };  if (cntjson == 39 && plus1 == false) {
                    météo0list = templist.slice(0, 9);
                    météo1list = templist.slice(8, 17);
                    météo2list = templist.slice(16, 25);
                    météo3list = templist.slice(24, 33);
                    météo4list = templist.slice(32, 40);
                }
                else if (cntjson == 39 && plus1 == true) {
                    météo0list = templist.slice(0, 8);
                    météo1list = templist.slice(7, 16);
                    météo2list = templist.slice(15, 24);
                    météo3list = templist.slice(23, 32);
                    météo4list = templist.slice(31, 40);   
                }
                else if (cntjson == 38) {
                    météo0list = templist.slice(0, 7);
                    météo1list = templist.slice(6, 15);
                    météo2list = templist.slice(14, 23);
                    météo3list = templist.slice(22, 31);
                    météo4list = templist.slice(30, 39);  
                }
                else if (cntjson == 37) {
                    météo0list = templist.slice(0, 6);
                    météo1list = templist.slice(5, 14);
                    météo2list = templist.slice(13, 22);
                    météo3list = templist.slice(21, 30);
                    météo4list = templist.slice(29, 38);  
                }
                else if (cntjson == 36) {
                    météo0list = templist.slice(0, 5);
                    météo1list = templist.slice(4, 13);
                    météo2list = templist.slice(12, 21);
                    météo3list = templist.slice(20, 29);
                    météo4list = templist.slice(28, 37);  
                }
                else if (cntjson == 35) {
                    météo0list = templist.slice(0, 4);
                    météo1list = templist.slice(3, 12);
                    météo2list = templist.slice(11, 20);
                    météo3list = templist.slice(19, 28);
                    météo4list = templist.slice(27, 36);  
                }
                else if (cntjson == 34) {
                    météo0list = templist.slice(0, 3);
                    météo1list = templist.slice(2, 11);
                    météo2list = templist.slice(10, 19);
                    météo3list = templist.slice(18, 27);
                    météo4list = templist.slice(26, 35);  
                }
                else if (cntjson == 33) {
                    météo0list = templist.slice(0, 2);
                    météo1list = templist.slice(1, 10);
                    météo2list = templist.slice(9, 18);
                    météo3list = templist.slice(17, 26);
                    météo4list = templist.slice(25, 34);  
                }
                $("#temp0").html(météo0list);
                $("#temp1").html(météo1list);
                $("#temp2").html(météo2list);
                $("#temp3").html(météo3list);
                $("#temp4").html(météo4list);
            });
        }
    }
});
$.ajax({
    url: "https://geolocation-db.com/jsonp",
    jsonpCallback: "callback",
    dataType: "jsonp",
    success: function (location) {
        $('#country').html(location.country_name);
        $('#state').html(location.state);
        $('#city').html(location.city);
        $('#latitude').html(location.latitude);
        $('#longitude').html(location.longitude);
        $('#ip').html(location.IPv4);
    }
});
$(document).ready(function () {
    // geolocation enabled

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(showcityname);

        function showcityname(position) {
            var lat = position.coords.latitude;
            var longit = position.coords.longitude;
            var altitude = position.coords.altitude;
            var latitude_text = document.getElementById("latitude-val");
            var altitude_text = document.getElementById("altit");
            var city_name;
            var temp;
            var pressure;
            var wind_speed;
            var country_name;
            var weather_description;
            var apiKey = "5ac0c007ae8d872392d6a4bbe5fc7080";

            $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + longit + "&appid=" + apiKey + "&units=metric", function (data) {

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
                } else if (weather_description == "Rain" && mode == 0 || weather_description == "Drizzle" && mode == 0) {
                    $("#TB").attr("src", "img/triangle bas.png");
                    $("#TH").attr("src", "img/triangle haut.png");
                    $("#carréhaut, #carrébas").attr("src", "img/carré rain.png");
                } else if (weather_description == "Atmosphere" && mode == 0 || weather_description == "Clouds" && mode == 0 || weather_description == "Mist" && mode == 0) {
                    $("#TB").attr("src", "img/triangle bas cloud.png");
                    $("#TH").attr("src", "img/triangle haut cloud.png");
                    $("#carréhaut, #carrébas").attr("src", "img/carré cloud.png");
                }
            })

        }

    }

});
// night mode auto 18h - 10h
$(document).ready(function () {
    if (time > 17 || time < 10) {
        $(".vérité, .calendrier, body, #mode, #météo0, #météo1, #météo2, #météo3, #météo4").toggleClass("night");
        $("#mode").text("Nuit");
        $("#TB").attr("src", "img/triangle bas night.png");
        $("#TH").attr("src", "img/triangle haut night.png");
        $("#carréhaut, #carrébas").attr("src", "img/carré night.png");
        mode = true;
    }
});
// animations de départ
$(document).ready(function () {
    setTimeout(function () {
        $(".calendrier, .vérité").animate({ top: "-=7%", opacity: "1" }, 750);
        $("#weather, h1").animate({ opacity: "1" }, 750);
        $("#mode").animate({ opacity: "1", top: "-=5%" }, 750);
    }, 1200)
    $("#TB").animate({ top: "+=8.09%", left: "-=8.09%", opacity: "1", width: "50%" }, 1000);
    $("#TH").animate({ top: "-=8.09%", left: "+=8.09%", opacity: "1", width: "50%" }, 1000);
});
// var météo
$(document).ajaxStop(function () {
    var temps;
    temps = $(".what").text();
    if (temps == "Clear") {
        meteo = 0
    }

    else if (temps == "Rain" || meteo == "Drizzle") {
        meteo = 1
    }
    else {
        meteo = 2
    }
});
// animation hover + triangles
$(".calendrier, .vérité, #météo0, #météo1, #météo2, #météo3, #météo4").hover(function () {
    $(this).animate({ top: "+=4%" }, 250);
},
    function () {
        $(this).animate({ top: "-=4%" }, 250)
    });
$("#hoverhaut, #weather").hover(function () {
    $("#TH").toggleClass("wow");
})
$("#hoverbas").hover(function () {
    $("#TB").toggleClass("wow");
})
// redirection boutons
//$(".calendrier").on('click', function () {
//    window.location.href = "avent/avent.html";
//});
//$(".vérité").on('click', function () {
//    window.location.href = "vérité.html";
//});
// night mode bouton
$("#mode").on('click', function () {
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
        setTimeout(function () {
        $("#météo1, #météo2, #météo3, #météo4").css({ top: "24%" });
        $("#météo1, #météo2, #météo3, #météo4").animate({ opacity: "1", top: "+=20%" }, 1300);
        }, 1300);
        modemétéo = true;
        if (mode == true) {
            $("#météo").animate({ fontSize: "+=100%", color: "white" }, 1300);
            $("#météo").css({ color: "white"})
        } else {
            $("#météo").animate({ fontSize: "+=100%", color: "black" }, 1300);
            $("#météo").css({ color: "black"})
        }
    }
    else {
        $("h1").animate({ opacity: "1" }, 1000);
        $("#cityname").animate({ fontSize: "90%", left: "+=6%" }, 1300);
        $("#weather").animate({ top: "+=1%", left: "+=28%", color: "white" }, 1300);
        $("h1").animate({ opacity: "1" }, 1500)
        $("#météo").animate({ fontSize: "-=100%", color: "white" }, 1300);
        $("#météo").css({ color: "white"})
        $(".temp, #cityname").animate({ opacity: "1" }, 250);
        $(".vérité, .calendrier").css({ top: "43.8%" })
        $(".vérité, .calendrier").animate({ top: "-=20%", opacity: "1" }, 1300);
        $("#carréhaut").animate({ left: "+=99%" }, 500);
        setTimeout(function () {
            $("#carréhaut").animate({ top: "-=99%" }, 700);
        }, 500);
        $("#carrébas").animate({ left: "-=99%" }, 500);
        setTimeout(function () {
            $("#carrébas").animate({ top: "+=99%" }, 700);
        }, 500);
        $("#météo0, #météo1, #météo2, #météo3, #météo4").animate({ opacity: "0", top: "-=20%" }, 1300);
        $("#météo0, #météo1, #météo2, #météo3, #météo4").animate({ top: "300%" }, 1);
        modemétéo = false;
    }
});