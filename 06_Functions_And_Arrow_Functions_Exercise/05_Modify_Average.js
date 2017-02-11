function modifyAvrg(input) {
    let number = input.toString();
    let sum = 0;
    let avrg = 0;
    let numberOfDigits = number.length;
    function sumDigits(number) {
        for (let i = 0; i < number.length; i++){
            sum += Number(number[i]);
        }
        avrg = sum/numberOfDigits;
        checkAvrg(avrg);
    }
    function checkAvrg(avrg) {
        if (avrg <= 5){
            number += "9";
            numberOfDigits++;
            sum = 0;
            sumDigits(number);
        }
        else {
            console.log(number);
        }
    }
    sumDigits(number);
}

modifyAvrg(['555']);