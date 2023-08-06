sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, MessageBox) {
        "use strict";

        return Controller.extend("ar.com.customerproject.controller.View", {
            onInit: function () {
                
               },
               onHandleChange: function (){
                var customerName = this.getView().byId('_IDGenComboBox1').getSelectedItem().getProperty("additionalText");
                var inputFieldUsingid = this.getView().byId('_IDGenText15');
                inputFieldUsingid.setText(customerName);
               },
               onPress: function(){
                   this.flag = "C";
                   if(!this.pDialog){
                       this.pDialog = this.loadFragment({
                           name:"ar.com.customerproject.view.Fragment.Myfragment"
                       });
   
                   }
                   this.pDialog.then(function (oDialog) {
                       oDialog.open();
                   });
               },
               
              onSave: function () {
                var oOrderData = this.getView().getModel("Order1").getData();
                var oModel = this.getOwnerComponent().getModel("Order1");
                var aRegistros = oModel.getData();
                aRegistros.Orders.push(oOrderData);
                oModel.setData(aRegistros);
                MessageBox.show("Record Added");
                this.pDialog.then(function (oDialog) {
                    oDialog.close();
                })
              },
              onHandleChangeItemCode: function () {
                var customerName = this.getView().byId('_IDGenComboBox2').getSelectedItem().getProperty("addtionalText");
                var inputFieldUsingid = this.getView().byId('_IDGenInput2');
                inputFieldUsingid.setValue(customerName);                
              },
              onCancel: function (oEvent) {
                this.pDialog.then(function (oDialog) {
                    oDialog.close();
                })
              }
            })
        });
    
