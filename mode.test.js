const {findMode} = require("./mode.js")

test("Get the mode", ()=> {
    let arr = [1, 1, 2, 2, 2];
    let answer = findMode(arr);
    expect(answer).toEqual([2]);
})

test("Get the mode", ()=> {
    let arr = [3, 3, 3, 3, 1];
    let answer = findMode(arr);
    expect(answer).toEqual([3]);
});