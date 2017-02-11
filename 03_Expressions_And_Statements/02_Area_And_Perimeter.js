function calcRectAreaPerim(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let area = a * b;
    let perimeter = 2 * (a + b);
    console.log(area);
    console.log(perimeter);
}

calcRectAreaPerim(['2.5', '3.14']);