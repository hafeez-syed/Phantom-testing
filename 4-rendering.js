/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

 Author: Hafeez Syed
 File: 4-rendering.js
 Created on 22/2/17 11:28 PM
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

	var url = systemInfo.args[1];

	phantom.onerror = errorHandler;

	if(systemInfo.args.length <= 1) {
		throw new Error( 'URL is missing.' );
	}

	page.viewportSize = {
		width: 1200,
		height: 1000
	};

	page.open(url, websiteStatus);

	function websiteStatus(status) {
		console.log( '***********************************************' );
		console.log( 'Opened ' + url + ' with status: ' + status );

		page.render('image-1200.png');
		console.log( 'Rendered image of width 1200px' );

		page.viewportSize = {
			width: 800,
			height: 1000
		};

		page.render('image-800.png');
		console.log( 'Rendered image of width 800px' );

		page.viewportSize = {
			width: 500,
			height: 1000
		};

		page.render('image-500.png');
		console.log( 'Rendered image of width 500px' );

		page.clipRect = {
			top: 0,
			left: 0,
			width: 500,
			height: 300
		};

		page.render('image-header-500.png');

		phantom.exit();
	}

})();