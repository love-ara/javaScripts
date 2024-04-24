const {timeSchedules} = require("./timeSchedule.js");

test("Check shedule",()=>{
let arr = ["9:00AM", "11:00AM", "1:00PM", "3:00PM", "5:00PM"];
let answer = timeSchedules(arr);
expect(answer).toEqual(["1:00PM", "3:00PM", "5:00PM"]);
});