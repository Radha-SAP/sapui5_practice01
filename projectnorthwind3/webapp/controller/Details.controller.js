sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ar.com.projectnorthwind3.controller.Details", {
            onInit: function () {
                var oRouterobject = sap.ui.core.UIComponent.getRouterFor(this);
                oRouterobject.getRoute("RouteDetails").attachPatternMatched(this._onObjectMatched, this);
            },
            _onObjectMatched: function(oEvent)
            {
                var params = oEvent.getParameter("arguments");
                var firstName = params.firstname;
                var lastName  = params.lastname;
                this.getView().byId("IdText").setText("Hello"+" "+ firstName + " " + lastName + " Welcome to UI5");

            },
        
            
           
            
        });
    });
