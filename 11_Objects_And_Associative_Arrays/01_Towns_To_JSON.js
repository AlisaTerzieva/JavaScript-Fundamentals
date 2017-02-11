function townsJSON(input) {
let regex = new RegExp(/\s*\|\s*/g);
    let headings = input[0].slice(2,input[0].length-2).split(regex);
    let res = [];
    for (let i = 1; i < input.length; i++)
    {
        let str = input[i].slice(2, input[i].length-2).split(regex);
        let obj = {
            Town : str[0],
            Latitude: parseFloat(str[1]),
            Longitude: parseFloat(str[2])
    };
    res.push(obj);
    }
    console.log(JSON.stringify(res));
}
townsJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.69| 23.32 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);