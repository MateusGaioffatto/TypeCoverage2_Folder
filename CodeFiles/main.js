// STORE THE BUTTONS OF THE ".selectTypes" DIV CLASS: CONSTANT VARIABLE
const selectTypesButtons = document.querySelectorAll(".selectTypes button");
// STORE THE INDEX OF THE TYPE BUTTONS (REFERENCED IN THE "selectTypesButtons" NODELIST): ARRAY VARIABLE
let effectsIndex = [];  

// STORE HOW MUCH TIMES THE USER CLICKED ON THE BUTTONS
// (USED TO: RESET THE "effectsTable" CONTENT WHEN THE USER CLICKED TWO TIMES ON THE SAME BUTTON OR THREE TIMES ON DIFFERENT BUTTONS)
let doubleClick = 0;

// STORE THE SELECTED TYPE BUTTONS: ARRAY VARIABLE
let typeSelectedCount = [];

// STORE THE ROWS OF THE EFFECTS TABLE: ARRAY VARIABLE
let effectsTableRows = document.querySelectorAll(".effectsTable div");

// STORE THE BUTTONS OF THE RESPECTIVE EFFECTS ROW: ARRAY VARIABLES
let weakEffectsRow = [];
let resistanceEffectsRow = [];
let nullEffectsRow = [];
let noDamageEffectsRow = [];
let superEffectsRow = [];
let notVeryEffectiveRow = [];

let effectsTableArrayRows = [weakEffectsRow, resistanceEffectsRow, nullEffectsRow, noDamageEffectsRow, superEffectsRow, notVeryEffectiveRow]

const effectsTableHiddenSpan = document.getElementById("effectsHiddenSpanID");

// BREAKROW ELEMENT FOR QUICK USE: CONSTANT VARIABLE
const breakRow = document.createElement("br");

// FUNCTIONS AND INTERACTIONS TO THE EFFECTS TABLE BUTTONS: FUNCTION
function checkEffectTableButtons() {
    // STORE ALL THE BUTTONS OF THE EFFECTS TABLE: ARRAY CONSTANT VARIABLE
    const effectTableButtons = document.querySelectorAll(".effectsTable button");

    // APPEND AND REMOVE THE HIDDEN BOX TO EACH EFFECTS TABLE BUTTONS: forEach FUNCTION
    effectTableButtons.forEach(effect => {
        // CREATE EFFECTS TABLE BUTTONS HIDDEN BOX: SPAN
        const effectsButtonsHiddenSpan = document.createElement("span");
        effectsButtonsHiddenSpan.className = document.getElementById("effectsHiddenSpanID").className;

        // APPEND THE HIDDEN BOX TO EACH EFFECTS TABLE BUTTONS:
        effect.appendChild(effectsButtonsHiddenSpan);

        effect.addEventListener('mouseover', function () {
            effectsButtonsHiddenSpan.textContent = checkHiddenSpanContent(effectsButtonsHiddenSpan); // CHANGE THE TEXT CONTENT OF THE HOVERED BUTTON SPAN CHIELD
            effectsButtonsHiddenSpan.style.transform = "translateY(22.5px)"; // CHANGE THE POSITION(Y) OF THE HOVERED BUTTON SPAN CHIELD
            effect.style.zIndex = 1; // CHANGE THE Z-INDEX OF THE HOVERED BUTTON AND THE SPAN CHIELD
        });
        
        effect.addEventListener('mouseout', function () {
            effect.style.zIndex = "auto";  // RESET THE Z-INDEX OF THE HOVERED BUTTON AND THE SPAN CHIELD
            effectsButtonsHiddenSpan.style.transform = "translateY(0)"; // RESET THE POSITION(Y) OF THE HOVERED BUTTON SPAN CHIELD
        });
    })

    // CHANGE THE HIDDEN BOX CONTENT ON MOUSE HOVER: FUNCTIONS
    function checkHiddenSpanContent(hiddenSpan) {
        effectsTableRows[0].addEventListener("mouseover", function() {superEffectsSpanContent(hiddenSpan);}) // WEAKNESSES
        effectsTableRows[1].addEventListener("mouseover", function() {notVeryEffectiveSpanContent(hiddenSpan);}) // RESISTANCESES
        effectsTableRows[2].addEventListener("mouseover", function() {nullEffectsSpanContent(hiddenSpan);}) // NULL EFFECTS
        effectsTableRows[3].addEventListener("mouseover", function() {nullEffectsSpanContent(hiddenSpan);}) // NO DAMAGE EFFECTS
        effectsTableRows[4].addEventListener("mouseover", function() {superEffectsSpanContent(hiddenSpan);}) // VERY EFFECTIVE EFFECTS
        effectsTableRows[5].addEventListener("mouseover", function() {notVeryEffectiveSpanContent(hiddenSpan);}) // NOT VERY EFFECTIVE EFFECTS
    }


    // HIDDEN BOX/SPAN SUPER EFFECTS STYLE AND CONTENT: FUNCTION
    function superEffectsSpanContent(effectsButtonsHiddenSpan) {
        effectsButtonsHiddenSpan.textContent = "2";
        effectsButtonsHiddenSpan.style.backgroundColor = "rgb(78, 154, 6)";
    }
    // HIDDEN BOX/SPAN NOT VERY EFFECTIVE STYLE AND CONTENT: FUNCTION
    function notVeryEffectiveSpanContent(effectsButtonsHiddenSpan) {
        effectsButtonsHiddenSpan.textContent = "1/2";
        effectsButtonsHiddenSpan.style.backgroundColor = "rgb(164, 0, 0)";
    }
    // HIDDEN BOX/SPAN NULL EFFECTS STYLE AND CONTENT: FUNCTION
    function nullEffectsSpanContent(effectsButtonsHiddenSpan) {
        effectsButtonsHiddenSpan.textContent = "0";
        effectsButtonsHiddenSpan.style.backgroundColor = "rgb(64, 64, 64)";
    }

    // CHANGE THE padding (top = "0" / horizontal = "0.75rem" / bottom = "0.75rem") OF EACH EFFECTS TABLE ROW: FUNCTION
    if (doubleClick === 1) {effectsTableRows.forEach(effectsRow => {effectsRow.style.padding = "0 0.75rem 0.75rem";})}

    nameIt();

}

// CHECK EFFECTS ROW TITLES TEXT CONTENT: FUNCTION
let effectTableRowsTitles = ["titleZero","titleOne","titleTwo","titleThree","titleFour", "titleFive"];
for (let i = 0; i < effectTableRowsTitles.length; i++) {effectTableRowsTitles[i] = document.createElement("h1");}

function checkEffectsTitle() {
    if (doubleClick === 1) { // APPEND EFFECTS TITLES: FOR LOOP/IF STATEMENT    
        for(let i = 0; i < effectsTableRows.length; i++) {
            effectsTableRows[i].appendChild(effectTableRowsTitles[i]);
        }
    }

    if (doubleClick > 1) { // WHEN DOUBLE TYPES WERE SELECTED
        effectTableRowsTitles.forEach(effectTitles => {
            effectTitles.textContent = typeSelectedCount[0].textContent + " + " + typeSelectedCount[1].textContent;
        })
        checkEffectTableRowsTitlesTextContent();
    }
    else { // WHEN MONO TYPE WAS SELECTED
        effectTableRowsTitles.forEach(effectTitles => {
            effectTitles.textContent = typeSelectedCount[0].textContent;
        })
        checkEffectTableRowsTitlesTextContent();
    }

    function checkEffectTableRowsTitlesTextContent() {
        effectTableRowsTitles[0].textContent += " WEAKNESSES: ";
        effectTableRowsTitles[1].textContent += " RESISTENCES: ";
        effectTableRowsTitles[2].textContent += " NULL EFFECTS: ";
        effectTableRowsTitles[3].textContent += " NO DAMAGE EFFECTS: ";
        effectTableRowsTitles[4].textContent += " SUPER EFFECTS: ";
        effectTableRowsTitles[5].textContent += " NOT VERY EFFECTIVE: ";    
    }
}

function nameIt() {

    for (let i = 0; i < effectsTableArrayRows.length; i++) {
        if (effectsTableArrayRows[i].length === 0) {
            switch (i) {
                case 0: hideWeakEffects(); break;
                case 1: hideResistanceEffects(); break;
                case 2: hideNullEffects(); break;
                case 3: hideNoDamageEffects(); break;
                case 4: hideSuperEffects(); break;
                case 5: hideNotVeryEffective(); break;
                default: break;
            }
        }
    }

}



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
    doubleClick = 0;
}