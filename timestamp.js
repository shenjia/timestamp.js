/**
 * Timestamp.js
 * @author shenjia
 */

// Convert timestamp to date
var timestamp2date = function ( timestamp ) {
    return new Date( timestamp * 1000 );
}

// Print a date
var printdate = function ( date ) {
  return date.getFullYear() + '-' + ( date.getMonth() + 1 ) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}

// Get argument from command line
var arguments = process.argv.splice( 2 );
var timestamp = arguments[ 0 ];

// If a timestamp is given, print the date
if ( timestamp ) {
	var date = timestamp2date( timestamp );
	console.log( printdate( date ) );
}
// If there is no argument, print the timestamp of now
else {
	var date = new Date();
	console.log( Math.ceil( date.getTime() / 1000 ) );
}
