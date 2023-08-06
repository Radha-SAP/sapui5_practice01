sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function (BaseController) {
        "use strict";

        return BaseController.extend("ar.com.northwind04.controller.Substract", {
            onInit() {
                var oRouterobject = sap.ui.core.UIComponent.getRouterFor(this);
                oRouterobject.getRoute("RouteSubstract").attachPatternMatched(this._onObjectMatched, this);
            },
            _onObjectMatched: function (oEvent) {
                var params = oEvent.getParameter("arguments");
                var Substract = params.Substract;
                this.getView().byId("IdText").setText("Substraction is" + " " + Substract + " ");

            }
        });
    }
);
