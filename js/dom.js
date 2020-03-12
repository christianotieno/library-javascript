function bookHtml(book) {
  return ` <tr> 
            <td>${book.author}</td>
            <td>${book.title}</td>
            <td>${book.pages}</td>
            <td><button class="btn ${book.status ? 'btn-success' : 'btn-warning'} read">${book.status ? 'Read' : 'Not read'}</button></td>
            <td>${book.id}</td>
            <td><button class="btn btn-danger delete">Delete Book</button></td>
          </tr>`;
}

// toggle form
const openButton = document.getElementById('add-book');

function toggleForm(action) {
  if (action === 'open') {
    document.getElementById('book-form').classList.remove('d-none');
    document.getElementById('submit').classList.remove('d-none');
    openButton.classList.add('d-none');
  } else if (action === 'close') {
    document.getElementById('book-form').classList.add('d-none');
    document.getElementById('submit').classList.add('d-none');
    openButton.classList.remove('d-none');
  }
}

function formInput() {
  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;
  const pages = document.getElementById('pages').value;
  const status = document.getElementById('status').checked;

  const errorDiv = document.getElementById('error');
  let value = [];

  if (author === '' || title === '' || pages === '') {
    errorDiv.classList.remove('d-none');
    setTimeout(() => { errorDiv.classList.add('d-none'); }, 3000);
    value = false;
  } else {
    value = [author, title, pages, status];
  }
  return value;
}

function clearFields() {
  document.getElementById('author').value = '';
  document.getElementById('title').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('status').checked = false;
}

export {
  bookHtml,
  toggleForm,
  formInput,
  clearFields,
};
