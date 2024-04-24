
function filterGrades(grades){
    return grades.filter((num) => num >= 70 && num <= 100);
};

module.exports = {filterGrades};
