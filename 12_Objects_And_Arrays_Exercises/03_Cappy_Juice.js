function cappyJuice(input) {
    let juiceQuantity = new Map();
    let bottleQuantity = new Map();
    for (juice of input){
        let arr = juice.split('=>').map(x => x.trim());
        if (juiceQuantity.has(arr[0])){
            let juiceValue = Number(juiceQuantity.get(arr[0])) + Number(arr[1]);
            let bottleValue = Math.floor(juiceValue / 1000);
            juiceQuantity.set(arr[0], juiceValue);
            if (bottleValue > 0) {
                bottleQuantity.set(arr[0], bottleValue);
            }
        }
        else {
            juiceQuantity.set(arr[0],Number(arr[1]));
            let bottleValue = Math.floor(Number(arr[1]) / 1000);
            if (bottleValue > 0) {
                bottleQuantity.set(arr[0], bottleValue);
            }
        }
    }
    for (let element of bottleQuantity){
            console.log(`${element[0]} => ${element[1]}`);
    }
}

cappyJuice([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);