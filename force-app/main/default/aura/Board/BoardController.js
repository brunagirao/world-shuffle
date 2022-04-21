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

        //reset board
        helper.resetBoard(component);
    }, 

    blockClickHandler : function(component, event, helper) {
        //count the clicks in the tiles
        let clickCount = component.get("v.clickCount") + 1;
        //get event value
        let value = event.getParam("value");

        if (value === component.get("v.winWord")) {
            component.set("v.result", "YOU WIN");
            helper.disableBoard(component);
            helper.fireResultEvent("win");
        } else if (clickCount === 3) {
            component.set("v.result", "YOU LOSE");
            helper.disableBoard(component);
            helper.fireResultEvent("lose");  
        }
        //update clickCount
        component.set("v.clickCount", clickCount);
    },

    reshuffleBoard : function (component, event, helper) {
        const words = component.get("v.words");
        const randomizeWords = helper.randomizeArray(words);
        component.set("v.words", randomizeWords);
        helper.resetBoard(component);
    }
})
