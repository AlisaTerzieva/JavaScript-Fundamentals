function extractLinks(input) {
    let str = input.join(' ');
    regex = /www\.[a-zA-Z0-9-]+(\.[a-z]+)+/g;
    if (str.match(regex)) {
        console.log(str.match(regex).join('\n'));
    }
}

extractLinks([
    ''
]);