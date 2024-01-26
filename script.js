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
  createObject();
  console.log(title);
  console.log(myLibrary);
  console.log(book1);
});
//const book1 = new Book("Game Of Thrones", "George R. R. Martin", "694", true);

function createObject() {
  const title = document.getElementById("form-title").value;
  const author = document.getElementById("form-author").value;
  const pages = document.getElementById("form-pages").value;
  const read = document.getElementById("read-checkbox").value;
  const book1 = new Book(title, author, pages, read);
  myLibrary.push(book1);
}

function createCard() {
  const newCard = document.createElement("div");
  const cardTitle = document.createElement("div");
  const cardAuthor = document.createElement("div");
  const cardPages = document.createElement("div");
  const cardButtons = document.createElement("div");
  const titleH3 = document.createElement("h3");
  const authorP = document.createElement("p");
  const pagesP = document.createElement("p");
  const readButton = document.createElement("button");
  const removeCard = document.createElement("button");
  //appending all the dives and elements
  newCard.appendChild(cardTitle);
  newCard.appendChild(cardAuthor);
  newCard.appendChild(cardPages);
  newCard.appendChild(cardButtons);
  cardTitle.appendChild(titleH3);
  cardAuthor.appendChild(authorP);
  cardPages.appendChild(pagesP);
  cardButtons.appendChild(readButton);
  cardButtons.appendChild(removeCard);
  //adding classes
  newCard.classList.add("card", "flex");
  readButton.classList("card-read");
  removeCard.classList("remove");
  //adding the text
  readButton.innerText = "Read";
  removeCard.innerText = "Remove";
}

function addBookToLibrary(card) {
  bookCard.appendChild(card);
}
