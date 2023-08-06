sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ar.com.northwind05.controller.Details", {
            onInit: function () {
                var oRouterobject = sap.ui.core.UIComponent.getRouterFor(this);
                oRouterobject.getRoute("Details").attachPatternMatched(this._onObjectMatched, this);
            },
            _onObjectMatched: function (oEvent) {
                var params = oEvent.getParameter("arguments");
                var Value = params.Value;
                var text = params.Text;
                this.getView().byId("txt1").setText(text + " " + Value + " ");

            }

        });
    });