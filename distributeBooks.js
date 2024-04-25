
function distribute(members, books) {
      assignedBooks = [];

    for (const member of members) {
        const randomIndex = Math.floor(Math.random() * books.length);
        const selectedBook = books.splice(randomIndex, 1)[0];
        assignedBooks.push({ member, book: selectedBook });
    }

    return assignedBooks;
}



module.exports = {distribute};