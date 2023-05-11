public class BatchApexTest implements Database.Batchable<sObject>{

   

public Database.QueryLocator start(Database.BatchableContext bc) {
		return Database.getQueryLocator('SELECT Name, CreatedDate FROM Opportunity');
	}

	public void execute(Database.BatchableContext bc, List<sObject> generics){
		List<Opportunity> opps = new List<Opportunity>();
		Opportunity opp;
		for(sObject generic : generics) {
			opp = (Opportunity) generic;
			if(opp.CreatedDate < DateTime.now().addMonths(-6)){			
				opps.add(opp);
			}
		
		}
		delete opps;
	}

	public void finish(Database.BatchableContext bc) {
	}
}