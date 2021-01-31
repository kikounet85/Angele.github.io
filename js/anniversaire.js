$('h1').on('click', function() {
    $('#Message1').css({ 'visibility': 'visible' });
});
$('#Message1').on('click', function() {
    $('#Message2').css({ 'visibility': 'visible' });
});
$('#Message2').on('click', function() {
    $('#Message3').css({ 'visibility': 'visible' });
});
$('#Message3').on('click', function() {
    $(".backyard")[0].play();
    $(".backyard").ready(function() {
        setTimeout(function() {
            $("body").toggleClass("active");
            $("h2, h1").text("JE T'AIME ANGELE");
            $("h2, h1").css({ 'color': 'red' });
        }, 3850)
    });
});