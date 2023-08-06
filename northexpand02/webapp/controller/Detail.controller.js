sap.ui.define([
    "sap/ui/core/mvc/Controller/BaseController",
    "sap/ui/model/json/JSONModel"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,BaseController,JSONModel) {
        "use strict";

        return Controller.extend("ar.com.northexpand02.controller.Detail", {
            onInit: function () {
                var ioriginalBusyDelay,
                oViewModel = new JSONModel({
                    busy : true,
                    delay : 0
                });
                this.getRouter("object").attachPatternMatched(this._onObjectMatched, this);
                var oCurrencyModel = new JSONModel({
                    currency: "AUD"
                });
                this.getView().setModel(oCurrencyModel, "CurrencyModel");
                ioriginalBusyDelay = this.getView().getBusyIndicatorDelay();
                this.setModel(oViewModel, "detailView");
                this.getOwnerComponent().getModel().metadataLoaded().then(function(){
                    oViewModel.setProperty("/delay",ioriginalBusyDelay);
                });

            },
            _bindView : function (sobjectPath){
                var oViewModel= this.getModel("objectView"),
                oDataModel = this.getModel();
                this.getView().bindElement({
                    path: sobjectPath,
                    events:{
                        change: this._onBindingChange.bind(this),
                        dataRequested: function() {
                            oDataModel.metadataLoaded().then(function(){
                                oViewModel.setProperty("/busy",true)
                            });
                         },
                        dataReceived: function(){
                            oViewModel.setProperty("/busy",false);
                        }
                    }
                });
            },
            _onBindingChange: function(){
                var oView = this.getView(),
                oViewModel = this.getModel("detailView"),
                oElementBinding = oView.getElementBinding();
            }
            
        });
    });

