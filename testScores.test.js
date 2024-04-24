const {filterGrades} = require("./testScores");

test("Scores from 70 and above will be returned", ()=>{
    let arr = [50, 30, 58, 98, 70, 90, 20, 56, 89, 90];
    let answer = filterGrades(arr);
    expect(answer).toEqual([98, 70, 90, 89, 90]);

});