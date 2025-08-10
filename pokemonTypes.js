// POKEMON TYPES: FUNCTIONS

// NORMAL TYPE:
selectTypesButtons[0].addEventListener("click", function() {

    typeSelectedCount[doubleClick] = selectTypesButtons[0];
    doubleClick++;

    if (typeSelectedCount[0] === typeSelectedCount[1] || doubleClick > 2) {
        hideAllEffectsButtons();
    }
    else {
        checkEffectsTitle();
        
        createWeakEffects([6]);
        createResistences([]);
        createNullEffects([13]);
        createNoDamageEffects([13]);
        createSuperEffects([]);
        createNotVeryEffective([12, 16]);
    }
})

// FIRE TYPE:
selectTypesButtons[1].addEventListener("click", function() {

    typeSelectedCount[doubleClick] = selectTypesButtons[1];
    doubleClick++;

    if (typeSelectedCount[0] === typeSelectedCount[1] || doubleClick > 2) {
        hideAllEffectsButtons();
    }
    else {
        checkEffectsTitle();
        
        createWeakEffects([2, 8, 12]);
        createResistences([1, 4, 5, 11, 16, 17]);
        createNullEffects([]);
        createSuperEffects([4, 5, 11, 16]);
        createNotVeryEffective([1, 2, 12, 14]);

    }
})

// WATER TYPE:
selectTypesButtons[2].addEventListener("click", function() {

    typeSelectedCount[doubleClick] = selectTypesButtons[2];
    doubleClick++;

    if (typeSelectedCount[0] === typeSelectedCount[1] || doubleClick > 2) {
        hideAllEffectsButtons();
    }
    else {
        checkEffectsTitle();

        createWeakEffects([3, 4]);
        createResistences([1, 2, 5, 16]);
        createNullEffects([]);
        createSuperEffects([1, 8, 12]);
        createNotVeryEffective([2, 4, 14]);
    }
})

// ELECTRIC TYPE:
selectTypesButtons[3].addEventListener("click", function() {


    typeSelectedCount[doubleClick] = selectTypesButtons[3];
    doubleClick++;

    if (typeSelectedCount[0] === typeSelectedCount[1] || doubleClick > 2) {
        hideAllEffectsButtons();
    }
    else {
        checkEffectsTitle();

        createWeakEffects([8]);
        createResistences([3, 9, 16]);
        createNullEffects([]);
        createNoDamageEffects([8])
        createSuperEffects([2, 9]);
        createNotVeryEffective([3, 4, 14]);
    }
})

// GRASS TYPE:
selectTypesButtons[4].addEventListener("click", function() {

    typeSelectedCount[doubleClick] = selectTypesButtons[4];
    doubleClick++;
    
    if (typeSelectedCount[0] === typeSelectedCount[1] || doubleClick > 2) {
        hideAllEffectsButtons();
    }
    else {
        checkEffectsTitle();

        createWeakEffects([1, 5, 7, 9, 11]);
        createResistences([2, 3, 4, 8]);
        createNullEffects([]);
        createSuperEffects([2, 8, 12]);
        createNotVeryEffective([1, 4, 7, 9, 11, 14, 16]);
    }
})

// ICE TYPE:
selectTypesButtons[5].addEventListener("click", function() {

    typeSelectedCount[doubleClick] = selectTypesButtons[5];
    doubleClick++;
    if (typeSelectedCount[0] === typeSelectedCount[1] || doubleClick > 2) {
        hideAllEffectsButtons();
    }
    else {
        checkEffectsTitle();

        createWeakEffects([1, 6, 12, 16]);
        createResistences([5]);
        createNullEffects([]);
        createSuperEffects([4, 8, 9, 14]);
        createNotVeryEffective([1, 2, 5, 16]);
    }
})

// FIGHTING TYPE:
selectTypesButtons[6].addEventListener("click", function() {


    typeSelectedCount[doubleClick] = selectTypesButtons[6];
    doubleClick++;

    if (typeSelectedCount[0] === typeSelectedCount[1] || doubleClick > 2) {
        hideAllEffectsButtons();
    }
    else {
        checkEffectsTitle();

        createWeakEffects([9, 10, 17]);
        createResistences([11, 12, 15]);
        createNullEffects([]);
        createNoDamageEffects([13]);
        createSuperEffects([0, 5, 12, 15, 17]);
        createNotVeryEffective([7, 9, 10, 11, 17]);
    }
})

// POISON TYPE:
selectTypesButtons[7].addEventListener("click", function() {


    typeSelectedCount[doubleClick] = selectTypesButtons[7];
    doubleClick++;

    if (typeSelectedCount[0] === typeSelectedCount[1] || doubleClick > 2) {
        hideAllEffectsButtons();
    }
    else {
        checkEffectsTitle();

        createWeakEffects([8, 10]);
        createResistences([4, 6, 7, 11, 17]);
        createNullEffects([]);
        createNoDamageEffects([16]);
        createSuperEffects([4, 17]);
        createNotVeryEffective([7, 8, 12, 13]);
    }
})

// GROUND TYPE:
selectTypesButtons[8].addEventListener("click", function() {


    typeSelectedCount[doubleClick] = selectTypesButtons[8];
    doubleClick++;

    if (typeSelectedCount[0] === typeSelectedCount[1] || doubleClick > 2) {
        hideAllEffectsButtons();
    }
    else {
        checkEffectsTitle();

        createWeakEffects([2, 4, 5]);
        createResistences([7, 12]);
        createNullEffects([]);
        createNoDamageEffects([9]);
        createSuperEffects([1, 3, 7, 12, 16]);
        createNotVeryEffective([4, 9]);
    }
})

// FLYING TYPE:
selectTypesButtons[9].addEventListener("click", function() {

    typeSelectedCount[doubleClick] = selectTypesButtons[9];
    doubleClick++;

    if (typeSelectedCount[0] === typeSelectedCount[1] || doubleClick > 2) {
        hideAllEffectsButtons();
    }
    else {
        checkEffectsTitle();

        createWeakEffects([3, 5, 12]);
        createResistences([4, 6, 11]);
        createNullEffects([]);
        createSuperEffects([4, 6, 11]);
        createNotVeryEffective([3, 8, 12, 16]);
    }
})

// PSYCHIC TYPE:
selectTypesButtons[10].addEventListener("click", function() {


    typeSelectedCount[doubleClick] = selectTypesButtons[10];
    doubleClick++;

    if (typeSelectedCount[0] === typeSelectedCount[1] || doubleClick > 2) {
        hideAllEffectsButtons();
    }
    else {
        checkEffectsTitle();

        createWeakEffects([11, 13, 15]);
        createResistences([6, 10]);
        createNullEffects([]);
        createNoDamageEffects([15]);
        createSuperEffects([6, 7]);
        createNotVeryEffective([10, 16]);
    }
})

// BUG TYPE:
selectTypesButtons[11].addEventListener("click", function() {


    typeSelectedCount[doubleClick] = selectTypesButtons[11];
    doubleClick++;

    if (typeSelectedCount[0] === typeSelectedCount[1] || doubleClick > 2) {
        hideAllEffectsButtons();
    }
    else {
        checkEffectsTitle();

        createWeakEffects([1, 9, 12]);
        createResistences([4, 6, 8]);
        createNullEffects([]);
        createSuperEffects([4, 10, 15]);
        createNotVeryEffective([1, 6, 7, 9, 11, 13, 16, 17]);
    }
})

// ROCK TYPE:
selectTypesButtons[12].addEventListener("click", function() {


    typeSelectedCount[doubleClick] = selectTypesButtons[12];
    doubleClick++;

    if (typeSelectedCount[0] === typeSelectedCount[1] || doubleClick > 2) {
        hideAllEffectsButtons();
    }
    else {
        checkEffectsTitle();

        createWeakEffects([2, 4, 6, 8, 16]);
        createResistences([0, 1, 7, 9]);
        createNullEffects([]);
        createSuperEffects([1, 5, 9, 11]);
        createNotVeryEffective([6, 7, 8, 12, 16]);
    }
})

// GHOST TYPE:
selectTypesButtons[13].addEventListener("click", function() {


    typeSelectedCount[doubleClick] = selectTypesButtons[13];
    doubleClick++;

    if (typeSelectedCount[0] === typeSelectedCount[1] || doubleClick > 2) {
        hideAllEffectsButtons();
    }
    else {
        checkEffectsTitle();

        createWeakEffects([13, 15]);
        createResistences([6, 7, 11]);
        createNullEffects([]);
        createNoDamageEffects([0]);
        createSuperEffects([10, 13]);
        createNotVeryEffective([15]);
    }
})

// DRAGON TYPE:
selectTypesButtons[14].addEventListener("click", function() {


    typeSelectedCount[doubleClick] = selectTypesButtons[14];
    doubleClick++;

    if (typeSelectedCount[0] === typeSelectedCount[1] || doubleClick > 2) {
        hideAllEffectsButtons();
    }
    else {
        checkEffectsTitle();

        createWeakEffects([5, 14, 17]);
        createResistences([1, 2, 3, 4]);
        createNullEffects([]);
        createNoDamageEffects([17]);
        createSuperEffects([2, 3, 4, 5, 11, 14]);
        createNotVeryEffective([16]);
    }
})

// DARK TYPE:
selectTypesButtons[15].addEventListener("click", function() {


    typeSelectedCount[doubleClick] = selectTypesButtons[15];
    doubleClick++;

    if (typeSelectedCount[0] === typeSelectedCount[1] || doubleClick > 2) {
        hideAllEffectsButtons();
    }
    else {
        checkEffectsTitle();

        createWeakEffects([6, 11, 17]);
        createResistences([13, 15]);
        createNullEffects([]);
        createSuperEffects([10, 13]);
        createNotVeryEffective([6, 15, 17]);
    }
})

// STEEL TYPE:
selectTypesButtons[16].addEventListener("click", function() {


    typeSelectedCount[doubleClick] = selectTypesButtons[16];
    doubleClick++;

    if (typeSelectedCount[0] === typeSelectedCount[1] || doubleClick > 2) {
        hideAllEffectsButtons();
    }
    else {
        checkEffectsTitle();

        createWeakEffects([1, 6, 8]);
        createResistences([0, 4, 5, 7, 9, 10, 11, 12, 14, 16, 17]);
        createNullEffects([]);
        createSuperEffects([5, 12, 14, 17]);
        createNotVeryEffective([1, 2, 3, 8, 9, 10, 11, 15, 16]);
    }
})

// FAIRY TYPE:
selectTypesButtons[17].addEventListener("click", function() {


    typeSelectedCount[doubleClick] = selectTypesButtons[17];
    doubleClick++;

    if (typeSelectedCount[0] === typeSelectedCount[1] || doubleClick > 2) {
        hideAllEffectsButtons();
    }
    else {
        checkEffectsTitle();

        createWeakEffects([7, 16]);
        createResistences([6, 11, 15]);
        createNullEffects([14]);
        createSuperEffects([6, 14, 15]);
        createNotVeryEffective([1, 7, 16]);
    }
})