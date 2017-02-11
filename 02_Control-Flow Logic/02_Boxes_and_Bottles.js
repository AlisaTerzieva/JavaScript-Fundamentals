function boxesAndBottles(input) {
    let bottles = Number(input[0]);
    let boxes = Number(input[1]);
    let boxesNeeded = Math.ceil(bottles/boxes);
    console.log(boxesNeeded);
}

boxesAndBottles(['5', '10']);