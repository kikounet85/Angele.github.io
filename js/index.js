// initialisation : var + ajax
var mode = 0;
var meteo = "lol";
var modemétéo = 0;
var dt = new Date();
var time = dt.getHours()
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
        $(".vérité, .calendrier, body, #mode").toggleClass("night");
        $("#mode").text("Nuit");
        $("#TB").attr("src", "img/triangle bas night.png");
        $("#TH").attr("src", "img/triangle haut night.png");
        $("#carréhaut, #carrébas").attr("src", "img/carré night.png");
        mode++;
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
$(".calendrier, .vérité").hover(function () {
    $(this).animate({ top: "+=6%" }, 250);
},
    function () {
        $(this).animate({ top: "-=6%" }, 250)
    });
$("#hoverhaut, #weather").hover(function () {
    $("#TH").toggleClass("wow");
})
$("#hoverbas").hover(function () {
    $("#TB").toggleClass("wow");
})
// redirection boutons
$(".calendrier").on('click', function () {
    window.location.href = "avent/avent.html";
});
$(".vérité").on('click', function () {
    window.location.href = "vérité.html";
});
// night mode bouton
$("#mode").on('click', function () {
    if (mode == 1 && meteo == 0) {
        $(".vérité, .calendrier, body, #mode").toggleClass("night");
        $("#mode").text("Jour");
        $("#TB").attr("src", "img/triangle bas sun.png");
        $("#TH").attr("src", "img/triangle haut sun.png");
        $("#carréhaut, #carrébas").attr("src", "img/carré sun.png");
        mode--;
    } else if (mode == 1 && meteo == 1) {
        $(".vérité, .calendrier, body, #mode").toggleClass("night");
        $("#mode").text("Jour");
        $("#TB").attr("src", "img/triangle bas.png");
        $("#TH").attr("src", "img/triangle haut.png");
        $("#carréhaut, #carrébas").attr("src", "img/carré rain.png");
        mode--;
    } else if (mode == 1 && meteo == 2) {
        $(".vérité, .calendrier, body, #mode").toggleClass("night");
        $("#mode").text("Jour");
        $("#TB").attr("src", "img/triangle bas cloud.png");
        $("#TH").attr("src", "img/triangle haut cloud.png");
        $("#carréhaut, #carrébas").attr("src", "img/carré cloud.png");
        mode--;
    }
    else if (mode == 0) {
        $(".vérité, .calendrier, body, #mode").toggleClass("night");
        $("#mode").text("Nuit");
        $("#TB").attr("src", "img/triangle bas night.png");
        $("#TH").attr("src", "img/triangle haut night.png");
        $("#carréhaut, #carrébas").attr("src", "img/carré night.png");
        mode++;
    }
});
// bouton météo
$("#hoverhaut, #weather").on("click", function () {
   $("#carréhaut, #carrébas").css({ opacity: "1"});
    if (modemétéo == 0) {
    $("#carréhaut").animate({ top: "+=99%" }, 900);
    setTimeout( function () { 
    $("#carréhaut").animate({ left: "-=99%" }, 1000);
    }, 900);
    $("#carrébas").animate({ top: "-=99%" }, 900);
    setTimeout( function () { 
    $("#carrébas").animate({ left: "+=99%" }, 1000);
    }, 900);
    modemétéo++;
}
else {
    $("#carréhaut").animate({ left: "+=99%" }, 900);
    setTimeout( function () { 
    $("#carréhaut").animate({ top: "-=99%" }, 1000);
    }, 900);
    $("#carrébas").animate({ left: "-=99%" }, 900);
    setTimeout( function () { 
    $("#carrébas").animate({ top: "+=99%" }, 1000);
    }, 900);
    modemétéo--;
}
});