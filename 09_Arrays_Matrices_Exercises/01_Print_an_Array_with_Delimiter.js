function printArr(input) {
    let array = [];
    let delimiter = input[input.length-1];
    for (let i = 0; i < input.length-1; i++){
        array.push(input[i]);
    }
    console.log(array.join(delimiter));
}

printArr(['One',
'Two',
'Three',
'Four',
'Five',
'-']
);