function emailValidation(input) {
    regex = /^[a-zA-Z0-9]+\@[a-z]+(\.[a-z]+)+$/g;
    input = input.toString();
    let isValid = regex.test(input);
    if (isValid){
            console.log('Valid');
    }
    else console.log('Invalid');
}

emailValidation(['f@email.bg']);