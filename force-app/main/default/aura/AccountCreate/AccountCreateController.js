({
    doCreateAccount : function(component, event, helper) {
        
	 /*var accNew= component.get('c.accAdder');
     accNew.setParams({
     	acc: component.get('v.acc')     
        });
    
        component.set('v.fields', [
    {label:'Account Name', fieldName:'Name', type:'text'},
    {label:'Annual Revenue', fieldName:'AnnualRevenue', type:'number'},
    {label:'Industry', fieldName:'Industry', type:'text'}
	]);
        
        */
        event.preventDefault();       // stop the form from submitting
        const fields = event.getParam('fields');
        cmp.find('myRecordForm').submit(fields);
        
        
    $A.enqueueAction(accNew);
    }
})