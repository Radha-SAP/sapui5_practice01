sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ar.com.northwind04.controller.Main", {
            onInit: function () {


            },
            onAdd: function () {
                var firstNum = this.getView().byId("IDGenInput1").getValue();
                var SecondNum = this.getView().byId("IDGenInput2").getValue();
                var sum = parseInt(firstNum) + parseInt(SecondNum);
                var oRouterobject = sap.ui.core.UIComponent.getRouterFor(this);
                oRouterobject.navTo("RouteAdd",
                    {
                        Sum: sum
                    });
            },
            onSubstract: function () {
                var firstNum = this.getView().byId("IDGenInput1").getValue();
                var SecondNum = this.getView().byId("IDGenInput2").getValue();
                var substract = parseInt(firstNum) - parseInt(SecondNum);
                var oRouterobject = sap.ui.core.UIComponent.getRouterFor(this);
                oRouterobject.navTo("RouteSubstract",
                    {
                        Substract:substract
                    });
                },
                onMultiply: function () {
                    var firstNum = this.getView().byId("IDGenInput1").getValue();
                    var SecondNum = this.getView().byId("IDGenInput2").getValue();
                    var multiply = parseInt(firstNum) * parseInt(SecondNum);
                    var oRouterobject = sap.ui.core.UIComponent.getRouterFor(this);
                    oRouterobject.navTo("RouteMultiply",
                        {
                            Multiply: multiply
                        });
                    },
                    onDivide: function () {
                        var firstNum = this.getView().byId("IDGenInput1").getValue();
                        var SecondNum = this.getView().byId("IDGenInput2").getValue();
                        var divide = parseInt(firstNum) / parseInt(SecondNum);
                        var oRouterobject = sap.ui.core.UIComponent.getRouterFor(this);
                        oRouterobject.navTo("RouteDivide",
                            {
                                Divide: divide
                            });
                        },
        });
    });
