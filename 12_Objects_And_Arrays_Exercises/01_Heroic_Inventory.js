function heroicInventory(input) {
    let res = [];
    if (input.length > 0) {
        for (player of input) {
            let arr = player.split('/').map(x => x.trim());
            if (arr.length > 2) {
                let obj = {
                    name: arr[0],
                    level: parseInt(arr[1]),
                    items: arr[2].split(',').map(x => x.trim())
                };
                res.push(obj);
            }
            else
            {
                let obj = {
                    name: arr[0],
                    level: parseInt(arr[1]),
                    items: []
                };
                res.push(obj);
            }
        }
        console.log(JSON.stringify(res));
    }
}

heroicInventory([
    'Isacc / 25  ',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);