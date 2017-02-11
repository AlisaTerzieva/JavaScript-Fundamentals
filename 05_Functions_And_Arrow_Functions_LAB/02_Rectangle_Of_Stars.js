function squareOfStars(input = 5) {
    function lineOfStars(input = 5) {
        console.log('* '.repeat(input));
    }
    for (let i = 0; i < input; i++)
    lineOfStars(input);
}

squareOfStars();