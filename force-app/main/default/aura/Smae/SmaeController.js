({
    fetchAcc : function(component, event, helper) {
       component.set('v.mycolumns', [
            {label: 'Account Name', fieldName: 'Name', type: 'text'},
                {label: 'Industry', fieldName: 'Industry', type: 'text'},
                {label: 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'number'},
                
            ]);
        var action = component.get("c.fetchAccounts");
        action.setParams({
        });
        action.setCallback(this, function(data){
            var state = data.getState();
            if (state === "SUCCESS") {
                component.set("v.acctList", data.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    }
})