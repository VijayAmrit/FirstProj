sap.ui.define([
    "sap/ui/core/ComponentContainer"
], function(ComponentContainer){
    "use strict";

    new ComponentContainer({
        name: "sap.ui.demo.FirstProj",
        settings:{
            id: "walkthrough"
        },
        async: true
    }).placeAt("content");
});
