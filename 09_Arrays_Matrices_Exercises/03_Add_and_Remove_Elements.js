function addRemoveElements(input) {
    let resultArr = [];
    let value = 0;
    for (let i = 0; i < input.length; i++){
        value ++;
        if (input[i] == 'add'){
            resultArr.push(value);
        }
        else (resultArr.pop(input[i]));
    }
        if (resultArr.length != 0) {
            for (let i = 0; i < resultArr.length; i++) {

                console.log(resultArr[i]);
            }
        }
        else console.log('Empty');

}

addRemoveElements(['add', 'add', 'remove', 'add', 'add']);