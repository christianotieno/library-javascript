import { bookToHTML } from "./dom.js";

const id = 0;

function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id + 1;
}

const bookList = [];

const submit = document.getElementById('submit');

submit.onclick = () => {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  bookList.push(new Book(title, author, pages, read));

  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('read').checked = false;
};

const render = () => {
 
}



bookList.push(new Book('The great gatsby', 'F. Scott', 255, true));
bookList.push(new Book('Anna Karenina', 'Leo Tolstoy', 315, false));
bookList.push(new Book('To Kill a Mockingbird', 'Harper Lee', 192, true));

render();