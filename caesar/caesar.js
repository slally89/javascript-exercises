const caesar = function(str, num) {
    let shiftedArr = []

    for (let i = 0; i < str.length; i++){
        let code = str.charCodeAt(i);

        if (code >= 65 && code <= 90){
            code = (((code - 65) + (num % 26)) % 26) + 65;
            
            if (code < 65){
                code += 26
            }
        } else if (code >= 97 && code <= 122){
            code = (((code - 97) + (num % 26)) % 26) + 97;

            if (code < 97) {
                code += 26
            }
        }

        shiftedArr.push(String.fromCharCode(code));

    }

    return shiftedArr.join('');
}

module.exports = caesar
