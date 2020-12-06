sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel'
], function(Controller, MessageToast, JSONModel) {
    'use strict';
    return Controller.extend("sap.ui.demo.FirstProj.App",{
        onInit: function(){
            var oData={
                recipient:{
                    name:'UI5'
                }
            }
            var oModel= new JSONModel(oData);
            // debugger;
            this.getView().setModel(oModel, 'mainModel');
        },
        onShowHello:function(){
            var inputString = this.getView().byId('InputNoEdit').getValue();
            // debugger;
            MessageToast.show("Hello "+inputString+"!");
        }
    });
});