function distance(input) {
    let v1 = Number(input[0]);
    let v2 = Number(input[1]);
    let t = Number(input[2]);
    let diffVkph = Math.abs(v1 - v2);
    let diffVmps = diffVkph / 3.6;
    let dist = diffVmps * t;
    console.log(dist);
}

distance(['5', '-5', '40']);