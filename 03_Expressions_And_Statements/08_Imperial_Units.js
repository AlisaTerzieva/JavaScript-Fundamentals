function inchToFeetInch(input) {
    let inchesInp = Number(input);
    let div = Math.floor(inchesInp/12);
    let rem = inchesInp%12;
    console.log(div + "'"+"-"+rem+'"');
}

inchToFeetInch(['23']);