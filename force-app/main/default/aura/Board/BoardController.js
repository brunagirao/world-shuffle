({
    doInit : function(component, event, helper) {
        console.log("Initialization completed");

        //get the words
        const words =  helper.getWords(6);
        component.set("v.words", words);
        console.log("Words: " + words);

        //get the winWord
        const winWord = helper.getWinWord(words);
        component.set("v.winWord", winWord);
        console.log("Wind word: " + winWord);

    }, 
})
