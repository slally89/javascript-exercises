const palindromes = function(str) {
    let string = str.toLowerCase();
    let strArr = string.split("");

    //remove spaces & punctuation
    let lettersOnly = strArr.filter((char) => {
        if (char >= "a" && char <= "z"){
            return true;
        }
    });

    //filtered down initial input
    let initial = lettersOnly.join('');

    //reverse filtered array to test against initial
    let reversed = lettersOnly.reverse().join('');

    return initial === reversed;

}

module.exports = palindromes
