function censorship(input) {
    let str = input[0].toString();
    for (i = 1; i < input.length; i++){
        let word = input[i].toString();
        let cens = '-'.repeat(word.length);
        while (str.indexOf(word)>-1){
            index = str.indexOf(word);
            str = str.replace(word, cens);
        }
    }

    console.log(str);
}

censorship(['roses are red, violets are blue', ', violets are', 'red']);