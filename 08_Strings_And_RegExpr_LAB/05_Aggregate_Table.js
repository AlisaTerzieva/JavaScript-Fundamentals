function aggregateTable(input) {
    let cities = [];
    let incomeSum = 0;
    for (let i = 0; i < input.length; i++){
        let str = input[i].toString();
        let start = str.indexOf('|');
        let end = str.indexOf('|', start+1);
        let city = str.substr(start+1, end-1).trim();
        cities.push(city);
        let income = str.substr(end+1).trim();
        incomeSum += parseInt(income);
    }
    console.log(cities.join(', '));
    console.log(incomeSum);
}

aggregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
);