sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/message/Message",
    "sap/ui/core/library",
    "sap/ui/core/Fragment",
    
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Message, library, Fragment,) {
        "use strict";
        // shortcut for sap.ui.core.MessageType
        var MessageType=library.MessageType;

        return Controller.extend("radha.com.project5.controller.View3", {
            onInit: function () {
                var oMessageManager,oView;
                oView=this.getView();
                // set message model
                oMessageManager=sap.ui.getCore().getMessageManager();
                oView.setModel(oMessageManager.getMessageModel(),"message")
                // or just do it for the whole view
                oMessageManager.registerObject(oView,true);
                var oMessage="Welcome to SAP UI5"
                this.fnAddMessage(oMessage);
            },
            _getMessagePopover:function(){
                var oView=this.getView();
                // create popover lazily(singleton)
                if(!this._pMessagePopover){
                    this._pMessagePopover=Fragment.load({id:oView.getId(),
                    name:
                "radha.com.project5.view.Fragments.MessageManager"
            }).then(function(oMessagePopover){oView.addDependent(oMessagePopover);
                return oMessagePopover;
            });
                }
                return this._pMessagePopover;
            },
            onMessagePopoverPress: function (oEvent)
            {
                var oSourceControl= oEvent.getSource();
                this._getMessagePopover().then(function(oMessagePopover){
                    oMessagePopover.openBy(oSourceControl);
                });
            },
            fnAddMessage(oMessageText){
                var oMessage= new Message({
                    message: oMessageText,
                    type: MessageType.Success,
                });
                sap.ui.getCore().getMessageManager().addMessages(oMessage);
            }
        });
    });
