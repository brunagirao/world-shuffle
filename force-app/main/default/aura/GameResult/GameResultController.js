({
    doInit : function(component, event, helper) {
        //define the columns
        const columns = [
            {label: 'Game Number',  fieldName: 'Name',          type: 'text'},
            {label: 'Mode',         fieldName: 'Mode__c',       type: 'text'},
            {label: 'Played On',    fieldName: 'CreatedDate',   type: 'date'},
            {label: 'Result',       fieldName: 'Result__c',     type: 'text'},    
        ];
        //set the columns variable
        component.set("v.columns", columns);
    },

})
