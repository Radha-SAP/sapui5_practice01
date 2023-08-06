sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function (BaseController) {
        "use strict";

        return BaseController.extend("ar.com.northwind04.controller.Add", {
            onInit() {
                var oRouterobject = sap.ui.core.UIComponent.getRouterFor(this);
                oRouterobject.getRoute("RouteAdd").attachPatternMatched(this._onObjectMatched, this);
            },
            _onObjectMatched: function (oEvent) {
                var params = oEvent.getParameter("arguments");
                var Sum = params.Sum;
                this.getView().byId("IdText").setText("Addition is" + " " + Sum + " ");

            }
        });
    }
);
