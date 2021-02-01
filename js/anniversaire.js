var hovers = 0;
var after = 0;
$('h1').on('click', function () {
    $('#Message1').css({ 'visibility': 'visible' });
    hovers++;
});
$('#Message1').on('click', function () {
    $('#Message2').css({ 'visibility': 'visible' });
    hovers++;
});
$('#Message2').on('click', function () {
    $('#Message3').css({ 'visibility': 'visible' });
    hovers++;
});
$('#Message3').on('click', function () {
    $(".backyard")[0].play();
    $(".backyard").ready(function () {
        setTimeout(function () {
            $("body").toggleClass("active");
            $("h2, h1").text("JE T'AIME ANGELE");
            $("h2, h1").css({ 'color': 'red' });
            $("title").text("JE T'AIME ANGELE");
        }, 3850)
    });
    hovers++;
    after++;
    $("#Message3").text("T'est trop drole");
    $("#Message3").css({ 'color': 'black' });
});
$("h1").hover(
    function () {
        if (hovers == 0) {
            $(this).addClass("hover");
            $("h1.hover").text(">CLIQUE MOI DESSUS<");
        }
    }, function () {
        if (after == 0) {
            $(this).removeClass("hover");
            $(this).text("Juste pour te dire...");

        }
    });
$("#Message1").hover(
    function () {
        if (hovers == 1) {
            $(this).addClass("hover");
            $("#Message1.hover").text("TOUJOURS PAREIL WOW");
        }
    }, function () {
        if (after == 0) {
            $(this).removeClass("hover");
            $(this).text("T'est trop belle");

        }
    });
$("#Message2").hover(
    function () {
        if (hovers == 2) {
            $(this).addClass("hover");
            $("#Message2.hover").text("ALLEZ ON CLIQUE");
        }
    }, function () {
        if (after == 0) {
            $(this).removeClass("hover");
            $(this).text("T'est trop gentille");

        }
    });
$("#Message3").hover(
    function () {
        if (hovers == 3) {
            $(this).addClass("hover");
            $("#Message3.hover").text("HE HO HEIN HE");
        }
    }, function () {
        if (after == 0) {
            $(this).removeClass("hover");
            $(this).text("T'est trop drole");

        }
    });

