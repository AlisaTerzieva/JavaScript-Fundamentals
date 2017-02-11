function solve(input) {
    for (let i = 0; i < input.length; i += 3) {
        let x = Number(input[i]);
        let y = Number(input[i+1]);
        let z = Number(input[i+2]);

        let x1 = 10, x2 = 50, y1 = 20, y2 = 80, z1 = 15, z2 = 50;
        function inVolume(x, y, z) {
            if (x >= x1 && x <= x2) {
                if (y >= y1 && y <= y2) {
                    if (z >= z1 && z <= z2) {
                        return true;
                    }
                }
            }
            else return false;
        }
        if (inVolume(x,y,z)){
            console.log("inside");
        }
        else {
            console.log("outside");
        }
    }
}

solve(['13.1', '50', '30']);