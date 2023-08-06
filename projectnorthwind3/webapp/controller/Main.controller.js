sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ar.com.projectnorthwind3.controller.Main", {
            onInit: function () {
           
            },
            onNavigateClick: function(){
             var firstName =this.getView().byId("_IDGenInput1").getValue();
             var lastName =this.getView().byId("_IDGenInput2").getValue();
             var oRouterobject = sap.ui.core.UIComponent.getRouterFor(this);
             oRouterobject.navTo("RouteDetails",
             {
                firstname:firstName,
                lastname:lastName
            });

            }
            
            
           
            
        });
    });
