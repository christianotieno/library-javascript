/* eslint-disable import/extensions */
import { bookHtml, toggleForm } from './dom.js';
/* eslint-enable import/extensions */

const myLibrary = [];

// book constructor
function Book(author, title, pages, status = false) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.status = status;
  this.id = Math.floor(Math.random() * 10000);
}

myLibrary.push(new Book('Famous Author', 'The Great Book', 97, true));
myLibrary.push(new Book('Famous Author Jr.', 'The Even Greater Book', 177, false));
myLibrary.push(new Book('Not So Famous Author', 'The Not So Great Book', 246, true));

// displays books added
function render() {
  const layout = myLibrary.map(book => bookHtml(book)).join(' ');
  document.getElementById('book-list').innerHTML = layout;
}

const addBookToLibrary = document.getElementById('submit');

// updating array
addBookToLibrary.onclick = () => {
  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;
  const pages = document.getElementById('pages').value;
  const status = document.getElementById('status').checked;


  myLibrary.push(new Book(author, title, pages, status));

  document.getElementById('author').value = '';
  document.getElementById('title').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('status').checked = false;
  toggleForm('close');
  render();
};

// delete book
const deleteBook = (element) => {
  const bookId = Number(element.parentElement.previousElementSibling.innerText);

  myLibrary.map(book => {
    if (book.id === bookId) {
      myLibrary.splice(myLibrary.indexOf(book), 1);
    }
    return myLibrary;
  });
  render();
};

// open/close form
const openForm = document.getElementById('add-book');
const closeForm = document.getElementById('close-form');

openForm.onclick = () => {
  toggleForm('open');
};

closeForm.onclick = () => {
  toggleForm('close');
};

// change status
const changeStatus = (element) => {
  const bookId = Number(element.parentElement.nextElementSibling.innerText);

  myLibrary.map(book => {
    if (book.id === bookId) {
      book.status = !book.status;
    }
    return myLibrary;
  });
  render();
};


// event listener for click
document.querySelector('#book-list').addEventListener('click', (element) => {
  if (element.target.classList.contains('delete')) {
    deleteBook(element.target);
  } else if (element.target.classList.contains('read')) {
    changeStatus(element.target);
  }
});

render();