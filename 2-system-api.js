/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

 Author: Hafeez Syed
 File: 2-system-api.js
 Created on 7/2/17 1:37 AM
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

	var scriptName = systemInfo.args[0];
	var name = systemInfo.args[1];

	phantom.onerror = errorHandler;

	if(systemInfo.args.length < 2) {
		throw new Error( 'Name argument is missing.' );
	}

	console.log(
		'Hey ' + name + '\n' +
		'You are on a ' + systemInfo.os.architecture + ' ' + systemInfo.os.name + ' machine.\n' +
		'You executed ' + scriptName + '.'
	);

	phantom.exit();

})();