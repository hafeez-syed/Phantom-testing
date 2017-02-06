/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

 Author: Hafeez Syed
 File: 1_3-helloWorld.js
 Created on 7/2/17 1:02 AM
 Project: Packtpub.com-Rapid-Rapid-Phantomjs
 Description: < DESCRIPTION HERE >

 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

'use strict';

(function () {

	var error_handler = require('./common/error_handling');

	console.log( 'Welcome to the world of Phantom' );

	phantom.onerror = error_handler;

	// Throwing an error
	//throw new Error('something is wrong');

	// default 0
	phantom.exit();

})();