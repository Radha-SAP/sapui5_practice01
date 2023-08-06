sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v4/ODataModel",
    "sap/ui/model/BindingMode",
    'sap/m/MessageToast'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, ODataModel, BindingMode, MessageToast) {
        "use strict";
        return Controller.extend("ar.com.odatav401.controller.main", {
            onInit: function () {
                var sServiceUrl = "/proxy/b1s/v2/";
                var oModel = new ODataModel({
                    serviceUrl: sServiceUrl,
                    synchronizationMode: "None",
                    groupId: "$direct"
                });
                var BusinessPart = [];
                this.getView().setModel(BusinessPart, "BP");
                // Set the default binding mode to TwoWay
                oModel.setDefaultBindingMode("TwoWay");

                this.getView().setModel(oModel);

                // Define the entity set and fields for the form
                var sEntitySet = "/BusinessPartners";
                var aFields = [
                    "CardCode",
                    "CardName",
                    "CardType",
                    "GroupCode",
                    "Address",
                    "ZipCode",
                    "MailAddress",
                    "MailZipCode"
                ];

                // Bind the form fields to the Business Partner entity
                this.bindBusinessPartnerData(sEntitySet, aFields);
            },
            bindBusinessPartnerData: function (sEntitySet, aFields) {
                var oModel = this.getView().getModel();
                var oView = this.getView();
                var oForm = oView.byId("businessPartnerForm"); // Add an ID to the VBox in the view

                // Create the entity set binding for the Business Partner
                var oEntitySetBinding = oModel.bindContext(sEntitySet + "('VMAT100002')");

                // Attach dataReceived event to handle data retrieval
                oEntitySetBinding.attachEventOnce("dataReceived", function () {
                    // Get the data object from the binding context
                    var oBusinessPartner = oEntitySetBinding.getBoundContext().getObject();
                    // this.oBusinessPartner = oEntitySetBinding.getBoundContext().getObject();
                    oView.setModel(oBusinessPartner, "BP");
                    // Bind the form fields to the retrieved data
                    aFields.forEach(function (sField) {
                        try {
                            oView.byId(sField).setValue(oBusinessPartner[sField]);
                        } catch { }
                    });
                    // Bind the form to the specific Business Partner context
                    oView.bindElement({
                        path: oEntitySetBinding.getBoundContext().getPath(),
                        model: oModel
                    });
                });

                // Trigger a backend call to read data
                oEntitySetBinding.requestObject();
            },
            // In the controller
            onSavePress: function () {
                var oModel = this.getView().getModel();
                var oView = this.getView();
                // Create a new entry in the entity set using createEntry method
                var sEntitySet = "/BusinessPartners";
                // If context does not exist, it means it's a new entry, so create the entry in the backend
                var oEntitySetBinding = oModel.bindContext(sEntitySet);
                var oNewEntry = oView.getModel("BP");
                try { oNewEntry.CardCode = oView.byId('CardCode').getValue(); } catch { };// Set the properties for the new entry
                try { oNewEntry.CardName = oView.byId('CardName').getValue(); } catch { };
                try { oNewEntry.CardType = oView.byId('CardType').getValue(); } catch { };
                try { oNewEntry.GroupCode = oView.byId('GroupCode').getValue(); } catch { };
                try { oNewEntry.Address = oView.byId('Address').getValue(); } catch { };
                try { oNewEntry.ZipCode = oView.byId('ZipCode').getValue(); } catch { };
                try { oNewEntry.MailAddress = oView.byId('MailAddress').getValue(); } catch { };
                try { oNewEntry.MailZipCode = oView.byId('MailZipCode').getValue(); } catch { };

                oNewEntry.ContactPerson = "";
                oNewEntry.ContactEmployees = [];
                // Get the entity set binding to the root collection (no path)
                var oEntitySetBinding = oModel.bindList(sEntitySet);
                // Create a new context pointing to the entity set for creating a new entry
                var oNewEntryContext = oEntitySetBinding.create(oNewEntry);

                oModel.submitBatch("$auto").then(function () {
                    MessageToast.show("New entry created successfully!");
                }).catch(function (oError) {
                    MessageToast.show("Error creating new entry. Please try again.");
                });
            }

        });
    });
