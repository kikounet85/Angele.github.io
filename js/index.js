var city = "rien"
$(".calendrier").on('click', function () {
    window.location.href = "avent/avent.html";
});
$(".vérité").on('click', function () {
    window.location.href = "vérité.html";
});
$("div").on("click", function () {
    $(this).ripples();
});
$(document).ready(function () {
    setTimeout(function () {
        $("div").animate({ top: "-=50", opacity: "1" }, 750);
    }, 1200)
    $("#TB").animate({ top: "+=100px", left: "-=100px", opacity: "1", width: "50%" }, 1000);
    $("#TH").animate({ top: "-=100px", left: "+=100px", opacity: "1", width: "50%" }, 1000)
});
$("div").hover(function () {
    $(this).animate({ top: "+=25" }, 250)
},
    function () {
        $(this).animate({ top: "-=25" }, 250)
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

            $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + longit + "&appid=" + apiKey, function (data) {

                city_name = data["name"];
                country_name = data["sys"]["country"];
                weather_description = data["weather"][0]["description"];
                temp = data["main"]["temp"];
                pressure = data["main"]["pressure"];
                wind_speed = data["wind"]["speed"];

                $("#cityname").html(city_name + " &#40;" + country_name + "&#41; " + "has " + weather_description);
                $(".temp").html(temp);
                $(".pressure").html(pressure + " mBar");
                $(".wind-spd").html(wind_speed + " m/s");

            })

        }

    }

})

