function matchDates(input) {
    let regex = /\b(\d{1,2})-([A-Z][a-z]{2})-(\d{4})\b/g;
    let dateArr = [], match;
    let d = new Date;
    for (let line of input){
        while (match = regex.exec(line)) {
            if (d.getTime(match[0])) {
                dateArr.push(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`)
            }
        }
    }
    console.log(dateArr.join('\n'));
}
matchDates(['133-Jan-1999 is a valid date.',
    'So is 01-July-2000.',
    'I am an awful liar, by the way',
    '-- Ivo, 28-Sep-2016.'
]);