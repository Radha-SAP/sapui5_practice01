sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function (BaseController) {
        "use strict";

        return BaseController.extend("ar.com.northwind04.controller.Divide", {
            onInit() {
                var oRouterobject = sap.ui.core.UIComponent.getRouterFor(this);
                oRouterobject.getRoute("RouteDivide").attachPatternMatched(this._onObjectMatched, this);
            },
            _onObjectMatched: function (oEvent) {
                var params = oEvent.getParameter("arguments");
                var Divide = params.Divide;
                this.getView().byId("IdText").setText("Division is" + " " + Divide+ " ");

            }
        });
    }
);
