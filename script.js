const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
const book1 = new Book("Game Of Thrones", "George R. R. Martin", "694", true);
const book2 = new Book("The Hobbit", "John Ronald Reuel Tolkien", "320", true);
function addBookToLibrary() {
  myLibrary.push(book1);
  myLibrary.push(book2);

  console.log(myLibrary);
}

addBookToLibrary();
console.log(Book);
