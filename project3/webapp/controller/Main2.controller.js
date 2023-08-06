sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment) {
        "use strict";

        return Controller.extend("ar.com.project3.controller.Main2", {
            onInit: function () {

            },
            // onOpenDialog: function(){

            //     if(!this.pDialog){
            //         this.pDialog = this.loadFragment({
            //             name:"ar.com.project3.view.Fragment.abc"
            //         });
            //     }
            //     this.pDialog.then(function(oDialog){
            //         oDialog.open();
            //     });
            // },
            // onCloseDialog: function(){

            //     this.byId("helloDialog").close();
            // },
            getDialog: function () {
                var oView = this.getView();
                if (!this.pDialog) {
                    this.pDialog = Fragment.load({
                        name: "ar.com.project3.view.Fragment.abc",
                        id: oView.getId(),
                        controller: this
                    });
                }
                this.pDialog.then(function (oDialog) {
                    oView.addDependent(oDialog);
                    return oDialog;
                    // oDialog.open();
                });
                return this.pDialog

            },
            onOpenDialog: function (oEvent) {
                var oSource = oEvent.getSource();
                this.getDialog().then(function (oDialog) {
                    oDialog.open(oSource);
                })
            },
            onCloseDialog: function (oEvent) {
                var oSource = oEvent.getSource();
                this.getDialog().then(function (oDialog) {
                    oDialog.close(oSource);
                })
            }


        });
    }
);
