/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

 Author: Hafeez Syed
 File: error_handling.js
 Created on 7/2/17 1:30 AM
 Project: Packtpub.com-Rapid-Rapid-Phantomjs
 Description: < DESCRIPTION HERE >

 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

'use strict';

(function () {
	// build up error message stack
	module.exports = function (msg, trace) {
		var msgStack = ['PHANTOM ERROR: ' + msg];

		if(trace && trace.length) {
			msgStack.push( 'TRACE' );
			trace.forEach(eachMessage);
		}

		console.error( msgStack.join('\n') );

		// exit phantomjs with exit code
		phantom.exit(1);
	};


	function eachMessage(t) {
		console.log(t);
		msgStack.push( ' -> ' + (t.file || t.sourceURL ) + ': ' + t.line + ( t.function ? '(in function ' + t.function +')' : '') )
	}
})();