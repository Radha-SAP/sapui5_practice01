sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel',
    "../model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel,formatter) {
        "use strict";

        return Controller.extend("ar.com.projectlistformatter.controller.Main", {
            formatter: formatter,
            onInit: function () {
                var curr = {
                    currency: "EUR"
                }
                var oViewModel = new JSONModel(currency);
                this.getView().setModel(oViewModel, "view");
            }
        });
    });
