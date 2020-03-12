/* eslint-disable import/extensions */
import {
  bookHtml, toggleForm, formInput, clearFields,
} from './dom.js';
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

// displays books added
function render() {
  const layout = myLibrary.map(book => bookHtml(book)).join(' ');
  document.getElementById('book-list').innerHTML = layout;
}

const submit = document.getElementById('submit');

// Add book to library

function addBookToLibrary(book) {
  myLibrary.push(book);

  clearFields();
  toggleForm('close');
  render();
}

// get values and send to addBookToLibrary function

submit.onclick = () => {
  const inputValues = formInput();

  const book = new Book(...inputValues);

  addBookToLibrary(book);
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

function defaultBooks() {
  myLibrary.push(new Book('Famous Author', 'The Great Book', 97, true));
  myLibrary.push(new Book('Famous Author Jr.', 'The Even Greater Book', 177, false));
  myLibrary.push(new Book('Not So Famous Author', 'The Not So Great Book', 246, true));
}

defaultBooks();

render();
