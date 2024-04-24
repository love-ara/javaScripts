
function filterGrades(grades){
    return grades.filter((num) => num >= 70);
}

module.exports = {filterGrades};
console.log(filterGrades([50, 30, 58, 98, 70, 90, 20, 56, 89, 90]));