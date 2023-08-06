sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ar.com.northwind05.controller.Main", {
            onInit: function () {

            },
            onAdd: function () {
                var firstNum = this.getView().byId("IDGenInput1").getValue();
                var SecondNum = this.getView().byId("IDGenInput2").getValue();
                var sum = parseInt(firstNum) + parseInt(SecondNum);
                var oRouterobject = sap.ui.core.UIComponent.getRouterFor(this);
                oRouterobject.navTo("Details",
                    {
                        Value: sum,
                        Text: "This is addition"
                    });
            },
            onSubstract: function () {
                var firstNum = this.getView().byId("IDGenInput1").getValue();
                var SecondNum = this.getView().byId("IDGenInput2").getValue();
                var substract = parseInt(firstNum) - parseInt(SecondNum);
                var oRouterobject = sap.ui.core.UIComponent.getRouterFor(this);
                oRouterobject.navTo("Details",
                    {
                        Value: substract,
                        Text: "This is substraction"                    });
            },
            onMultiply: function () {
                var firstNum = this.getView().byId("IDGenInput1").getValue();
                var SecondNum = this.getView().byId("IDGenInput2").getValue();
                var multiply = parseInt(firstNum) * parseInt(SecondNum);
                var oRouterobject = sap.ui.core.UIComponent.getRouterFor(this);
                oRouterobject.navTo("Details",
                    {
                        Value: multiply,
                        Text: "This is multiplication"                    });
            },
            onDivide: function () {
                var firstNum = this.getView().byId("IDGenInput1").getValue();
                var SecondNum = this.getView().byId("IDGenInput2").getValue();
                var divide = parseInt(firstNum) / parseInt(SecondNum);
                var oRouterobject = sap.ui.core.UIComponent.getRouterFor(this);
                oRouterobject.navTo("Details",
                    {
                        Value: divide,
                        Text: "This is division"                    });
            },
        });
    });
