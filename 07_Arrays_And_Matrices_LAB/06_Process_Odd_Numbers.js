function processOddNums(input) {
    let arr = input.map(Number);
    let resultArr = [];
    function doubleOddArrPos(inpArr, res) {
        for (let i = 1; i < inpArr.length; i+=2){
            inpArr[i] = 2*inpArr[i];
            res.push(inpArr[i]);
        }
        res.reverse();
        console.log(res);
    }

    doubleOddArrPos(arr, resultArr);
    
}
processOddNums(['3', '0', '10', '4', '7', '3']);