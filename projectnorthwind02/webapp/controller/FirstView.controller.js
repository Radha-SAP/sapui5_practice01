sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ar.com.projectnorthwind02.controller.FirstView", {
            onInit: function () {

            },
            onNavigate: function () {
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteMainView");
            }
        });
    });
