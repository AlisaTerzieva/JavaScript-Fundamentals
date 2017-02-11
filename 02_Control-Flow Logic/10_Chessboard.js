function chessboard(input) {
    let n = Number(input);
    let html = '<div class="chessboard">\n';
    let color = 'black';
    for (let i = 0; i < n; i++){
        html += '  <div>\n';
        for (let j = 0; j < n; j++){
            if (i%2==0)
                if (j%2 == 0){
                    color = 'black';
                }
                else color = 'white';
            else{
                if (j%2 == 0) {
                    color = 'white';
                }
                else color = 'black';
            }
            html += `    <span class="${color}"></span>\n`;
        }
        html += '  </div>\n';
    }
    html += '</div>';
    console.log(html);
}

chessboard(5);