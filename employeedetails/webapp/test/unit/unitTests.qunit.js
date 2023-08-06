/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"arcom/employeedetails/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
