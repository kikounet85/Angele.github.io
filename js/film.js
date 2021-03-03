var Film = [
  "/tv/2316?api_key=c8ba3cbfd981404e3c6a588adfbce2d5&language=fr",
  "/movie/372058?api_key=c8ba3cbfd981404e3c6a588adfbce2d5&language=fr-FR",
  "/movie/613377?api_key=c8ba3cbfd981404e3c6a588adfbce2d5&language=fr-FR",
];

$(document).ready(function () {
  for (let i = 0; i < Film.length; i++) {
    console.log("before " + i);
    $.getJSON("https://api.themoviedb.org/3" + Film[i], function (data) {
      console.log(data);
      console.log(i);
      $("#Title" + i).text(data["name"]);
      $("#Title" + i).text(data["title"]);
      $("#Summary" + i).text(data["overview"]);
      $("#Genre" + i).text(data["genres"][0]["name"]);
      $("#Poster" + i).attr(
        "src",
        "https://image.tmdb.org/t/p/w500" + data["poster_path"]
      );
    });
  }
});
