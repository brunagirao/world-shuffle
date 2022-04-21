({
    fetchResult : function(component) {
        //create apex method call action
        const action = component.get("c.getResults");

        //define callback
        action.setCallback(this, function (response) {
            const state = response.getState();
            if(state === "SUCCESS") {
                const resp = response.getReturnValue();
                component.set("v.data", resp);
            }
        });
        // call apex method
        $A.enqueueAction(action);
    }
})
