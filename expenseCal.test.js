const {cal} = require("./expenseCal.js");

test("total", ()=>{
    let list ={ "groceries": 150, "dining out": 100, "transportation": 50, "entertainment": 80 };
    let answer = cal(list);
    expect(answer).toEqual([380]);

});