sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/odata/v4/ODataModel'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, ODataModel) {
        "use strict";

        return Controller.extend("ar.com.codeproject5.controller.Details", {
            onInit: function () {
                debugger;
                var sServiceUrl = "https://services.odata.org/V4/Northwind/Northwind.svc/";
                var oModel = new ODataModel({
                    serviceUrl: sServiceUrl,
                    synchronizationMode: "None",
                    autoExpandSelect: true
                });
                this.getView().setModel(oModel, "yourODataModel");

                this.readData();
                // var oRouter = this.getOwnerComponent().getRouter();
                // oRouter.getRoute("RouteDetail").attachPatternMatched(this._onObjectMatched, this);
            },
            _onObjectMatched: function (oEvent) {
                let view = this.getView();
                var oArgs = oEvent.getParameter("arguments");
                var CardCode = oArgs.CardCode;

            },
            readData: function () {
                var sEntitySet = "Products(1)"; // Assuming we want to fetch the product with ID 1
                var oForm = this.byId("productForm");

                oForm.bindElement({
                    path: sEntitySet,
                    events: {
                        dataReceived: function (oEvent) {
                            console.log("Data loaded successfully!", oEvent);
                        },
                        dataRequested: function (oEvent) {
                            console.log("Data request sent!", oEvent);
                        },
                        dataFailed: function (oEvent) {
                            console.error("Error while loading data!", oEvent);
                        }
                    }
                });

            }
        });
    });
