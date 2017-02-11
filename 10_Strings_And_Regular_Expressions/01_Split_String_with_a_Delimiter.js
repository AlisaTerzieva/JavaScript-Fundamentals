function splitString([str, delimiter]) {
    console.log(str.split(delimiter).join('\n'));
}
splitString([
    'http://platform.softuni.bg',
    '.'
]);