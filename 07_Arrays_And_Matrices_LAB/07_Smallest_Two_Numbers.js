function smallestTwoNumbers(input) {
    let arrNum = input.map(Number);
    let minVal = 0;
    let indexMin = 0;
    let resultArr = [];
    function findMinVal(arr, resArr) {
        minVal = Math.min.apply( Math, arr );
        indexMin = arr.indexOf(minVal);
        arr.splice(indexMin, 1);
        for (let i = 0; i < arr.length; i++){
            if (arr[i] == minVal){
            indexMin = arr.indexOf(arr[i]);
                arr.splice(indexMin, 1);
            }
        }
        resArr.push(minVal);
        //console.log(arr);
    }
    findMinVal(arrNum, resultArr);
    findMinVal(arrNum, resultArr);

    console.log(resultArr.join(" "));
}

smallestTwoNumbers(['3', '0', '10', '4', '7', '3']);