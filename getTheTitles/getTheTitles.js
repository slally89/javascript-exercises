const getTheTitles = function(arr) {
    let titleArr = []

    arr.forEach((ele) => {
        titleArr.push(ele.title);
    });

    return titleArr;
}

module.exports = getTheTitles;
