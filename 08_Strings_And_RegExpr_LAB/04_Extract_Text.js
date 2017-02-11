function extractText(input) {
    input = input.toString();
    let start = '';
    let end = '';
    let sub = [];
    while (true) {
            start = input.indexOf('(', end + 1);
            if (start == -1) break;
            end = input.indexOf(')', start+1);
            if (end == -1) break;
            sub.push(input.substr(start + 1, end - start - 1));
    }
    console.log(sub.join(', '));
}

extractText(['Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)']);