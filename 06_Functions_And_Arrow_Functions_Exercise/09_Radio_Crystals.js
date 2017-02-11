function radioCrystals(input) {
    let targetThickness = Number(input[0]);

    let cutCount = 0;
    let lapCount = 0;
    let grindCount = 0;
    let etchCount = 0;
    let xrayCount = 0;

    for (let i = 1; i < input.length; i++){
        roughChunk = Number(input[i]);

        resultChunk = roughChunk;
        getDesiredThickness(resultChunk);
    }

    function getDesiredThickness(chunk) {
        if (chunk != targetThickness){
            refineCrystal(chunk);
        }
        else {
            console.log('Processing chunk ' + roughChunk + ' microns');
            if (cutCount > 0){
                console.log('Cut x' + cutCount);
                console.log('Transporting and washing');
            }
            if (lapCount > 0){
                console.log('Lap x' + lapCount);
                console.log('Transporting and washing');
            }
            if (grindCount > 0){
                console.log('Grind x' + grindCount);
                console.log('Transporting and washing');
            }
            if (etchCount > 0){
                console.log('Etch x' + etchCount);
                console.log('Transporting and washing');
            }
            if (xrayCount > 0){
                console.log('X-ray x' + xrayCount);
            }
            console.log('Finished crystal ' + targetThickness + ' microns');
        }
    }

    function refineCrystal(chunk) {
        if ((chunk*0.25) >= targetThickness ){
            chunk = chunk * 0.25;
            cutCount ++;
            chunk = Math.floor(chunk);
        }
        else if ((chunk * 0.8) >= targetThickness){
            chunk = chunk * 0.8;
            lapCount ++;
            chunk = Math.floor(chunk);
        }
        else if ((chunk - 20) >= targetThickness){
            chunk = chunk - 20;
            grindCount ++;
            chunk = Math.floor(chunk);
        }
        else if ((chunk - 2) >= targetThickness || (chunk - 1) == targetThickness){
            chunk = chunk - 2;
            etchCount ++;
            chunk = Math.floor(chunk);
        }
        else if (chunk < targetThickness){
            chunk = chunk + 1;
            xrayCount ++;
        }
        getDesiredThickness(chunk);
    }
}

radioCrystals(['1000', '4000', '2000']);