function storeCatalogue(input) {
    let catalogue = new Map();
    for (let line of input){
        line = line.trim().split(':').map(x => x.trim());
        let product = new Map();
        if(!product.has(line[0])) {
            product.set(line[0], line[1]);
        }
        else {
            product.get(line[0]).set(line[1]);
        }
        console.log(product);
    }

}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);