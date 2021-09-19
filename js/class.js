class film {
    constructor( precision, data ) {
        this.IsFilm = ( data[ "title" ] === undefined ? false : true )
        this.ID = precision[ "id" ]
        this.vu = precision[ "vu?" ]
        this.srcLQ = "https://image.tmdb.org/t/p/w400" + data[ "backdrop_path" ]
        this.srcHQ = "https://image.tmdb.org/t/p/original" + data[ "backdrop_path" ]
        if ( this.IsFilm ) {
            this.title = data[ "title" ]
            this.runTime = DuréeH( data[ "runtime" ], "#Info" + ID + ">.Runtime" )
            this.apparition = moment( data[ "release_date" ] ).format( "DD-MM-YYYY" )
        } else {
            this.title = data[ "name" ],
                this.runTime = data[ "episode_run_time" ][ 0 ],
                this.noSeason = data[ "number_of_seasons" ],
                this.noEpisode = data[ "number_of_episodes" ],
                this.originalTitle = data[ "original_name" ],
                this.apparition = moment( data[ "first_air_date" ] ).format( "DD-MM-YYYY" )
        }
        this.poster = "https://image.tmdb.org/t/p/w500" + data[ "poster_path" ]
        this.voteAverage = data[ "vote_average" ]
        this.genres = precision[ "arrayGenre" ]
    }
    write () {
        let vu = this.vu ? "vu" : "pasvu"
        $( "#BoutonContainer" ).append( '<div id="Image2" class="bouton vu" style="cursor: pointer;">' +
            '<img id="Backdrop2" src="https://image.tmdb.org/t/p/original/x5SRTwGtATzvFjRZXJxmitfqH4y.jpg">' +
            '<img class="Black" src="img/black.png" style="opacity: 0;">' +
            '<h2 id="BackTitle2" style="opacity: 0;">Le Tombeau des lucioles</h2>' +
            '<img class="map0" src="https://image.tmdb.org/t/p/w500/x5SRTwGtATzvFjRZXJxmitfqH4y.jpg">' +
            '</div>' )
    }
}