sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("anu.com.project4.controller.Main3", {
            onInit: function () {

            },
            onOpenDialog: function(){

                     if(!this.pDialog){
                         this.pDialog = this.loadFragment({
                             name:"anu.com.project4.view.Fragment.main3"
                         });
                     }
                     this.pDialog.then(function(oDialog){
                         oDialog.open();
                     });
                 },
                 onCloseDialog: function(){
    
                     this.byId("employeedetails").close();
                },
        });
    });
