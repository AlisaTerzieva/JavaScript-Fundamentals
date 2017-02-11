function usernames(input) {
    let result = [];
    for (let i = 0; i < input.length; i++){
        let str = input[i];
        let start = str.indexOf('@');
        let name = str.substr(0, start);
        let initials = str.substr(start+1).split('.');
        for (let j = 0; j < initials.length; j ++){
            initials[j] = initials[j][0];
        }
        let resStr = `${name}.${initials.join('')}`;
        //console.log(resStr);
        result.push(resStr);
    }

    console.log(result.join(', '));
}

usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);