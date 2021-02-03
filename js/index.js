$(".calendrier").on('click', function () {
    window.location.href = "avent/avent.html";
});
$(".vérité").on('click', function () {
    window.location.href = "vérité.html";
});
$("div").on("click", function () {
    $(this).ripples();
});
$(document).ready(function() {
    setTimeout(function() {
    $("div").animate({top: "-=50", opacity: "1"}, 750);
    }, 1200)
    $("#TB").animate({top: "+=100px", left: "-=100px", opacity: "1"}, 1000);
    $("#TH").animate({top: "-=100px", left: "+=100px", opacity: "1"}, 1000)
});
$("div").hover(function () {
    $(this).animate({top: "+=25"}, 250)
},
function () {
    $(this).animate({top: "-=25"}, 250)
});
