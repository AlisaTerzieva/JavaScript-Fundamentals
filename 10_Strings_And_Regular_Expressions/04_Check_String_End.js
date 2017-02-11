function checkStrEnds([str, substr]) {
    console.log(str.substr(str.length - substr.length, str.length) == substr);
}

checkStrEnds([
    'The new iPhone has no headphones jack.',
    'o headphones jack.'
]);