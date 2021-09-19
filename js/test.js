$.getJSON( "/js/json/filmVu.json", function ( data ) {
    for ( const [ key, value ] of Object.entries( data ) ) {
        console.log( value )
    }
} )