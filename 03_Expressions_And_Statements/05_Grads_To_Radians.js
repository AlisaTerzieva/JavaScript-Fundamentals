function gradsToDegrees(input) {
    let grads = Number(input);
    grads = grads % 400;
    grads += 400;
    grads = grads % 400;
    let degrees = grads * 0.9;
    console.log(degrees);
}

gradsToDegrees(['-1']);
gradsToDegrees(['0']);
gradsToDegrees(['1']);