const {distribute} = require("./distributeBooks.js")
test("Distribute books to a list", ()=>{
    // this test can pass cos the book is to be distributed randomly
    
const members = ["Emily", "Jack", "Sophia", "Daniel"];
const books = ["Book A", "Book B", "Book C", "Book D"];
const answer = distribute(members, books);
expect(answer).toEqual([
    { member: 'Emily', book: 'Book C' },
    { member: 'Jack', book: 'Book D' },
    { member: 'Sophia', book: 'Book A' },
    { member: 'Daniel', book: 'Book B' }
  ]);
});