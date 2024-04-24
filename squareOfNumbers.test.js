const {squareNumber} = require("./squareOfNumbers.js");

test("numbers are to be squared", ()=>{
    let arr = [2, 4, 6, 8, 10];
    let answer = squareNumber(arr);
    expect(answer).toEqual([4, 16, 36, 64, 100]);

});