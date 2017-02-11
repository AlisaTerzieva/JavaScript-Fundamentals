function escaping(input) {
    let result = '<ul>\n';
    for (str of input){
        result += '  <li>';
        for (ch of str){
            if (ch == '<') result += '&lt;';
            else if (ch == '>') result+='&gt;';
            else if (ch == '&') result+= '&amp;';
            else if (ch == '"') result += '&quot;';
            else result += ch;
        }
        result += '</li>\n';
    }
    result += '</ul>\n';
    return result;
}

console.log(escaping(['<div style=\"color: red;\">Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>']));