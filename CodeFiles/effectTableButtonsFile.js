// CHECK DUPLICATED BUTTONS: FUNCTION
function checkDuplicatedEffects(effectElements, effectButton) {
    return !effectElements.some(effect => effect.textContent === effectButton.textContent);
}

// CHECK DOUBLE TYPE (WEAKNESSES, RESISTANCES): FUNCTION
function checkDoubleTypeEffects() {
    weakEffectsRow.forEach(weakEffect => {
        resistanceEffectsRow.forEach(resistanceEffect => {
            if (weakEffect.textContent === resistanceEffect.textContent) {
                document.getElementById("weakEffectsID").removeChild(weakEffect);
                document.getElementById("resistanceEffectsID").removeChild(resistanceEffect);
            }
        })
    })
}


// CREATE BUTTONS: FUNCTIONS


// CREATE WEAKNESSES: FUNCTION
function createWeakEffects(weakIndex) {

    for (let i = 0; i < weakIndex.length; i++) {
        let weakEffectsButtons = document.createElement("button");
        weakEffectsButtons.textContent = selectTypesButtons[weakIndex[i]].textContent;
        weakEffectsButtons.className = selectTypesButtons[weakIndex[i]].className;

        if (checkDuplicatedEffects(weakEffectsRow, weakEffectsButtons)) {
            weakEffectsRow.push(weakEffectsButtons);
            document.getElementById("weakEffectsID").appendChild(weakEffectsButtons);            
        }           
    }
}
// CREATE RESISTANCES: FUNCTION
function createResistences(resistanceIndex) {

    for (let i = 0; i < resistanceIndex.length; i++) {        
        let resistanceEffectsButtons = document.createElement("button");
        resistanceEffectsButtons.textContent = selectTypesButtons[resistanceIndex[i]].textContent;
        resistanceEffectsButtons.className = selectTypesButtons[resistanceIndex[i]].className;

        if (checkDuplicatedEffects(resistanceEffectsRow, resistanceEffectsButtons)) {
            resistanceEffectsRow.push(resistanceEffectsButtons);
            document.getElementById("resistanceEffectsID").appendChild(resistanceEffectsButtons);
        }
        else {
            console.log(resistanceEffectsButtons); // <= DADOS DOS TIPOS DUPLICADOS, PODE SERVIR!
        }
    }
    if (doubleClick === 2) {
        checkDoubleTypeEffects();
    }
}
// CREATE NULL EFFECTS: FUNCTION
function createNullEffects(nullIndex) {

    for (let i = 0; i < nullIndex.length; i++) {
        let nullEffectsButtons = document.createElement("button");
        nullEffectsButtons.textContent = selectTypesButtons[nullIndex[i]].textContent;
        nullEffectsButtons.className = selectTypesButtons[nullIndex[i]].className;

        if (checkDuplicatedEffects(nullEffectsRow, nullEffectsButtons)) {
            nullEffectsRow.push(nullEffectsButtons);
            document.getElementById("nullEffectsID").appendChild(nullEffectsButtons);
        }
    }
}
// CREATE NO DAMAGE EFFECTS: FUNCTION
function createNoDamageEffects(noDamageIndex) {

    for (let i = 0; i < noDamageIndex.length; i++) {
        let noDamageButtons = document.createElement("button");
        noDamageButtons.textContent = selectTypesButtons[noDamageIndex[i]].textContent;
        noDamageButtons.className = selectTypesButtons[noDamageIndex[i]].className;

        if (checkDuplicatedEffects(noDamageEffectsRow, noDamageButtons)) {
            noDamageEffectsRow.push(noDamageButtons);
            document.getElementById("noDamageEffectsID").appendChild(noDamageButtons);
        }
    }
}
// CREATE SUPER EFFECTS: FUNCTION
function createSuperEffects(superEffectsIndex) {

    for (let i = 0; i < superEffectsIndex.length; i++) {
        let superEffectsButtons = document.createElement("button");
        superEffectsButtons.textContent = selectTypesButtons[superEffectsIndex[i]].textContent;
        superEffectsButtons.className = selectTypesButtons[superEffectsIndex[i]].className;

        if (checkDuplicatedEffects(superEffectsRow, superEffectsButtons)) {        
            superEffectsRow.push(superEffectsButtons);
            document.getElementById("superEffectsID").appendChild(superEffectsButtons);
        }
    }
}
// CREATE NOT VERY EFFECTIVE: FUNCTION
function createNotVeryEffective(notVeryEffectiveIndex) {

    for (let i = 0; i < notVeryEffectiveIndex.length; i++) {
        let notVeryEffectiveButtons = document.createElement("button");
        notVeryEffectiveButtons.textContent = selectTypesButtons[notVeryEffectiveIndex[i]].textContent;
        notVeryEffectiveButtons.className = selectTypesButtons[notVeryEffectiveIndex[i]].className;

        if (checkDuplicatedEffects(notVeryEffectiveRow, notVeryEffectiveButtons)) {        
            notVeryEffectiveRow.push(notVeryEffectiveButtons);
            document.getElementById("notVeryEffectiveID").appendChild(notVeryEffectiveButtons);
        }
    }
    checkEffectTableButtons();
}


// HIDE FUNCTIONS EFFECTS: FUNCTIONS


// HIDE WEAK EFFECTS BUTTONS: FUNCTION
function hideWeakEffects() {
    // REMOVE WEAK BUTTONS:
    document.getElementById("weakEffectsID").innerHTML = '';   
    // EMPTY WEAK EFFECTS ARRAY:
    weakEffectsRow.length = 0;
}
// HIDE RESISTANCE EFFECTS BUTTONS: FUNCTION
function hideResistanceEffects() {
    // HIDE RESISTANCE BUTTONS:
    document.getElementById("resistanceEffectsID").innerHTML = '';
    // EMPTY RESISTENCE EFFECTS ARRAY:
    resistanceEffectsRow.length = 0;
}
// HIDE NULL EFFECTS BUTTONS: FUNCTION
function hideNullEffects() {
    // HIDE NULL BUTTONS:
    document.getElementById("nullEffectsID").innerHTML = '';
    // EMPTY NULL EFFECTS ARRAY:
    nullEffectsRow.length = 0;
}
// HIDE NO DAMAGE EFFECTS BUTTONS: FUNCTION
function hideNoDamageEffects() {
    // HIDE NO DAMAGE BUTTONS:
    document.getElementById("noDamageEffectsID").innerHTML = '';
    // EMPTY NO DAMAGE EFFECTS ARRAY:
    noDamageEffectsRow.length = 0;
}
// HIDE SUPER EFFECTS BUTTONS: FUNCTION
function hideSuperEffects() {
    // HIDE SUPER EFFECTS BUTTONS:
    document.getElementById("superEffectsID").innerHTML = '';
    // EMPTY NULL EFFECTS ARRAY:
    superEffectsRow.length = 0;
}
// HIDE NOT VERY EFFECTIVE EFFECTS BUTTONS: FUNCTION
function hideNotVeryEffective() {
    // HIDE NOT VERY EFFECTIVE BUTTONS:
    document.getElementById("notVeryEffectiveID").innerHTML = '';
    // EMPTY NOT VERY EFFECTIVE ARRAY:
    notVeryEffectiveRow.length = 0;
}

// HIDE ALL EFFECTS BUTTONS: FUNCTION
function hideAllEffectsButtons() {

    // EMPTY SELECTED TYPES ARRAY:
    typeSelectedCount.length = 0;
  
    hideWeakEffects();
    hideResistanceEffects();
    hideNullEffects();
    hideNoDamageEffects();
    hideSuperEffects();
    hideNotVeryEffective();

    effectsTableRows.forEach(effectsRow => {effectsRow.style.padding = "0 0";})
    effectTable.style.borderWidth = "0px";

    doubleClick = 0;
}