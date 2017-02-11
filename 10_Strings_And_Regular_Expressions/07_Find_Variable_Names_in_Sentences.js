function findVarNames(input) {
    regex = new RegExp(/\b_{1}[a-zA-Z0-9]+\b/g);
    let result =(input.toString().match(regex).map(x => x.slice(1)));
    console.log(result.join(','));
}

findVarNames(['The _id and _age variables are both integers.']);