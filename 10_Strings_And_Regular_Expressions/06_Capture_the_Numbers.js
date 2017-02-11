function captureTheNumbers(input) {
    let str = input.join(' ');
    let regex = new RegExp(/\d+/g);
    let result = str.match(regex);
    console.log(result.join(' '));
}

captureTheNumbers([
        'The300',
        'What is that?',
        'I think it’s the 3rd movie.',
        'Lets watch it at 22:45'
]);