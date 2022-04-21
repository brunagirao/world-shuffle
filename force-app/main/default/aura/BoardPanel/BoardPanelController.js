({
    startGame : function(component, event, helper) {
        // access combobox
        let gameModeCombobox = component.find("gameMode");

        // access combobox value
        let selectValue = gameModeCombobox.get("v.value");

        const seletedMode = component.get("v.selectedMode");
        // update selectMode attribute
        component.set("v.selectedMode", selectValue);

        if (seletedMode) {
            const boardComp = component.find("boardComp");
            boardComp.startGame();
        }
        
    },

    reshuffleBoard : function(component, event, helper) {
        const boardComp = component.find("boardComp");
        boardComp.reshuffleBoard();
        component.set("v.reshuffleDisabled", true);
    },

    onResultHandler : function (component, event, helper) {
        const result = event.getParam("result");

        if(result === "win") {
            component.set("v.reshuffleDisabled", true);
            helper.showToast("YOU WIN", "Hooray!!", "success");
        } else {
            component.set("v.reshuffleDisabled", false);
            helper.showToast("YOU LOSE", "Reshuffle the board to keep playing", "error");
        }
        helper.addResultRecord(component, result);
    }


})
