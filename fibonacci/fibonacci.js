const fibonacci = function(num) {
    if (typeof num != "number"){
        num = Number(num);
    }

    if (num < 0){
        return 'OOPS';
    } else if (num == 0){
        return 0;
    }

    let fibArr = [1, 1];

    while (fibArr.length < num){
        let first = fibArr[fibArr.length - 1];
        let second = fibArr[fibArr.length - 2];
        fibArr.push(first + second);
    }

    return fibArr[fibArr.length - 1];
}

module.exports = fibonacci
