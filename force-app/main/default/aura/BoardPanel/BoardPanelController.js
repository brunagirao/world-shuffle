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

    }
})
