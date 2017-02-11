function binaryLog(input) {
    for (num of input){
    let number = Number(num);
    console.log(Math.log2(number));
    }
}

binaryLog(['8', '1024', '512']);