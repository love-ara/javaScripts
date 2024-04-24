const {distribute} = require("./distributeBooks.js")
test("Distribute books to a list", ()=>{
let arr = ["Emily", "Jack", "Sophia", "Daniel"];
let books = ["a", "b", "c", "d"]
let answer = distribute(arr, books);
expect(answer).toBe([""]);
});