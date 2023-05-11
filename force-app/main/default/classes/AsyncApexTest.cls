public class AsyncApexTest implements schedulable{

    public static void execute(Schedulablecontext scT)
    {
	        BatchApexTest batcher= new BatchApexTest();
        	Database.executeBatch(batcher);
        
    }
    
    
}