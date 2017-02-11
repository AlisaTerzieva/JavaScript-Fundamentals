function checkStr([str, substr]) {
    console.log(str.substring(0, substr.length) == substr);
}

checkStr([
    'Marketing Fundamentals, starting 19/10/2016',
    'Marketing Fundamentals, sta'
]);
