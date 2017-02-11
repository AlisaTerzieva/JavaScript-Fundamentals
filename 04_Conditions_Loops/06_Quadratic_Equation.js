function quadraticEquation(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let x1 = 0;
    let x2 = 0;

    let discriminant = b * b - 4 * a * c;
    if (discriminant > 0){
        x1 = (-b + Math.sqrt(discriminant))/(2 * a);
        x2 = (-b - Math.sqrt(discriminant))/(2 * a);
        console.log(Math.min(x1,x2));
        console.log(Math.max(x1, x2));
    }
    else if (discriminant == 0){
        x1 = -b / (2*a);
        console.log(x1);
    }
    else console.log("No");
}

quadraticEquation(['6', '11', '-35']);