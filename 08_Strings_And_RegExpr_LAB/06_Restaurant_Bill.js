function restaurantBill(input) {
    let purchases = [];
    let sumTotal = 0;
    for (let i = 0; i < input.length; i++){
        if (i % 2 == 1){
            sumTotal += parseFloat(input[i]);
        }
        else purchases.push(input[i]);
    }
    console.log(`You purchased ${purchases.join(', ')} for a total sum of ${sumTotal}`);
}

restaurantBill(['Cola', '1.35', 'Pancakes', '2.88']);