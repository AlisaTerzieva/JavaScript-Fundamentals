function sortArr(input) {

    let res = input.sort(function (a, b) {
        return a.length - b.length ||
                a.localeCompare(b);
    });

    console.log(res.join("\n"));
}
sortArr(['test',
    'Deny',
    'omen',
    'Default'
]);