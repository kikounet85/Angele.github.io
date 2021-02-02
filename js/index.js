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
    $("div").animate({top: "-=50"}, 750);
});
$("div").hover(function () {
    $(this).animate({top: "+=25"}, 250)
},
function () {
    $(this).animate({top: "-=25"}, 250)
});
