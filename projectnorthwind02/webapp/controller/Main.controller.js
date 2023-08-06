sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ar.com.projectnorthwind02.controller.Main", {
            onInit: function () {

            },
            onPress: function () {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("");

            },
                onNavButtonPress: function () {
                    var oRouter = this.getOwnerComponent().getRouter();
                    oRouter.navTo("RouteMain");  

        }});
    });