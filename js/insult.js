( function( $ ){

	var randFuckingArray = '',
		fuckingDescription = '';

	var cussing = [],
		fuckAssNoun = [],
		fuckingDescriptions = [];

	$.getJSON( "api/list_all_words.json", function( data ) {

		//@todo some fucking tests/validation would nice here.

		cussing = data.cussing;
		fuckAssNoun = data.fuckAssNoun;
		fuckingDescriptions = data.fuckingDescriptions;

	}).done(function(){

		// show the damn content after the bitchin json request completes
		$( '#loading-shit' ).remove();
		$( '#main-shit' ).show();

		// When finished load up bitches
		randThatShitUp();
	});

	function randomUpSomeShit( cussing, fuckAssNoun, fuckingDescriptions ) {
		// Randomizing shit bitches and returning the shit
		var randCussing = cussing[ Math.floor( Math.random()*cussing.length ) ];
		var randFuckAssNoun = fuckAssNoun[ Math.floor(Math.random()*fuckAssNoun.length ) ];
		var randFuckingDescription = fuckingDescriptions[ Math.floor( Math.random()*fuckingDescriptions.length ) ];

		return [ randCussing, randFuckAssNoun, randFuckingDescription ];
	}

	function randThatShitUp() {
		var fuckingTarget = $( '.fucking.description .sentence' );
		randFuckingArray = randomUpSomeShit( cussing, fuckAssNoun, fuckingDescriptions );
		fuckingDescription = randFuckingArray[2];

		// Swapping out the title bitches
		$( '.insult h1.ass' ).html( randFuckingArray[0] + ' ' + randFuckingArray[1] );

		// Swapping out the descriptions bitches
		fuckingTarget.html( randFuckingArray[2] );
		fuckingTarget.find( 'span' ).html( randFuckingArray[0] + ' ' + randFuckingArray[1] );
	}

	// On click bitches
	$( 'button.damn' ).on( 'click', randThatShitUp );

	$( 'a.twitter-share-button' ).on( 'click', function( e ) {

		var fuckingUrl = $( this ).attr( 'href' );
		var fuckingSpit = fuckingUrl.split( 'text=' );
		var fuckingDescriptionAgain = fuckingDescription.replace( '<span class=\'ass\'></span>', randFuckingArray[0] + ' ' + randFuckingArray[1] );
		var newFuckingUrl = fuckingSpit[0] + 'text=' + randFuckingArray[0] + ' ' + randFuckingArray[1] + ' (noun) "' + fuckingDescriptionAgain + '" Get yours at' ;

		$( this ).attr( 'href', encodeURI( newFuckingUrl ) );

	} );


} )( jQuery );
