sap.ui.define([
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel'
], function(UIComponent, JSONModel, ResourceModel) {
    'use strict';
    return UIComponent.extend("sap.ui.demo.FirstProj.Component",{
        metadata : {
            rootView: {
                "viewName": "sap.ui.demo.FirstProj.view.App" ,
                "type":"XML",
                "async": true,
                "id": "app"
            }
        },
        init: function(){
            UIComponent.prototype.init.apply(this, arguments);
            var oData={
                recipient:{
                    name:'UI5',
                    description:'Description for UI5'
                }
            };
            var oModel= new JSONModel(oData);
            // debugger;
            this.setModel(oModel, 'mainModel');
            // set i18n Model on view
            var i18nModel = new ResourceModel({
                bundleName: 'sap.ui.demo.FirstProj.i18n.i18n',
                supportedLocales: [''],
                fallBackLocale:''
            });
            //setting i18n model
            this.setModel(i18nModel, 'i18n');
        }
    })
});