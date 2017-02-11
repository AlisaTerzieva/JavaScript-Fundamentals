function matchAllWords(input) {
    regex = new RegExp(/\w+/g);
    let text = input.toString().match(regex).join('|');
    console.log(text);
}

matchAllWords(['_(Underscores) are also word characters  453 !']);