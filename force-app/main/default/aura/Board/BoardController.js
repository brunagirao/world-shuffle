({
    doInit : function(component, event, helper) {
        console.log("Initialization completed");

        //get the words
        const words =  helper.getWords(6);
        console.log("Words: " + words);

        //get the winWord
        const winWord = helper.getWinWord(words);
        console.log("Wind word: " + winWord);

    }, 
})
