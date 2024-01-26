const myLibrary = [];
const form = document.querySelector(".form");
const addBook = document.querySelector(".add");
const overlay = document.createElement("div");
overlay.classList.add("overlay");
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
addBook.addEventListener("click", function (event) {
  if (form.classList.contains("invisible")) {
    form.classList.remove("invisible");
    overlay.classList.add("overlay");

    document.body.appendChild(overlay);
  }
});
overlay.addEventListener("click", function (event) {
  if (!form.classList.contains("invisible")) {
    form.classList.add("invisible");
    overlay.classList.remove("overlay");
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = document.getElementById("form-title");
  const author = document.getElementById("form-author");
  const pages = document.getElementById("form-pages");
  const read = document.getElementById("read-checkbox");
  const book1 = new Book(title, author, pages, read);
  myLibrary.push(book1);
});
//const book1 = new Book("Game Of Thrones", "George R. R. Martin", "694", true);

const book2 = new Book("The Hobbit", "John Ronald Reuel Tolkien", "320", true);
function addBookToLibrary() {
  myLibrary.push(book2);

  console.log(myLibrary);
}

addBookToLibrary();
console.log(Book);
