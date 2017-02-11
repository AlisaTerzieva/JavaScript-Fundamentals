function rotateArr(input) {
    let rotationAmount = parseInt(input[input.length - 1]);
    let arr = [];

    for (let i = 0; i < input.length - 1; i++) {
        arr.push(input[i]);
    }

    let lastElem = arr[arr.length - 1];
    for (let i = 0; i < rotationAmount%arr.length; i++) {

        arr.pop(arr[arr.length - 1]);
        arr.unshift(lastElem);
        lastElem = arr[arr.length - 1];
    }
    console.log(arr.join(" "));
}

rotateArr(['1', '2', '3', '4', '2']);