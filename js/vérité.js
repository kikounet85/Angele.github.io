var mydata = JSON.parse(data);
var length = mydata.length;
var countbutton = 0;
var result = 0;
var action5 = 0;
var day1 = new Date("10/02/2020");
var day2 = new Date(moment().format("l"));
var difference = Math.abs(day2 - day1);
var random1, random2, random3;
var begin = false;
var dateFR = [
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
  "dimanche",
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
var dateact = moment().format("dddd");
var color = [
  "aliceblue",
  "antiquewhite",
  "aqua",
  "aquamarine",
  "azure",
  "beige",
  "bisque",
  "black",
  "blanchedalmond",
  "blue",
  "blueviolet",
  "brown",
  "burlywood",
  "cadetblue",
  "chartreuse",
  "chocolate",
  "coral",
  "cornflowerblue",
  "cornsilk",
  "crimson",
  "cyan",
  "darkblue",
  "darkcyan",
  "darkgoldenrod",
  "darkgray",
  "darkgreen",
  "darkgrey",
  "darkkhaki",
  "darkmagenta",
  "darkolivegreen",
  "darkorange",
  "darkorchid",
  "darkred",
  "darksalmon",
  "darkseagreen",
  "darkslateblue",
  "darkslategray",
  "darkslategrey",
  "darkturquoise",
  "darkviolet",
  "deeppink",
  "deepskyblue",
  "dimgray",
  "dimgrey",
  "dodgerblue",
  "firebrick",
  "floralwhite",
  "forestgreen",
  "fuchsia",
  "gainsboro",
  "ghostwhite",
  "gold",
  "goldenrod",
  "gray",
  "green",
  "greenyellow",
  "grey",
  "honeydew",
  "hotpink",
  "indianred",
  "indigo",
  "ivory",
  "khaki",
  "lavender",
  "lavenderblush",
  "lawngreen",
  "lemonchiffon",
  "lightblue",
  "lightcoral",
  "lightcyan",
  "lightgoldenrodyellow",
  "lightgray",
  "lightgreen",
  "lightgrey",
  "lightpink",
  "lightsalmon",
  "lightseagreen",
  "lightskyblue",
  "lightslategray",
  "lightslategrey",
  "lightsteelblue",
  "lightyellow",
  "lime",
  "limegreen",
  "linen",
  "magenta",
  "maroon",
  "mediumaquamarine",
  "mediumblue",
  "mediumorchid",
  "mediumpurple",
  "mediumseagreen",
  "mediumslateblue",
  "mediumspringgreen",
  "mediumturquoise",
  "mediumvioletred",
  "midnightblue",
  "mintcream",
  "mistyrose",
  "moccasin",
  "navajowhite",
  "navy",
  "oldlace",
  "olive",
  "olivedrab",
  "orange",
  "orangered",
  "orchid",
  "palegoldenrod",
  "palegreen",
  "paleturquoise",
  "palevioletred",
  "papayawhip",
  "peachpuff",
  "peru",
  "pink",
  "plum",
  "powderblue",
  "purple",
  "red",
  "rosybrown",
  "royalblue",
  "saddlebrown",
  "salmon",
  "sandybrown",
  "seagreen",
  "seashell",
  "sienna",
  "silver",
  "skyblue",
  "slateblue",
  "slategray",
  "slategrey",
  "snow",
  "springgreen",
  "steelblue",
  "tan",
  "teal",
  "thistle",
  "tomato",
  "transparent",
  "turquoise",
  "violet",
  "wheat",
  "white",
  "whitesmoke",
  "yellow",
  "yellowgreen",
  "rebeccapurple",
];
var fontstyle = ["italic", "normal", "oblique"];
var fontfamily = [
  "'Courier New'",
  "Courier",
  "monospace",
  "'Franklin Gothic Medium'",
  "'Arial Narrow'",
  "Arial",
  "'Gill Sans'",
  "'Gill Sans MT'",
  "Calibri",
  "'Trebuchet MS'",
  "sans-serif",
  "'Lucida Sans'",
  "'Lucida Sans Regular'",
  "'Lucida Grande'",
  "'Lucida Sans Unicode'",
  "Geneva",
  "Verdana",
  "Segoe UI",
  "Tahoma",
  "Geneva",
  "Verdana",
  "'Times New Roman'",
  "Times",
  "serif",
  "'Trebuchet MS'",
  "'Lucida Sans Unicode'",
  "'Lucida Grande'",
  "'Lucida Sans'",
  "Arial",
];
for (i = 0; i <= 6; i++) {
  if (dateact == dateEN[i]) {
    dateact = dateFR[i];
  }
}
loveday = difference / (1000 * 3600 * 24);
loveday = Math.round(loveday);
$("#countmax").text("Il y a " + length + " phrases pour toi :)");
$("#mapBouton").on("click", function () {
  var random = Math.floor(Math.random() * Math.floor(length));
  LOL = mydata[random];
  if (LOL.includes("%actualday")) {
    LOL = mydata[random].replace("%actualday", dateact);
  } else if (LOL.includes("%loveday")) {
    LOL = mydata[random].replace("%loveday", loveday);
  }
  if (random == 5 && action5 == 0) {
    $("#bouton").animate({ top: "75%", left: "75%" }, 500);
    action5++;
  } else if (action5 == 1) {
    $("#bouton").animate({ left: "15%" }, 500);
    action5++;
  } else if (action5 == 2) {
    $("#bouton").animate({ left: "43%", top: "42%" }, 500);
    action5 = 0;
  } else alert(LOL);
  countbutton++;
  result = (countbutton / length) * 100;
  if (result >= 100) {
    $("#probability").text(
      "Tu as 100% de chance de tomber sur une phrase déjà vu !"
    );
  } else {
    $("#probability").text(
      "Tu as " +
        result +
        "% de chance de tomber sur une phrase que tu as déjà vu !"
    );
  }
});
$("#mapBouton").hover(
  function () {
    $("#bouton").css({ transform: "scale(1.15)" });
  },
  function () {
    $("#bouton").css({ transform: "scale(1)" });
  }
);

function randomcolor() {
  var crandom = Math.floor(Math.random() * Math.floor(color.length));
  var fsrandom = Math.floor(Math.random() * Math.floor(fontstyle.length));
  var ffrandom = Math.floor(Math.random() * Math.floor(fontfamily.length));
  var choosencolor = color[crandom];
  var choosenfontS = fontstyle[fsrandom];
  var choosenfontF = fontfamily[ffrandom];
  $("#title").css({
    color: choosencolor,
    fontStyle: choosenfontS,
    fontFamily: choosenfontF,
  });
  setTimeout(randomcolor, 400);
}
$(document).ready(function () {
  randomcolor();
});
