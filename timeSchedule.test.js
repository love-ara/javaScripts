const {timeSchedules} = require("./timeSchedule.js");

test("Check shedule",()=>{
let arr = ["9:00", "11:00", "1:00", "3:00", "5:00"];
let answer = timeSchedules(arr);
expect(answer).toEqual(["1:00", "3:00", "5:00"]);
});