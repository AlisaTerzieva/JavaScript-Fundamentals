function employeeData(input) {
    let regex = /^([A-Z][A-Za-z]*) [–-] ([1-9][0-9]*) [–-] ([a-zA-Z0-9 -]+)$/g;
    let data = [], match;
    for (let person of input){
        while (match = regex.exec(person)){
            console.log(`Name: ${match[1]}\n`+`Position: ${match[3]}\n` + `Salary: ${match[2]}`);
        }
    }
    console.log(data.join(', '));
}

employeeData([
    'Isacc - 1000 – CEO',
    'Ivan - 500 - Employee',
    'Peter - 500 – Employee'
]);