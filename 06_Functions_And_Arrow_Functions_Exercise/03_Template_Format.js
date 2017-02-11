function templateFormat(input) {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<quiz>\n';
    for (let i = 0; i < input.length; i+=2){
        let question = input[i];
        let answer = input[i+1];
        xml += '  <question>\n';
        xml += '    ' + question +'\n';
        xml += '  </question>\n';
        xml += '  <answer>\n';
        xml += '    ' + answer +'\n';
        xml += '  </answer>\n';
        
    }

    xml += '</quiz>';
    return xml;
}
console.log(templateFormat(['What now?', 'I have no idea.', 'So how are you?', 'I am doing fine']));