var mydata = JSON.parse(data);
var length = mydata.length;
var countbutton = 0;
var result = 0;
var action5 = 0;
var day1 = new Date("10/02/2020");
var day2 = new Date(moment().format("l"));
var daterencontre = new Date("19/02/2021");
var difference = Math.abs(day2 - day1);
var difrencontre = Math.abs(day1 - daterencontre);
var random1, random2, random3;
var randomlist = [random1, random2, random3];
var storage = 1;
var action21 = 0;
var prandom = false;
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
var vériword = [
  "vérité",
  "truth",
  "Verdad",
  "事実",
  "prawda",
  "правда",
  "totuus",
  "tõde",
  "sanning",
  "सत्य",
  "verdade",
  "firinn",
  "Wahrheit",
  "pravda",
  "verita",
  "igazság",
  "cacipe",
  "gerçek",
  "真相",
  "αλήθεια",
  "진실",
];
var proverbelist = [
  "Un mensonge qui fait l'affaire vaut mieux qu'une vérité qui l'embrouille.",
  "Il y a de fausses vérités et de vrais mensonges.",
  "Lorsqu'un Tsigane dit la vérité une fois dans sa vie, il s'en mord les doigts.",
  "Dis la vérité par souci d'honnêteté, et non par jactance.",
  "Un cœur droit est le premier organe de la vérité.",
  "Les femmes disent toujours la vérité, mais pas tout entière.",
  "Quand les commères se courroucent, les vérités se découvrent.",
  "Il est difficile de rencontrer un homme qui veuille bien entendre une vérité désagréable.",
  "La vérité peut languir, mais non périr.",
  "Sois toujours fidèle à la vérité, c'est la voie royale de l'existence.",
  "Dis la vérité, et tu seras pendu.",
  "La vérité se perd dans des discussions prolongées.",
  "La vérité comme l'huile vient au-dessus.",
  "La vérité est plus claire que le soleil.",
  "Si l'on se conforme dans toutes choses à la vérité, le bonheur amassé s'accroîtra de soi-même.",
  "Quand la vérité manque, utilises un proverbe pour la trouver.",
  "En disant la vérité on peut se faire une très mauvaise réputation.",
  "La vérité n'arrive dans aucune cellule de monastère.",
  "Qui cherche l'article Vérité ne doit pas emprunter le dictionnaire du diable.",
  "La vérité veut voir le jour.",
  "La vérité doit loger au chenil, et le flatteur est assis devant le foyer.",
  "La vérité souffre bien le besoin, mais non la mort.",
  "Qui dit la vérité ne trouve nulle part où loger.",
  "Celui qui proclame la vérité on le bat à la tête.",
  "L'homme ivre dit toujours la vérité.",
];
for (i = 0; i <= 6; i++) {
  if (dateact == dateEN[i]) {
    dateact = dateFR[i];
  }
}
loveday = difference / (1000 * 3600 * 24);
loveday = Math.round(loveday);
rencontreday = difrencontre / (1000 * 3600 * 24);
rencontreday = Math.round(rencontreday);
console.log(rencontreday);
$("#countmax").text(
  "Il y a " +
    length +
    " phrases et " +
    proverbelist.length +
    " proverbes pour toi :)"
);
$("#mapBouton").on("click", function () {
  randomMessage();
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
  var c1random = Math.floor(Math.random() * Math.floor(257));
  var c2random = Math.floor(Math.random() * Math.floor(257));
  var c3random = Math.floor(Math.random() * Math.floor(257));
  var fsrandom = Math.floor(Math.random() * Math.floor(fontstyle.length));
  var ffrandom = Math.floor(Math.random() * Math.floor(fontfamily.length));
  var wrandom = Math.floor(Math.random() * Math.floor(vériword.length));
  var choosenfontS = fontstyle[fsrandom];
  var choosenfontF = fontfamily[ffrandom];
  var choosenword = vériword[wrandom];
  $("#title").css({
    color: "rgb(" + c1random + "," + c2random + "," + c3random + ")",
    fontStyle: choosenfontS,
    fontFamily: choosenfontF,
  });
  $("#title").text(choosenword);
  setTimeout(randomcolor, 400);
}
function randomproverbe() {
  var random = Math.floor(Math.random() * Math.floor(proverbelist.length));
  if (prandom == false) {
    $("#proverbe0").text(proverbelist[random]);
    $("#proverbe0").animate({ opacity: "1" }, 500);
    $("#proverbe1").animate({ opacity: "0" }, 500);
    prandom = true;
  } else {
    $("#proverbe1").text(proverbelist[random]);
    $("#proverbe1").animate({ opacity: "1" }, 500);
    $("#proverbe0").animate({ opacity: "0" }, 500);
    prandom = false;
  }
  setTimeout(randomproverbe, 4500);
}
$(document).ready(function () {
  randomcolor();
  randomproverbe();
});
function randomMessage() {
  var random = Math.floor(Math.random() * Math.floor(length));
  if (
    random != randomlist[0] &&
    random != randomlist[1] &&
    random != randomlist[2]
  ) {
    if (random == 5 || action5 == 1 || action5 == 2) {
      eventMessage5();
      return;
    } else randomlist[storage] = random;
    storage++;
    if (storage >= randomlist.length) {
      storage = 0;
    }
    console.log(randomlist);
    LOL = mydata[random];
    if (LOL.includes("%actualday")) {
      LOL = mydata[random].replace("%actualday", dateact);
    } else if (LOL.includes("%loveday")) {
      LOL = mydata[random].replace("%loveday", loveday);
    }
    if (random == 21) {
      alert(LOL);
      eventMessage21();
    } else alert(LOL);
  } else {
    console.log("rater");
    return randomMessage();
  }
}
function eventMessage5() {
  if (action5 == 0) {
    $("#bouton").animate({ top: "75%", left: "75%" }, 500);
    action5++;
  } else if (action5 == 1) {
    $("#bouton").animate({ left: "15%" }, 500);
    action5++;
  } else if (action5 == 2) {
    $("#bouton").animate({ left: "43%", top: "42%" }, 500);
    action5 = 0;
  }
}
function eventMessage21() {
  alert("C'était une lyrics de Lettre a une femme haha ");
}
