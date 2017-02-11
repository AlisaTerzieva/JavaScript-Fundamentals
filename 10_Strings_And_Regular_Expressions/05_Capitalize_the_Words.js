function capitalizeWords(input) {
    let words = input.toString().toLowerCase().split(' ');
    let result = [];
    for (word of words){
        word = word.charAt(0).toUpperCase() + word.slice(1);
        result.push(word);
    }
    console.log(result.join(' '));
}
capitalizeWords('Was that Easy? tRY thIs onE for SiZe!');