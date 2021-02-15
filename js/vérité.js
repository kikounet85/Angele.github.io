var mydata = JSON.parse(data);
var length = mydata.length;
var countbutton = 0;
var result = 0;
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
console.log(length);
$("#countmax").text("Il y a " + length + " phrases pour toi :)");
$("#bouton").on("click", function () {
  var random = Math.floor(Math.random() * Math.floor(length));
  var LOL = mydata[random].replace("<", dateact);
  alert(LOL);
  countbutton++;
  result = (countbutton / length) * 100;
  if (result >= 100) {
    $("#probability").text(
      "Tu as 100% de chance de tomber sur une phrase déjà vu !"
    );
  } else {
    $("#probability").text(
      "Tu as " + result + "% de chance de tomber sur une phrase déjà vu !"
    );
  }
});
