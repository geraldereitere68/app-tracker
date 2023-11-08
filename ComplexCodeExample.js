/*
Filename: ComplexCodeExample.js

Description: This code demonstrates a complex application that manages a library system.
The code includes advanced data structures, algorithms, and object-oriented programming concepts.

*/

// Class representing a Book
class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }

  // Method to get the age of the book
  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.publicationYear;
  }
}

// Class representing a Library
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  // Method to add a book to the library
  addBook(book) {
    this.books.push(book);
  }

  // Method to remove a book from the library
  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  // Method to get all books by a specific author
  getBooksByAuthor(author) {
    return this.books.filter((book) => book.author === author);
  }
}

// Create a library instance
const library = new Library("Awesome Library");

// Create some book instances
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book3 = new Book("1984", "George Orwell", 1949);

// Add books to the library
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Get all books by a specific author
const author = "F. Scott Fitzgerald";
const booksByAuthor = library.getBooksByAuthor(author);

// Print the books by the author
console.log(`Books by ${author}:`);
booksByAuthor.forEach((book) => {
  console.log(`${book.title} (${book.getAge()} years old)`);
});

// Remove a book from the library
library.removeBook(book2);

// Get all books in the library
console.log("All books in the library:");
library.books.forEach((book) => {
  console.log(`${book.title} (${book.getAge()} years old)`);
});

// Output:
// Books by F. Scott Fitzgerald:
// The Great Gatsby (96 years old)
// All books in the library:
// The Great Gatsby (96 years old)
// 1984 (72 years old)