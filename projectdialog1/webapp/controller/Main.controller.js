sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ar.com.projectdialog1.controller.Main", {
            onInit: function () {

            },
            onCreate: function () {
                if (!this.pDialog) {
                    this.pDialog = this.loadFragment({
                        name: "ar.com.projectdialog1.view.Fragments.Create"
                    });
                }
                this.pDialog.then(function (oDialog) {
                    oDialog.open();
                });
            }
        });
    });
