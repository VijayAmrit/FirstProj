sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel'
], function(Controller, MessageToast, JSONModel, ResourceModel) {
    'use strict';
    return Controller.extend("sap.ui.demo.FirstProj.App",{
        onInit: function(){
            var oData={
                recipient:{
                    name:'UI5',
                    description:'Description for UI5'
                }
            }
            var oModel= new JSONModel(oData);
            // debugger;
            this.getView().setModel(oModel, 'mainModel');
            // set i18n Model on view
            var i18nModel = new ResourceModel({
                bundleName: 'sap.ui.demo.FirstProj.i18n.i18n',
                supportedLocales: [''],
                fallBackLocale:''
            });
            this.getView().setModel(i18nModel, 'i18n');

        },
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