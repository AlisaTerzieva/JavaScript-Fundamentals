function composeHTMLTag(input) {
    let imgName = input[0];
    let imgDescription = input[1];

    console.log('<img src="' + imgName + '" alt="' + imgDescription+'">');
}

composeHTMLTag(['smiley.gif', 'Smiley Face']);