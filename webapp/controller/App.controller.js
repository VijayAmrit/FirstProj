sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel'
], function(Controller, MessageToast, JSONModel, ResourceModel) {
    'use strict';
    return Controller.extend("sap.ui.demo.FirstProj.App",{
        
        onShowHello:function(){
            debugger;
            
            var oBundle = this.getView().getModel("i18n").getResourceBundle(); 
            var sRecipient = this.getView().getModel("mainModel").getProperty("/recipient/name");
            // var inputString = this.getView().byId('InputNoEdit').getValue();
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            // debugger;
            MessageToast.show(sMsg+"!");
        }
    });
});