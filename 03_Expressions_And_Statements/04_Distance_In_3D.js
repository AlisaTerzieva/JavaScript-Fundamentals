function dist3D(input) {
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let z1 = Number(input[2]);
    let x2 = Number(input[3]);
    let y2 = Number(input[4]);
    let z2 = Number(input[5]);
    deltaX = x1 - x2;
    deltaY = y1 - y2;
    deltaZ = z1 - z2;
    let distance = Math.sqrt(deltaX*deltaX + deltaY*deltaY + deltaZ*deltaZ);
    console.log(distance);
}

dist3D(['1', '1', '0', '5', '4', '0']);