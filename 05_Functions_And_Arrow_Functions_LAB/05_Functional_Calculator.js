function calculator([a, b, op]) {
    [a, b] = [a, b].map(Number);
    switch (op){
        case '*': return a*b;
        case '/': return a/b;
        case '+': return a+b;
        case '-': return a-b;
    }
}
console.log(calculator(['1', '2', '-']));