/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

 Author: Hafeez Syed
 File: 3-webpage-api.js
 Created on 7/2/17 2:02 AM
 Project: Packtpub.com-Rapid-Rapid-Phantomjs
 Description: < DESCRIPTION HERE >

 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

'use strict';

(function () {

	var errorHandler = require( './common/error_handling' );
	var systemInfo = require( './common/system-info' );
	var page = require( 'webpage' ).create();

	var name = systemInfo.args[1];
	var url = systemInfo.args[2];

	phantom.onerror = errorHandler;

	if(systemInfo.args.length <= 2) {
		throw new Error( 'Name as system argument is missing.' );
	}

	console.log(
		'Hey ' + name + '\n' +
		'You are on a ' + systemInfo.os.architecture + ' ' + systemInfo.os.name + ' machine.\n' +
		'You executed ' + systemInfo.args[1] + '.\n\n' +
		'Opening ' + url + ' . . .'
	);

	page.open(url, websiteStatus);

	function websiteStatus(status) {
		console.log( '***********************************************' );
		console.log( 'Opened ' + url + ' with status: ' + status );

		page.render('image.png');

		phantom.exit();
	}

})();