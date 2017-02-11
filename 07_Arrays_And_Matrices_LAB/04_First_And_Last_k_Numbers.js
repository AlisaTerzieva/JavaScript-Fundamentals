function firstLast(input) {
    let k = Number(input[0]);

    function firstK(arr){
        let resultArr = [];
        for (let i = 1; i <= k; i++){
            resultArr.push(Number(arr[i]));
        }
        console.log(resultArr);
    }

    function lastK(arr){
        let resultArr = [];
        for (let i = arr.length - k; i < arr.length; i++){
            resultArr.push(Number(arr[i]));
        }
        console.log(resultArr);
    }
    firstK(input);
    lastK(input);
}

console.log(firstLast(['2','7', '8', '9']));