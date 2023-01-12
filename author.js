const books = ["Book in outer scope"];
export const author = {
    fullName: "Bob Alice",
    books: ["Book without the object"],
    printBooks() {
        this.books.forEach(book => console.log(book + ' by ' + this.fullName));
    },
    printBooksWithoutThis() {
        books.forEach(book => console.log(book + ' by ' + this.fullName));
    }
};