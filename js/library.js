import { bookHtml, toggleForm } from './dom.js';

const myLibrary = [];

// book constructor
function Book(author, title, pages, status = false) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.status = status;
  this.id = Math.floor(Math.random() * 10000);
}

myLibrary.push(new Book('author1', 'title1', 123, true));
myLibrary.push(new Book('author2', 'title2', 123, false));
myLibrary.push(new Book('author3', 'title3', 123, true));

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

  if (author === '' || title === '' || pages === '') {
    alert('Please fill out all fields!');
  } else {
    myLibrary.push(new Book(author, title, pages, status));

    document.getElementById('author').value = '';
    document.getElementById('title').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('status').checked = false;
    toggleForm('close');
    render();
  }
};

// delete book
const deleteBook = (element) => {
  const bookId = Number(element.parentElement.previousElementSibling.innerText);

  myLibrary.map(book => {
    if (book.id === bookId) {
      myLibrary.splice(myLibrary.indexOf(book), 1);
    }
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
    render();
  });
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