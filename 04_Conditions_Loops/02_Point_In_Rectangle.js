function pointInRect(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let xMin = Number(input[2]);
    let xMax = Number(input[3]);
    let yMin = Number(input[4]);
    let yMax = Number(input[5]);

    if (x<=xMax && x>=xMin && y >=yMin && y<=yMax){
        console.log("inside");
    }
    else console.log("outside");
}

pointInRect(['12.5','-1','2','12','-3','3']);