sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ar.com.jsonproject2.controller.Main", {
            onInit: function () {

            },
            onEdit : function(){
                alert("Edit not implemented yet");
            },
            onCreate : function(){
                alert("Create not implemented yet");
            }  
        });
    });
