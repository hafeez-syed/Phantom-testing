/**
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *

 Author: Hafeez Syed
 File: system-info.js
 Created on 7/2/17 1:58 AM
 Project: Packtpub.com-Rapid-Rapid-Phantomjs
 Description: < DESCRIPTION HERE >

 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

'use strict';

(function () {

	var system = require( 'system' );
	var os = system.os;
	var args = system.args;


	module.exports = {
		system: system,
		os: os,
		args: args
	}

})();