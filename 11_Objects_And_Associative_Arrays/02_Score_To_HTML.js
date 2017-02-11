function scoreToHTML(input) {
    let html = '<table>\n';
    html += '<tr><th>name</th><th>score</th></tr>';
    for (let score of input){
        let playerScore = JSON.stringify(score);
        console.log(playerScore);
        html += '<tr><td>';
    }

    html += '</table>';
}


scoreToHTML([{"name":"Pesho","score":479},{"name":"Gosho","score":205}]);