public with sharing class GameResultController {
    
    @AuraEnabled
    public static List<Word_Shuffle__c> getResults(){
        try {
            //get current userId
            String userId = UserInfo.getUserId();
            
            //get the results of user
            List<Word_Shuffle__c> results = [
                SELECT Id, Name, Result__c, Mode__c, CreatedDate 
                  FROM Word_Shuffle__c
                 WHERE CreatedById =: userId 
              ORDER BY CreatedDate DESC
            ];

            return results;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
