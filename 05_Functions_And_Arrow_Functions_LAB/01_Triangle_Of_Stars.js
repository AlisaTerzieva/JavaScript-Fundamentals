function printTriangle(input) {
    let n = Number(input);
    for (let row = 1; row <= n; row++)
        printStars(row);
    for (let row = n - 1; row >= 1; row--)
        printStars(row);

    function printStars(inputStars) {
        let m = Number(inputStars);
        console.log('*'.repeat(inputStars));
    }
}

printTriangle(['5']);