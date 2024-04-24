const {increaseScore} = require("./increaseScore.js");

test("Scores are increased by 5", ()=>{
    let arr = [85, 92, 78, 88, 95];
    let answer = increaseScore(arr);
    expect(answer).toEqual([90, 97, 83, 93, 100]);

});