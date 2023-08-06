/*global QUnit*/

sap.ui.define([
	"arcom/project3/controller/Main2.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Main2 Controller");

	QUnit.test("I should test the Main2 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
