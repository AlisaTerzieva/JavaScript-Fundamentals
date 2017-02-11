function oddEven(input) {
    let number = Number(input);
    if (number % 2 == 0){
    console.log("even")
    }
    else if (number % 2 == Math.round(number%2)){
    console.log("odd")
    }
    else
    console.log("invalid");
}

oddEven('2');