({
    myAction : function(component, event, helper) {
	component.set('v.columns', [
    {label:'Account Name', fieldName:'Name', type:'text'},
    {label:'Annual Revenue', fieldName:'AnnualRevenue', type:'number'},
    {label:'Industry', fieldName:'Industry', type:'text'}
	]);
        
        
	var action = component.get("c.accLister");
        
    action.setParams({
        });
	action.setCallback(this, function(data) {
        var state = data.getState();
            if (state === 'SUCCESS') {

    		component.set('v.accountList', data.getReturnValue());
            }
		});
$A.enqueueAction(action);
    }
})