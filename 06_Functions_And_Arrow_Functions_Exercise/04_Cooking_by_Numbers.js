function cookingByNums(input) {
    let number = Number(input[0]);
    for (let i = 1; i < input.length; i++){
        let operation = input[i];
        switch (operation) {
            case "chop": number = number/2; break;
            case "dice": number = Math.sqrt(number);break;
            case "spice": number = number + 1;break;
            case "bake": number = number*3;break;
            case "fillet": number = number * 0.8;break;
        }
        console.log(number);
    }
}

cookingByNums(['32', 'chop', 'chop', 'chop']);