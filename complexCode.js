// Filename: complexCode.js
// Description: This code demonstrates a complex implementation of a library management system.

// Define the Library class
class Library {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(book) {
    const index = this.books.findIndex(b => b.id === book.id);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  findBooksByAuthor(author) {
    return this.books.filter(book => book.author === author);
  }

  findBooksByGenre(genre) {
    return this.books.filter(book => book.genre === genre);
  }

  findBooksByTitle(title) {
    return this.books.filter(book => book.title === title);
  }

  getAllBooks() {
    return this.books;
  }
}

// Define the Book class
class Book {
  constructor(id, title, author, genre) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.genre = genre;
  }
}

// Instantiate a Library
const myLibrary = new Library("My Library", "New York");

// Add books to the Library
const book1 = new Book(1, "The Great Gatsby", "F. Scott Fitzgerald", "Fiction");
const book2 = new Book(2, "To Kill a Mockingbird", "Harper Lee", "Fiction");
const book3 = new Book(3, "The Catcher in the Rye", "J.D. Salinger", "Fiction");

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

// Find books by author
const booksByFitzgerald = myLibrary.findBooksByAuthor("F. Scott Fitzgerald");
console.log("Books by F. Scott Fitzgerald:");
console.log(booksByFitzgerald);

// Find books by genre
const fictionBooks = myLibrary.findBooksByGenre("Fiction");
console.log("Fiction books:");
console.log(fictionBooks);

// Remove a book
myLibrary.removeBook(book2);
console.log("Books after removing 'To Kill a Mockingbird':");
console.log(myLibrary.getAllBooks());

// Output:
// Books by F. Scott Fitzgerald:
// [ Book { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction' } ]
// Fiction books:
// [
//   Book { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction' },
//   Book { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction' },
//   Book { id: 3, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction' }
// ]
// Books after removing 'To Kill a Mockingbird':
// [
//   Book { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Fiction' },
//   Book { id: 3, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction' }
// ]