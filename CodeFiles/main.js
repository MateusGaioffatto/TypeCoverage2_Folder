// STORE THE BUTTONS OF THE ".selectTypes" DIV CLASS: CONSTANT VARIABLE
const selectTypesButtons = document.querySelectorAll(".selectTypes button");
// STORE THE INDEX OF THE TYPE BUTTONS (REFERENCED IN THE "selectTypesButtons" NODELIST): ARRAY VARIABLE
let effectsIndex = [];  

// STORE HOW MUCH TIMES THE USER CLICKED ON THE BUTTONS
// (USED TO: RESET THE "effectsTable" CONTENT WHEN THE USER CLICKED TWO TIMES ON THE SAME BUTTON OR THREE TIMES ON DIFFERENT BUTTONS)
let doubleClick = 0;

// STORE THE SELECTED TYPE BUTTONS: ARRAY VARIABLE
let typeSelectedCount = [];

// STORE THE BUTTONS OF THE RESPECTIVE EFFECTS ROW: ARRAY VARIABLES
let weakEffectsRow = [];
let resistanceEffectsRow = [];
let nullEffectsRow = [];
let noDamageEffectsRow = [];
let superEffectsRow = [];
let notVeryEffectiveRow = [];

// STORE LEARN MORE ABOUT EACH TYPE PARAGRAPH TEXT: CONSTANT VARIABLE 
const learnMoreAboutText = document.getElementById("learnMoreAboutEachTypeParagraphID");

// STORE THE EFFECT TABLE: CONSTANT VARIABLE
const effectTable = document.getElementById("effectsTableID");

// STORE THE ROWS OF THE EFFECTS TABLE: NODE LIST/ARRAY VARIABLE
let effectsTableRows = document.querySelectorAll(".effectsTable div");
let effectsTableArrayRows = [weakEffectsRow, resistanceEffectsRow, nullEffectsRow, noDamageEffectsRow, superEffectsRow, notVeryEffectiveRow]

// STORE EFFECT TABLE HIDDEN SPAN: CONSTANT VARIABLE
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
    // HIDDEN BOX/SPAN TWO TIMES SUPER EFFECTIVE STYLE AND CONTENT: FUNCTION
    function twoTimesSuperEffectiveSpanContent(effectsButtonsHiddenSpan) {
        effectsButtonsHiddenSpan.textContent = "1/4";
        effectsButtonsHiddenSpan.style.backgroundColor = "rgba(115, 210, 22, 1)";
    }
    // HIDDEN BOX/SPAN NOT VERY EFFECTIVE STYLE AND CONTENT: FUNCTION
    function notVeryEffectiveSpanContent(effectsButtonsHiddenSpan) {
        effectsButtonsHiddenSpan.textContent = "1/2";
        effectsButtonsHiddenSpan.style.backgroundColor = "rgb(164, 0, 0)";
    }
    // HIDDEN BOX/SPAN TWO TIMES NOT VERY EFFECTIVE STYLE AND CONTENT: FUNCTION
    function twoTimesNotVeryEffectiveSpanContent(effectsButtonsHiddenSpan) {
        effectsButtonsHiddenSpan.textContent = "1/4";
        effectsButtonsHiddenSpan.style.backgroundColor = "rgba(124, 0, 0, 1)";
    }
    // HIDDEN BOX/SPAN NULL EFFECTS STYLE AND CONTENT: FUNCTION
    function nullEffectsSpanContent(effectsButtonsHiddenSpan) {
        effectsButtonsHiddenSpan.textContent = "0";
        effectsButtonsHiddenSpan.style.backgroundColor = "rgb(64, 64, 64)";
    }

    // CHANGE THE padding (top = "0" / horizontal = "0.75rem" / bottom = "0.75rem") OF EACH EFFECTS TABLE ROW: FOR EACH FUNCTION/ IF STATEMENT
    if (doubleClick === 1) {effectsTableRows.forEach(effectsRow => {effectsRow.style.padding = "0 0.75rem 0.75rem";})}

    checkEffectTableRowsTitlesDisplayValue();
    addPokemonDBlinkToEffectTableButtons(effectTableButtons);
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

// CHANGE EFFECT ROWS TILES DISPLAY VALUE: FUNCTION
function checkEffectTableRowsTitlesDisplayValue() {
    effectsTableRows.forEach(effectRow => {
        const effectRowButtons = effectRow.querySelectorAll('button');
        effectRow.style.display = effectRowButtons.length === 0 ? "none" : "block";
    })
}

// ADD POKEMON DATABASE LINK TO THE EFFECT TABLE BUTTONS: FUNCTION
function addPokemonDBlinkToEffectTableButtons(effectTableButtons) {
    effectTableButtons.forEach(effectButton => {
        effectButton.addEventListener('dblclick', function() {
            let effectButtonTextLink;
            effectButtonTextLink = effectButton.textContent.replace(/\d+/g, '');
            effectButtonTextLink = effectButtonTextLink.replace(/\s+/g, '');

            window.open(`https://pokemondb.net/type/${effectButtonTextLink.toLowerCase()}`);
        })
    })
}