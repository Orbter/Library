const myLibrary = [];
const form = document.querySelector(".form");
const addBook = document.querySelector(".add");
const overlay = document.createElement("div");
const bookCard = document.querySelector(".book-card");
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
  const title = document.getElementById("form-title").value;
  const author = document.getElementById("form-author").value;
  const pages = document.getElementById("form-pages").value;
  const read = document.getElementById("read-checkbox").value;
  const book1 = new Book(title, author, pages, read);
  myLibrary.push(book1);
  console.log(title);
  console.log(myLibrary);
});
//const book1 = new Book("Game Of Thrones", "George R. R. Martin", "694", true);

function addBookToLibrary() {
  const newDIv = document.createElement("div");
  newDIv.classList.add("card");
  bookCard.appendChild(newDIv);
}

addBookToLibrary();
