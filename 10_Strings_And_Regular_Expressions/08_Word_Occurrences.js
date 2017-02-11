function wordOccurrences([sentence, word]) {
    let regex = new RegExp("\\b" + word +"\\b","ig");
    if (sentence.match(regex)) {
        console.log(sentence.match(regex).length);
    }
    else console.log("0");
}

wordOccurrences([
    'How do you plan on achieving that? How? How can you even think of that?',
    'yo'
]);