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
// STORE THE ROWS OF THE EFFECTS TABLE: NODE LIST/ARRAY VARIABLE
let effectsTableRows = document.querySelectorAll(".effectsTable div");
let effectsTableArrayRows = [weakEffectsRow, resistanceEffectsRow, nullEffectsRow, noDamageEffectsRow, superEffectsRow, notVeryEffectiveRow]

// STORE THE TWO TIMES EFFECTIVE BUTTONS OF EACH ROW: ARRAY VARIABLES
let twoTimesWeakEffectsRow = [];
let twoTimesResistanceEffectsRow = [];
let twoTimesSuperEffectsRow = [];
let twoTimesNotVeryEffectiveRow = [];
// STORE THE ROWS OF THE TWO TIMES EFFECTS OF THE EFFECTS TABLE: ARRAY VARIABLE
let twoTimesEffectsArrayRows = [twoTimesWeakEffectsRow, twoTimesResistanceEffectsRow, twoTimesSuperEffectsRow, twoTimesNotVeryEffectiveRow] 



// STORE LEARN MORE ABOUT EACH TYPE PARAGRAPH TEXT: CONSTANT VARIABLE 
const learnMoreAboutText = document.getElementById("learnMoreAboutEachTypeParagraphID");

// STORE THE EFFECT TABLE: CONSTANT VARIABLE
const effectTable = document.getElementById("effectsTableID");

// STORE EFFECT TABLE HIDDEN SPAN: CONSTANT VARIABLE
const effectsTableHiddenSpan = document.getElementById("effectsHiddenSpanID");

// BREAKROW ELEMENT FOR QUICK USE: CONSTANT VARIABLE
const breakRow = document.createElement("br");