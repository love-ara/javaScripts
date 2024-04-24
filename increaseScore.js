
function increaseScore(arr){
    return arr.filter((score) => score >= 0 && score <= 100).map(score => score + 5);
}

module.exports = {increaseScore}