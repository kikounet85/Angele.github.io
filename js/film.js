const TrentejoursMax = "/movie/613377";
const LeVoyageDeChihiro = "/movie/129";
const LeTombeauDesLucioles = "/movie/12477";
const YourName = "/movie/372058";
const Jojo = "/tv/45790";
const Nausicaa = "/movie/81";
const Django = "/movie/68718";
const KillBill1 = "/movie/24";
const KillBill2 = "/movie/393";
const Pokemon1b = "/movie/571891";
const Pokemon2 = "/movie/12599";
const Pokemon3 = "/movie/10991";
const Pokemon4 = "/movie/12600";
const Pokemon5 = "/movie/33875";
const Pokemon6 = "/movie/36218";
const Pokemon7 = "/movie/34065";
const Pokemon8 = "/movie/34067";
const Pokemon9 = "/movie/16808";
const Pokemon10 = "/movie/25961";
const Pokemon11 = "/movie/47292";
const Pokemon12 = "/movie/39057";
const Pokemon13 = "/movie/50087";
const TheOffice = "/tv/2316";
const Rohan = "/tv/118443";
const RickMorty = "/tv/60625";
const SNK = "/tv/1429";
const IWantPancrea = "/movie/504253";
const YourLieInApril = "/tv/61663";
const IngloriousB = "/movie/16869";
const PrisonBreak = "/tv/2288";
const Whiplash = "/movie/244786";
const Inception = "/movie/27205";
const LEJoker = "/movie/475557";
const LesEvadé = "/movie/278";
const UsualSuspect = "/movie/629";
const TheGentlemen = "/movie/522627";
const NeonEvangelion = "/tv/890";
const TokyoGhoul = "/tv/61374";
const EvangelionFILMFIN = "/movie/18491";
const EvangelionRebuild1 = "/movie/15137";
const EvangelionRebuild2 = "/movie/22843";
const EvangelionRebuild3 = "/movie/75629";
const Castlevania = "/tv/71024";
const JojoOAV = "/tv/60862"
const FreeGuy = "/movie/550988"
const OSS117 = "/movie/604563"
const EvangelionRebuild4 = "/movie/283566";
const WallStreetWolf = "/movie/106646";
const VioletEverGardenSerie = "/tv/75214";
const DeathNote = "/tv/13916";
let Film = [
  TrentejoursMax,
  LeVoyageDeChihiro,
  LeTombeauDesLucioles,
  YourName,
  Jojo,
  Nausicaa,
  Django,
  KillBill1,
  KillBill2,
  Pokemon1b,
  Pokemon2,
  Pokemon3,
  Pokemon4,
  Pokemon5,
  Pokemon6,
  Pokemon7,
  Pokemon8,
  Pokemon9,
  Pokemon10,
  Pokemon11,
  Pokemon12,
  Pokemon13,
  TheOffice,
  Rohan,
  RickMorty,
  SNK,
  IWantPancrea,
  YourLieInApril,
  IngloriousB,
  PrisonBreak,
  Whiplash,
  Inception,
  LEJoker,
  LesEvadé,
  UsualSuspect,
  TheGentlemen,
  NeonEvangelion,
  TokyoGhoul,
  EvangelionFILMFIN,
  EvangelionRebuild1,
  EvangelionRebuild2,
  EvangelionRebuild3,
  Castlevania,
  JojoOAV,
  FreeGuy,
  OSS117,
  EvangelionRebuild4,
  WallStreetWolf,
  VioletEverGardenSerie,
  DeathNote
];
const BreakingBad = "/tv/1396";
const PulpFiction = "/movie/680";
const FightClub = "/movie/550";
const ReservoirDogs = "/movie/500";
const Arretemoi = "/movie/640";
const VeryBadTrip1 = "/movie/18785";
const DoctorWho = "/tv/57243";
const BatmanVSSuperman = "/movie/209112";
const OnePiece = "/tv/37854";
const FullMetalAlch = "/tv/31911";
const Brooklyn99 = "/tv/48891";
const ParcAndRec = "/tv/8592";
const Bleach = "/tv/30984";
const LesAffranchis = "/movie/769";
const BlackMirror = "/tv/42009";
const MrRobot = "/tv/62560";
const Bojack = "/tv/61222";
const LigneVerte = "/movie/497";
const VioletEverGardenFILM1 = "/movie/610892";
const ViolentEverGardenFILM2 = "/movie/533514";
const Invincible = "/tv/95557";
let FilmPasvu = [
  BreakingBad,
  PulpFiction,
  FightClub,
  ReservoirDogs,
  Arretemoi,
  VeryBadTrip1,
  DoctorWho,
  BatmanVSSuperman,
  OnePiece,
  FullMetalAlch,
  Brooklyn99,
  ParcAndRec,
  Bleach,
  LesAffranchis,
  BlackMirror,
  MrRobot,
  Bojack,
  LigneVerte,
  VioletEverGardenFILM1,
  ViolentEverGardenFILM2,
  Invincible,
];
let Imagelist = [];
let Filmlist = [];
let PrecisionMode = false;
let ActivePrecision;
let Afflist = [ "Aff1", "Aff2", "Aff3", "Aff4", "Aff5", "Aff6" ];
let Affvar = 2;
let ListMode = false;
let fullscreenMode = false;
let listheight = 0;
let ArrayGenre = [];
let FilterMode = false;
let SearchMode = false;
let position, left, topp, width, height;
async function ActualFilm ( Film, FilmNumber, i ) {
  let classFilm = "pasvu";
  let BoutonContainer = "#BoutonContainerp";
  if ( i === undefined ) {
    i = FilmNumber;
    classFilm = "vu";
    BoutonContainer = "#BoutonContainer";
  }
  const waitinglol = await $.getJSON(
    "https://api.themoviedb.org/3" +
    Film +
    "?api_key=c8ba3cbfd981404e3c6a588adfbce2d5&language=fr-FR",
    function ( data ) {
      let ID = "Film" + FilmNumber;
      $( "#container" ).append(
        '<div id="' + ID + '" class="Precision hidden" ></div>'
      );
      $( "#" + ID ).append(
        '<div id="text' + FilmNumber + '" class ="text"></div>'
      );
      $( BoutonContainer ).append(
        '<div id="Image' + FilmNumber + '" class="bouton"></div>'
      );
      $( "#Image" + FilmNumber ).addClass( classFilm );
      $( "#listContainer" ).append(
        '<div id="list' + ID + '" class="listContainer"></div>'
      );
      $( "#Image" + FilmNumber ).append(
        '<img id="Backdrop' +
        FilmNumber +
        '" src="https://image.tmdb.org/t/p/original' +
        data[ "backdrop_path" ] +
        '"/>'
      );
      $( "#Image" + FilmNumber ).append(
        '<img class="Black" src="img/black.png"/>'
      );
      let Title = data[ "title" ];
      $( "#" + ID ).append(
        '<img id="Poster' +
        FilmNumber +
        '" src="https://image.tmdb.org/t/p/w500' +
        data[ "poster_path" ] +
        '"/>'
      );
      $( "#" + ID ).append(
        '<h3 id="More' + i + '" class ="More"><< En savoir plus</h3>'
      );
      $( "#" + ID ).append( '<div id="Info' + ID + '" class="Info"></div>' );
      $( "#Info" + ID ).append(
        '<h2 id="TypeTitle' + ID + '" class="TypeTitle">Type</h2>'
      );
      $( "#Info" + ID ).append( '<h3 id="Type' + ID + '" class="Type"></h3>' );
      $( "#Info" + ID ).append(
        '<h2 id="OriginalTitleT' +
        ID +
        '" class="OriginalTitleT">Titre d\'origine</h2>'
      );
      $( "#Info" + ID ).append(
        '<h3 id="OriginalTitle' + ID + '" class="OriginalTitle"></h3>'
      );
      $( "#Info" + ID ).append(
        '<h2 id="ReleaseDateTitle' +
        ID +
        '" class="ReleaseDateTitle">Date de sortie</h2>'
      );
      $( "#Info" + ID ).append(
        '<h3 id="ReleaseDate' + ID + '" class="ReleaseDate"></h3>'
      );
      $( "#Info" + ID ).append( '<img class="Blackinfo" src="img/black.png"/>' );
      $( "#Info" + ID ).append(
        '<h2 id="NoteTitle' + ID + '" class="NoteTitle">Notes</h2>'
      );
      $( "#Info" + ID ).append(
        '<h3 id="Averagevote' +
        ID +
        '" class="VoteAverage">' +
        data[ "vote_average" ] +
        "/10</h3>"
      );
      $( "#Info" + ID ).append(
        '<h3 id="Averagecount' +
        ID +
        '" class="VoteCount">Noté par ' +
        data[ "vote_count" ] +
        " personnes</h3>"
      );
      $( "#Info" + ID ).append(
        '<h2 id="DuréeTitle' + ID + '" class="DuréeTitle">Durée</h2>'
      );
      NoteColor( data[ "vote_average" ], "#Averagevote" + ID );
      $( "#list" + ID ).append(
        '<h3 id="RuntimeList' + ID + '" class="RuntimeList"></h3>'
      );
      if ( Title === undefined ) {
        $( "#text" + FilmNumber ).append(
          '<h2 id="Title' + FilmNumber + '">' + data[ "name" ] + "</h2>"
        );
        $( "#Image" + FilmNumber ).append(
          '<h2 id="BackTitle' + FilmNumber + '">' + data[ "name" ] + "</h2>"
        );
        $( "#list" + ID ).append( "<h2>" + data[ "name" ] + "</h2>" );
        $( "#Info" + ID ).append(
          '<h3 id="Runtime' +
          ID +
          '" class="Runtime">' +
          data[ "episode_run_time" ][ 0 ] +
          " minutes en moyenne</h3>"
        );
        $( "#Type" + ID ).text( "Série" );
        $( "#Info" + ID ).append(
          '<h3 id="Saisons' +
          ID +
          '" class="Saison">' +
          data[ "number_of_seasons" ] +
          " saisons</h3>"
        );
        $( "#Info" + ID ).append(
          '<h3 id="Episodes' +
          ID +
          '" class="Episodes">' +
          data[ "number_of_episodes" ] +
          " épisodes</h3>"
        );
        $( "#OriginalTitle" + ID ).text( data[ "original_name" ] );
        $( "#ReleaseDate" + ID ).text(
          moment( data[ "first_air_date" ] ).format( "DD-MM-YYYY" )
        );
        $( "#list" + ID ).append(
          '<h3 id="ReleasedateList' +
          ID +
          '" class="ReleasedateList">' +
          moment( data[ "first_air_date" ] ).format( "DD-MM-YYYY" ) +
          "</h3>"
        );
        $( "#list" + ID ).append(
          '<h3 id="TypeList' + ID + '" class="TypeList">Série</h3>'
        );
        $( "#list" + ID + ">.RuntimeList" ).text(
          data[ "episode_run_time" ][ 0 ] + " minutes"
        );
        $( "#list" + ID ).append(
          '<h3 id="NumberEpisodeList' +
          ID +
          '" class="EpisodeList">' +
          data[ "number_of_episodes" ] +
          " épisodes</h3>"
        );
        $( "#list" + ID ).append(
          '<h3 id="NumberSeasonList' +
          ID +
          '" class="SeasonList">' +
          data[ "number_of_seasons" ] +
          " saisons</h3>"
        );
      } else {
        $( "#text" + FilmNumber ).append(
          '<h2 id="Title' + FilmNumber + '">' + data[ "title" ] + "</h2>"
        );
        $( "#Image" + FilmNumber ).append(
          '<h2 id="BackTitle' + FilmNumber + '">' + data[ "title" ] + "</h2>"
        );
        $( "#list" + ID ).append( "<h2>" + data[ "title" ] + "</h2>" );
        $( "#Info" + ID ).append(
          '<h3 id="Runtime' + ID + '" class="Runtime"></h3>'
        );
        DuréeH( data[ "runtime" ], "#Info" + ID + ">.Runtime" );
        DuréeH( data[ "runtime" ], "#list" + ID + ">.RuntimeList" );
        $( "#Type" + ID ).text( "Film" );
        $( "#OriginalTitle" + ID ).text( data[ "original_title" ] );
        $( "#ReleaseDate" + ID ).text(
          moment( data[ "release_date" ] ).format( "DD-MM-YYYY" )
        );
        $( "#list" + ID ).append(
          '<h3 id="TypeList' + ID + '" class="TypeList">Film</h3>'
        );
        $( "#list" + ID ).append(
          '<h3 id="ReleasedateList' +
          ID +
          '" class="ReleasedateList">' +
          moment( data[ "release_date" ] ).format( "DD-MM-YYYY" ) +
          "</h3>"
        );
      }
      Titlesize(
        $( "#Info" + ID + ">.OriginalTitle" ).text(),
        "#Info" + ID + ">.OriginalTitle"
      );
      $( "#text" + FilmNumber ).append(
        '<div id="Genre' + FilmNumber + '"></div>'
      );
      $( "#list" + ID ).append(
        '<div id="Genrelist' + ID + '" class="Genrelist"></div>'
      );
      $( "#list" + ID ).append(
        '<div id="Backdropdiv' + FilmNumber + '" class="Backdropdiv"></div>'
      );
      $( "#list" + ID ).addClass( classFilm );
      $( "#Backdropdiv" + FilmNumber ).append(
        '<img id="Backdroplist' +
        FilmNumber +
        '" src="https://image.tmdb.org/t/p/original' +
        data[ "backdrop_path" ] +
        '"/>'
      );
      $( "#list" + ID ).append(
        '<h3 id="Note' +
        ID +
        '" class="AverageNote">' +
        data[ "vote_average" ] +
        "/10</h3>"
      );
      for ( let g = 0; g < data[ "genres" ].length; g++ ) {
        let Checkup = data[ "genres" ][ g ][ "name" ].includes( "&" );
        if ( Checkup == true ) {
          Splitand( data[ "genres" ][ g ][ "name" ] );
        } else {
          ArrayGenre.push( data[ "genres" ][ g ][ "name" ] );
        }
      }
      for ( let j = 0; j < ArrayGenre.length; j++ ) {
        $( "#Genre" + FilmNumber ).append(
          '<h4 id="Genre' +
          FilmNumber +
          j +
          j +
          '" class="GenreText"> ' +
          ArrayGenre[ j ] +
          "</h4>"
        );
        $( "#Genrelist" + ID ).append(
          '<h4 id="Genre' + FilmNumber + j + j + '"> ' + ArrayGenre[ j ] + "</h4>"
        );
        GenreColor(
          ArrayGenre[ j ],
          "#Genre" + FilmNumber + "> #Genre" + FilmNumber + j + j + ".GenreText"
        );
        GenreColor(
          ArrayGenre[ j ],
          "#Genrelist" + ID + "> #Genre" + FilmNumber + j + j
        );
      }
      ArrayGenre = [];
      $( "#text" + FilmNumber ).append(
        '<p id="Summary' + FilmNumber + '">' + data[ "overview" ] + "</p>"
      );
      $( "#list" + ID ).append(
        '<h4 id="Summary' + FilmNumber + '">' + data[ "overview" ] + "</h4>"
      );
      $( "#text" + FilmNumber ).append( '<h3 id="Retour"> Retour </h3>' );
      $( "#Image" + FilmNumber ).append(
        '<img class="map0" src="https://image.tmdb.org/t/p/w500' +
        data[ "backdrop_path" ] +
        '"/>'
      );
      Imagelist.push( "Image" + FilmNumber );
      Filmlist.push( "Film" + FilmNumber );
    }
  );
  return waitinglol;
}
function NoteColor ( Note, IDNote ) {
  if ( Note <= 4 ) {
    $( IDNote ).css( { color: "rgb(148, 22, 22)" } );
    return;
  } else if ( Note > 7 ) {
    $( IDNote ).css( { color: "rgb(2, 150, 6)" } );
    return;
  } else {
    $( IDNote ).css( { color: "rgb(184, 120, 2)" } );
    return;
  }
}
$( document ).ready( async function () {
  for ( let i = 0; i < Film.length; i++ ) {
    const lol = await ActualFilm( Film[ i ], i );
  }
} );
$( document ).ready( async function () {
  for ( let i = 0; i < FilmPasvu.length; i++ ) {
    const lol = await ActualFilm( FilmPasvu[ i ], "p" + i, i );
  }
} );
$( document ).on( "mouseover", ".bouton > img, .bouton > h2", function () {
  if ( PrecisionMode == false ) {
    $( this.parentNode ).children( "h2" ).animate( { opacity: "0.9" }, 150 );
    $( this.parentNode ).children( ".Black" ).animate( { opacity: "0.7" }, 150 );
  }
} );
$( document ).on( "mouseout", ".bouton > img", function () {
  $( this.parentNode ).children( "h2" ).animate( { opacity: "0" }, 150 );
  $( this.parentNode ).children( ".Black" ).animate( { opacity: "0" }, 150 );
} );
$( document ).on( "click", ".bouton > img", function () {
  position = $( this ).parent().offset();
  left = position.left;
  topp = position.top;
  height = $( this ).parent().height();
  width = $( this ).parent().width();
  left = left + width / 2;
  topp = topp + height / 2;
  left = left - ( $( window ).width() * 0.8 ) / 2;
  topp = topp - ( $( window ).height() * 0.829 ) / 2;
  if ( PrecisionMode == false ) {
    ActivePrecision =
      "#" + Filmlist[ Imagelist.indexOf( $( this.parentNode ).attr( "id" ) ) ];
    $( ActivePrecision ).removeClass( "hidden" );
    $( ActivePrecision ).css( { top: topp, left: left } );
    $( ActivePrecision ).animate( { top: "10%", left: "10%" }, 200 );
    setTimeout( function () {
      $( ActivePrecision ).toggleClass( "show" );
    }, 1 );
    setTimeout( function () {
      $( "#BoutonContainer , #BoutonContainerp, h1" ).toggleClass( "Blur" );
    }, 200 );
    $( ".bouton" ).css( { cursor: "default" } );
    $( "#nav" ).animate( { opacity: "0" }, 400 );
    setTimeout( function () {
      $( "#nav" ).hide();
    }, 200 );
    $(
      "#Vu, #pasVu, #ListIMG, #TVIMG, #FilterIMG, #Filter, #SearchdDiv, #SearchIMG, #SearchBar, #Affichage"
    ).css( {
      cursor: "default",
    } );
    PrecisionMode = true;
  }
} );
$( document ).on( "click", "#Retour", function () {
  $( ActivePrecision ).toggleClass( "show" );
  $( ActivePrecision ).animate( { top: topp, left: left }, 200 );
  setTimeout( function () {
    $( ActivePrecision ).addClass( "hidden" );
  }, 400 );
  setTimeout( function () {
    $( "#BoutonContainer , #BoutonContainerp, h1" ).toggleClass( "Blur" );
  }, 200 );
  $( ".bouton" ).css( { cursor: "pointer" } );
  $( "#nav" ).show();
  $( "#nav" ).animate( { opacity: "1" }, 400 );
  $(
    "#Vu, #pasVu, #ListIMG, #TVIMG, #FilterIMG, #Filter, #SearchdDiv, #SearchIMG, #SearchBar, #Affichage"
  ).css( {
    cursor: "pointer",
  } );
  PrecisionMode = false;
} );
$( "#Aff1, #Aff2,#Aff3, #Aff4,#Aff5, #Aff6" ).hover(
  function () {
    if ( Afflist.indexOf( $( this ).attr( "id" ) ) === Affvar ) {
      return;
    } else {
      $( this ).css( { backgroundColor: "rgba(153, 150, 150, 0.4)" } );
    }
  },
  function () {
    if ( Afflist.indexOf( $( this ).attr( "id" ) ) == Affvar ) {
    } else {
      $( this ).css( { backgroundColor: "rgba(206, 206, 206, 0.4)" } );
    }
  }
);
$( "#Aff1, #Aff2,#Aff3, #Aff4,#Aff5, #Aff6" ).click( function () {
  if ( Afflist.indexOf( $( this ).attr( "id" ) ) === Affvar ) {
    return;
  } else {
    Affvar = Afflist.indexOf( $( this ).attr( "id" ) );
    if ( Affvar == 0 ) {
      $( ".bouton" ).css( { height: "50vw", margin: "10px" } );
      $( "#BoutonContainer, #BoutonContainerp" ).css( {
        gridTemplateColumns: "repeat(1, 1fr)",
      } );
      $( ".bouton>h2" ).css( { fontSize: "2.5em" } );
    } else if ( Affvar == 1 ) {
      $( ".bouton" ).css( { height: "26vw", margin: "10px" } );
      $( "#BoutonContainer, #BoutonContainerp" ).css( {
        gridTemplateColumns: "repeat(2, 1fr)",
      } );
      $( ".bouton>h2" ).css( { fontSize: "1.9em" } );
    } else if ( Affvar == 2 ) {
      $( ".bouton" ).css( { height: "17vw", margin: "10px" } );
      $( "#BoutonContainer, #BoutonContainerp" ).css( {
        gridTemplateColumns: "repeat(3, 1fr)",
      } );
      $( ".bouton>h2" ).css( { fontSize: "1.7em" } );
    } else if ( Affvar == 3 ) {
      $( ".bouton" ).css( { height: "12.5vw", margin: "5px" } );
      $( "#BoutonContainer, #BoutonContainerp" ).css( {
        gridTemplateColumns: "repeat(4, 1fr)",
      } );
      $( ".bouton>h2" ).css( { fontSize: "1.4em" } );
    } else if ( Affvar == 4 ) {
      $( ".bouton" ).css( { height: "10vw", margin: "3px" } );
      $( "#BoutonContainer, #BoutonContainerp" ).css( {
        gridTemplateColumns: "repeat(5, 1fr)",
      } );
      $( ".bouton>h2" ).css( { fontSize: "medium" } );
    } else if ( Affvar == 5 ) {
      $( ".bouton" ).css( { height: "8vw", margin: "2px" } );
      $( "#BoutonContainer, #BoutonContainerp" ).css( {
        gridTemplateColumns: "repeat(6, 1fr)",
      } );
      $( ".bouton>h2" ).css( { fontSize: "1em" } );
    }
    $( "#Aff1, #Aff2,#Aff3, #Aff4,#Aff5, #Aff6" ).css( {
      backgroundColor: "rgba(206, 206, 206, 0.4)",
      color: "black",
    } );
    $( this ).css( {
      backgroundColor: "rgb(48, 48, 48)",
      color: "rgba(250, 235, 215, 0.575)",
    } );
  }
} );
function GenreColor ( Genre, IDGenre ) {
  switch ( Genre ) {
    case "Comédie":
      $( IDGenre ).css( { color: "rgb( 255, 142, 0)" } );
      break;
    case "Animation":
      $( IDGenre ).css( { color: "rgb(5, 176, 214)" } );
      break;
    case "Romance":
      $( IDGenre ).css( { color: "rgb(179, 16, 83)" } );
      break;
    case "Aventure":
      $( IDGenre ).css( { color: "rgb(201, 109, 0)" } );
      break;
    case "Drame":
      $( IDGenre ).css( { color: "rgb(124, 7, 7)" } );
      break;
    case "Action":
      $( IDGenre ).css( { color: "rgb(229, 60, 24)" } );
      break;
    case "Science-Fiction":
      $( IDGenre ).css( { color: "rgb(37, 186, 4)" } );
      break;
    case "Fantastique":
      $( IDGenre ).css( { color: "rgb(81, 50, 173)" } );
      break;
    case "Western":
      $( IDGenre ).css( { color: "rgb(184, 108, 0)" } );
      break;
    case "Crime":
      $( IDGenre ).css( { color: "rgb(82, 0, 0)" } );
      break;
    case "Thriller":
      $( IDGenre ).css( { color: "rgb(59, 61, 85)" } );
      break;
    case "Familial":
      $( IDGenre ).css( { color: "rgb(0, 203, 115)" } );
      break;
    case "Guerre":
      $( IDGenre ).css( { color: "rgb(105, 192, 11)" } );
      break;
    case "Musique":
      $( IDGenre ).css( { backgroundColor: "white", borderRadius: "2px" } );
      break;
    case "Mystère":
      $( IDGenre ).css( { color: "rgb(22, 181, 115)" } );
      break;
  }
}
$( ".listContainer" ).click( function () {
  $( this ).animate( { height: $( "#listContainer" ).get( 0 ).scrollHeight }, 350 );
} );
$( "#ListIMG" ).click( function () {
  if ( PrecisionMode == false ) {
    if ( ListMode == false ) {
      $( "#BoutonContainer, #BoutonContainerp" ).animate( { left: "200%" }, 350 );
      $( "#Affichage" ).animate( { top: "-10%" }, 350 );
      setTimeout( function () {
        $( "#listContainer" ).animate( { left: "0em" }, 500 );
        $( "#listContainer" ).show();
        $( "#BoutonContainer, #BoutonContainerp" ).hide();
        listheight = $( "#listFilm0" ).height();
        $( "#ListIMG" ).css( { borderColor: "rgba(255, 255, 255, 0.829)" } );
        $( "#TVIMG" ).css( { borderColor: "black" } );
      }, 500 );
      ListMode = true;
    }
  }
} );
$( "#TVIMG" ).click( function () {
  if ( PrecisionMode == false ) {
    if ( ListMode == true ) {
      $( "#listContainer" ).animate( { left: "-200em" }, 500 );
      $( "#BoutonContainer, #BoutonContainerp" ).show();
      $( "#Affichage" ).animate( { top: "4%" }, 350 );
      $( ".listContainer" ).css( { height: "7em" } );
      setTimeout( function () {
        $( "#BoutonContainer, #BoutonContainerp" ).animate( { left: "0%" }, 350 );
        $( "#listContainer" ).hide();
        $( "#TVIMG" ).css( { borderColor: "rgba(255, 255, 255, 0.829)" } );
        $( "#ListIMG" ).css( { borderColor: "black" } );
      }, 350 );
      ListMode = false;
    }
  }
} );
$( document ).on( "click", ".listContainer", function () {
  if ( $( this ).height() == listheight ) {
    $( this ).animate( { height: $( this ).get( 0 ).scrollHeight }, 350 );
  } else {
    $( this ).animate( { height: "7em" }, 350 );
  }
} );
$( "#pasVu" ).click( function () {
  if ( PrecisionMode == false ) {
    $( ".vu" ).hide();
    $( "#BoutonContainer" ).hide();
    $( "#BoutonContainerp" ).show();
    $( ".pasvu" ).show();
    $( "#pasVu" ).css( { borderColor: "aliceblue" } );
    $( "#Vu" ).css( { borderColor: "black" } );
    $( "h1" ).text( "Films à voir avec la Salopette" );
  }
} );
$( "#Vu" ).click( function () {
  if ( PrecisionMode == false ) {
    $( ".pasvu" ).hide();
    $( "#BoutonContainerp" ).hide();
    $( "#BoutonContainer" ).show();
    $( ".vu" ).show();
    $( "#Vu" ).css( { borderColor: "aliceblue" } );
    $( "#pasVu" ).css( { borderColor: "black" } );
    $( "h1" ).text( "Recap des films vu avec la Salopette" );
  }
} );
$( "#ListIMG, #TVIMG" ).hover(
  function () {
    if ( PrecisionMode == false ) {
      $( this ).css( { transform: "scale(1.2)" } );
    }
  },
  function () {
    if ( PrecisionMode == false ) {
      $( this ).css( { transform: "scale(1)" } );
    }
  }
);
$( "#Vu, #pasVu" ).hover(
  function () {
    if ( PrecisionMode == false ) {
      $( this ).css( { transform: "scale(1.1)" } );
    }
  },
  function () {
    if ( PrecisionMode == false ) {
      $( this ).css( { transform: "scale(1)" } );
    }
  }
);
$( "#fullscreen" ).click( function () {
  if ( fullscreenMode == false ) {
    $( "#VupasVu, #ColoneList, #Affichage, #SearchIMG, #FilterIMG" ).animate( { opacity: "0" }, 200 );
    setTimeout( function () {
      $( "#VupasVu, #ColoneList, #Affichage, #SearchIMG, #FilterIMG" ).hide();
      fullscreenMode = true;
    }, 210 );
  } else {
    $( "#VupasVu, #ColoneList, #Affichage, #SearchIMG, #FilterIMG" ).show();
    $( "#VupasVu, #ColoneList, #Affichage, #SearchIMG, #FilterIMG" ).animate( { opacity: "1" }, 200 );
    fullscreenMode = false;
  }
} );
function Titlesize ( Title, PATH ) {
  if ( Title.length <= 20 ) {
    $( PATH ).css( { fontSize: "larger" } );
    return;
  } else if ( Title.length >= 30 ) {
    $( PATH ).css( { fontSize: "0.8em" } );
    return;
  } else if ( Title.length >= 25 ) {
    $( PATH ).css( { fontSize: "1em" } );
    return;
  }
}
function DuréeH ( heure, PATH ) {
  let h, m;
  m = 0;
  h = Math.floor( heure / 60 );
  m = heure - h * 60;
  $( PATH ).text( h + " h " + m + " min" );
}
function Splitand ( Genre ) {
  let GenreArray = Genre.split( "&" );
  if ( GenreArray[ 0 ] == " Adventure" ) {
    ArrayGenre.push( "Aventure" );
  } else {
    ArrayGenre.push( GenreArray[ 0 ].trim() );
  }
  if ( GenreArray[ 1 ] == " Adventure" ) {
    ArrayGenre.push( "Aventure" );
  } else {
    ArrayGenre.push( GenreArray[ 1 ].trim() );
  }
}
let FilterOn = [];
$( ".Filter" ).click( function () {
  if ( PrecisionMode == false ) {
    let TextClick = $( this ).text().trim();
    $( this ).css( { color: "white" } );
    let CheckupArray = FilterOn.includes( TextClick );
    if ( CheckupArray == false ) {
      FilterOn.push( $( this ).text().trim() );
      for ( let i = 0; i < Film.length; i++ ) {
        let Checkup = $( "#Genre" + i )
          .text()
          .includes( TextClick );
        if ( Checkup == false ) {
          $( "#Image" + i ).addClass( "Caché" );
          $( "#listFilm" + i ).addClass( "Caché" );
        }
      }
      for ( let i = 0; i < Film.length; i++ ) {
        let Checkup = $( "#Genrep" + i )
          .text()
          .includes( TextClick );
        if ( Checkup == false ) {
          $( "#Imagep" + i ).addClass( "Caché" );
          $( "#listFilmp" + i ).addClass( "Caché" );
        }
      }
    } else {
      $( this ).css( { color: "black" } );
      FilterOn.splice( FilterOn.indexOf( TextClick ), 1 );
      for ( let i = 0; i < Film.length; i++ ) {
        if ( FilterOn.length == 0 ) {
          $( "#Image" + i ).removeClass( "Caché" );
          $( "#Imagep" + i ).removeClass( "Caché" );
          $( "#listFilm" + i ).removeClass( "Caché" );
          $( "#listFilmp" + i ).removeClass( "Caché" );
        } else {
          let ArrayVerif = [];
          let Amount = FilterOn.length;
          Amount -= 1;
          for ( let k = 0; k < FilterOn.length; k++ ) {
            let CheckArray = $( "#Genre" + i )
              .text()
              .includes( TextClick );
            ArrayVerif.push(
              $( "#Genre" + i )
                .text()
                .includes( FilterOn[ k ] )
            );
            if (
              CheckArray == false &&
              Amount == k &&
              ArrayVerif.includes( false ) == false
            ) {
              $( "#Image" + i ).removeClass( "Caché" );
              $( "#listFilm" + i ).removeClass( "Caché" );
            }
          }
          let ArrayVerifp = [];
          for ( let k = 0; k < FilterOn.length; k++ ) {
            let CheckArray = $( "#Genrep" + i )
              .text()
              .includes( TextClick );
            ArrayVerifp.push(
              $( "#Genrep" + i )
                .text()
                .includes( FilterOn[ k ] )
            );
            if (
              CheckArray == false &&
              Amount == k &&
              ArrayVerifp.includes( false ) == false
            ) {
              $( "#Imagep" + i ).removeClass( "Caché" );
              $( "#listFilmp" + i ).removeClass( "Caché" );
            }
          }
        }
      }
    }
    FilterGreen();
  }
} );
function FilterGreen () {
  if ( FilterOn[ 0 ] === undefined ) {
    $( "#FilterIMG" ).css( { borderColor: "black" } );
  } else {
    $( "#FilterIMG" ).css( { borderColor: "green" } );
  }
}
$( "#FilterIMG" ).click( function () {
  if ( PrecisionMode == false ) {
    if ( FilterMode == false ) {
      $( this ).animate( { top: "21.3em" }, 300 );
      $( "#Filter" ).animate( { top: "0%" }, 300 );
      FilterMode = true;
    } else {
      $( this ).animate( { top: "-1.5%" }, 300 );
      $( "#Filter" ).animate( { top: "-22em" }, 300 );
      FilterMode = false;
    }
  }
} );
function Recherche () {
  let normal = $( "#SearchBar" ).val().toLowerCase();
  if ( normal.length > 0 ) {
    $( "#SearchIMG" ).css( { borderColor: "green" } );
    $( "#CroixIMG" ).show();
  } else {
    $( "#SearchIMG" ).css( { borderColor: "black" } );
    $( "#CroixIMG" ).hide();
  }
  for ( let i = 0; i < Film.length; i++ ) {
    if (
      $( "#BackTitle" + i )
        .text()
        .toLowerCase()
        .indexOf( normal ) == -1
    ) {
      $( "#Image" + i ).addClass( "PasRecherché" );
      $( "#listFilm" + i ).addClass( "PasRecherché" );
    } else if (
      $( "#Image" + i ).hasClass( "Caché" ) == false &&
      $( "#BackTitle" + i )
        .text()
        .toLowerCase()
        .indexOf( normal ) > -1
    ) {
      $( "#Image" + i ).removeClass( "PasRecherché" );
      $( "#listFilm" + i ).removeClass( "PasRecherché" );
    }
  }
  for ( let i = 0; i < FilmPasvu.length; i++ ) {
    if (
      $( "#BackTitlep" + i )
        .text()
        .toLowerCase()
        .indexOf( normal ) == -1
    ) {
      $( "#Imagep" + i ).addClass( "PasRecherché" );
      $( "#listFilmp" + i ).addClass( "PasRecherché" );
    } else if (
      $( "#Imagep" + i ).hasClass( "Caché" ) == false &&
      $( "#BackTitlep" + i )
        .text()
        .toLowerCase()
        .indexOf( normal ) > -1
    ) {
      $( "#Imagep" + i ).removeClass( "PasRecherché" );
      $( "#listFilmp" + i ).removeClass( "PasRecherché" );
    }
  }
}
$( "#SearchIMG" ).click( function () {
  if ( PrecisionMode == false ) {
    if ( SearchMode == false ) {
      $( this ).animate( { top: "2.4em" }, 300 );
      $( "#SearchDiv" ).animate( { top: "0%" }, 300 );
      SearchMode = true;
    } else {
      $( this ).animate( { top: "-1.5%" }, 300 );
      $( "#SearchDiv" ).animate( { top: "-3em" }, 300 );
      SearchMode = false;
    }
  }
} );
$( "#CroixIMG" ).click( function () {
  $( "#SearchBar" ).val( "" );
  Recherche();
} );
