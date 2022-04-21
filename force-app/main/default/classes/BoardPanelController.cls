public with sharing class BoardPanelController {
    
    @AuraEnabled
    public static String addResult(String result, String mode){
        try {
            //insert a gameResult record
            Word_Shuffle__c gameResult = new Word_Shuffle__c(
                Result__c   = result,
                Mode__c     = mode
            );
            insert gameResult;

            return 'Success';
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
