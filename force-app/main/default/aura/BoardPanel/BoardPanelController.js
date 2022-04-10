({
    startGame : function(component, event, helper) {
        // access combobox
        let gameModeCombobox = component.find("gameMode");

        // access combobox value
        let selectValue = gameModeCombobox.get("v.value");

        // update selectMode attribute
        component.set("v.selectedMode", selectValue);
    },

    }
})
