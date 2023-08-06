sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function (BaseController) {
        "use strict";

        return BaseController.extend("ar.com.northwind04.controller.Multiply", {
            onInit() {
                var oRouterobject = sap.ui.core.UIComponent.getRouterFor(this);
                oRouterobject.getRoute("RouteMultiply").attachPatternMatched(this._onObjectMatched, this);
            },
            _onObjectMatched: function (oEvent) {
                var params = oEvent.getParameter("arguments");
                var Multiply = params.Multiply;
                this.getView().byId("IdText").setText("Multiplication is" + " " + Multiply+ " ");

            }
        });
    }
);
