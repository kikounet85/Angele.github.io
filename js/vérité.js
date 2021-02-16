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
    $("#bouton").animate({ left: "43%", top: "30%" }, 500);
    action5 = 0;
  } else alert(LOL);
  countbutton++;
  result = (countbutton / length) * 100;
  console.log(action5);
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
