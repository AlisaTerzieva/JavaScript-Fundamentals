function aggregateElements(input) {
    let inputNums = input.map(Number);
    aggregate(inputNums, 0, (a,b)=> a+b);
    aggregate(inputNums, 0, (a,b)=> a+1/b);
    aggregate(inputNums, '', (a,b)=> a+b);

    function aggregate(arr, initVal, func) {
        let val = initVal;
        for (let i = 0; i<arr.length; i++)
            val = func(val, arr[i]);
        console.log(val);
    }
}

aggregateElements(['10', '20', '30']);