public class AuraAccHelp {
	@AuraEnabled
    public static List<Account> accLister()
    {
        return [SELECT Id, Name, Industry, AnnualRevenue FROM Account];
    }    
    
    public static void accAdder(String acc)
    {
        Account acct= new Account(Name=acc);
        insert acct; 
    }
}