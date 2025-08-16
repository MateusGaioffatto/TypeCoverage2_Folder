effectTable.addEventListener('mouseover', function() {learnMoreAboutText.style.display = "inline";}) // TRUE = DISPLAY: "INLINE"
effectTable.addEventListener('mouseout', function() {learnMoreAboutText.style.display = "none";}) // FALSE = DISPLAY: "NONE"

// DEFINIÇÃO DE CONSTANTES: 
// const [typeName]Effects = [weakEffecs, resistancesEffects, nullEffects, noDamageEffects, superEffectiveEffects, notVeryEffectiveEffects]

// POKEMON TYPES: FUNCTIONS

// selectTypesButtons.forEach(selectButton => {

//     selectButton.addEventListener('click', function() {

//     })

// })

// NORMAL TYPE: selectType NODELIST FUNCTION
selectTypesButtons[0].addEventListener('click', function() {
    const normalEffects = [[6], [], [13], [13], [], [12,16]];
    showTypesEffects(0, normalEffects);
})
// FIRE TYPE: selectType NODELIST FUNCTION
selectTypesButtons[1].addEventListener('click', function() {
    const fireEffects = [[2, 8, 12], [1, 4, 5, 11, 16, 17], [], [], [4, 5, 11, 16], [1, 2, 12, 14]];
    showTypesEffects(1, fireEffects);
})
// WATER TYPE: selectType NODELIST FUNCTION
selectTypesButtons[2].addEventListener('click', function() {
    const waterEffects = [[3, 4], [1, 2, 5, 16], [], [], [1, 8, 12], [2, 4, 14]];
    showTypesEffects(2, waterEffects);
})
// ELECTRIC TYPE: selectType NODELIST FUNCTION
selectTypesButtons[3].addEventListener('click', function() {
    const electricEffects = [[8], [3, 9, 16], [], [8], [2, 9], [3, 4, 14]];
    showTypesEffects(3, electricEffects);
})
// GRASS TYPE: selectType NODELIST FUNCTION
selectTypesButtons[4].addEventListener('click', function() {
    const grassEffects = [[1, 5, 7, 9, 11], [2, 3, 4, 8], [], [], [2, 8, 12], [1, 4, 7, 9, 11, 14, 16]];
    showTypesEffects(4, grassEffects);
})
// ICE TYPE: selectType NODELIST FUNCTION
selectTypesButtons[5].addEventListener('click', function() {
    const iceEffects = [[1, 6, 12, 16], [5], [], [], [4, 8, 9, 14], [1, 2, 5, 16]];
    showTypesEffects(5, iceEffects);
})
// FIGHTING TYPE: selectType NODELIST FUNCTION
selectTypesButtons[6].addEventListener('click', function() {
    const fightingEffects = [[9, 10, 17], [11, 12, 15], [], [13], [0, 5, 12, 15, 17], [7, 9, 10, 11, 17]];
    showTypesEffects(6, fightingEffects);
})
// POISON TYPE: selectType NODELIST FUNCTION
selectTypesButtons[7].addEventListener('click', function() {
    const poisonEffects = [[8, 10], [4, 6, 7, 11, 17], [], [16], [4, 17], [7, 8, 12, 13]];
    showTypesEffects(7, poisonEffects);
})
// GROUND TYPE: selectType NODELIST FUNCTION
selectTypesButtons[8].addEventListener('click', function() {
    const groundEffects = [[2, 4, 5], [7, 12], [], [9], [1, 3, 7, 12, 16], [4, 9]];
    showTypesEffects(8, groundEffects);
})
// FLYING TYPE: selectType NODELIST FUNCTION
selectTypesButtons[9].addEventListener('click', function() {
    const flyingEffects = [[3, 5, 12], [4, 6, 11], [], [], [4, 6, 11], [3, 8, 12, 16]];
    showTypesEffects(9, flyingEffects);
})
// PSYCHIC TYPE: selectType NODELIST FUNCTION
selectTypesButtons[10].addEventListener('click', function() {
    const psychicEffects = [[11, 13, 15], [6, 10], [], [15], [6, 7], [10, 16]];
    showTypesEffects(10, psychicEffects);
})
// BUG TYPE: selectType NODELIST FUNCTION
selectTypesButtons[11].addEventListener('click', function() {
    const bugEffects = [[1, 9, 12], [4, 6, 8], [], [], [4, 10, 15], [1, 6, 7, 9, 11, 13, 16, 17]];
    showTypesEffects(11, bugEffects);
})
// ROCK TYPE: selectType NODELIST FUNCTION
selectTypesButtons[12].addEventListener('click', function() {
    const rockEffects = [[2, 4, 6, 8, 16], [0, 1, 7, 9], [], [], [1, 5, 9, 11], [6, 7, 8, 12, 16]];
    showTypesEffects(12, rockEffects);
})
// GHOST TYPE: selectType NODELIST FUNCTION
selectTypesButtons[13].addEventListener('click', function() {
    const ghostEffects = [[13, 15], [6, 7, 11], [], [0], [10, 13], [15]];
    showTypesEffects(13, ghostEffects);
})
// DRAGON TYPE: selectType NODELIST FUNCTION
selectTypesButtons[14].addEventListener('click', function() {
    const dragonEffects = [[5, 14, 17], [1, 2, 3, 4], [], [17], [2, 3, 4, 5, 11, 14], [16]];
    showTypesEffects(14, dragonEffects);
})
// DARK TYPE: selectType NODELIST FUNCTION
selectTypesButtons[15].addEventListener('click', function() {
    const darkEffects = [[6, 11, 17], [13, 15], [], [], [10, 13], [6, 15, 17]];
    showTypesEffects(15, darkEffects);
})
// STEEL TYPE: selectType NODELIST FUNCTION
selectTypesButtons[16].addEventListener('click', function() {
    const steelEffects = [[1, 6, 8], [0, 4, 5, 7, 9, 10, 11, 12, 14, 16, 17], [], [], [5, 12, 14, 17], [1, 2, 3, 8, 9, 10, 11, 15, 16]];
    showTypesEffects(16, steelEffects);
})
// FAIRY TYPE: selectType NODELIST FUNCTION
selectTypesButtons[17].addEventListener('click', function() {
    const fairyEffects = [[7, 16], [6, 11, 15], [14], [], [6, 14, 15], [1, 7, 16]];
    showTypesEffects(17, fairyEffects);
})

function showTypesEffects(typeIndex,typeEffects) {
    typeSelectedCount[doubleClick] = selectTypesButtons[typeIndex];
    doubleClick++;

    if (typeSelectedCount[0] === typeSelectedCount[1] || doubleClick > 2) {hideAllEffectsButtons();}
    else {
        checkEffectsTitle();
        
        createWeakEffects(typeEffects[0]);
        createResistences(typeEffects[1]);
        createNullEffects(typeEffects[2]);
        createNoDamageEffects(typeEffects[3]);
        createSuperEffects(typeEffects[4]);
        createNotVeryEffective(typeEffects[5]);
    }
}