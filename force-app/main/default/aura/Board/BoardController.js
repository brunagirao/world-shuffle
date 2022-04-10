({
    doInit : function(component, event, helper) {
        console.log("Initialization completed");
        
        //get game mode
        const gameMode = component.get("v.mode");
        let column = 0;

        //get the number of columns based on gameMode
        if (gameMode && gameMode === "hard") {
            column = 6;
        } else if (gameMode === "medium") {
            column = 4;
        } else {
            column = 3;
        }

        //get block size
        let blockSize = 12/column;
        component.set("v.blockSize", blockSize);

        //get the words
        const words =  helper.getWords(column * column);
        component.set("v.words", words);

        //get the winWord
        const winWord = helper.getWinWord(words);
        component.set("v.winWord", winWord);

    }, 
})
