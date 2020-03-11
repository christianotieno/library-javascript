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
const closeButton = document.getElementById('close-form');

function toggleForm(action) {
  if(action === 'open') {
    document.getElementById('book-form').classList.remove('d-none');
    document.getElementById('submit').classList.remove('d-none');
    openButton.classList.add('d-none');
  } else if(action === 'close') {
    document.getElementById('book-form').classList.add('d-none');
    document.getElementById('submit').classList.add('d-none');
    openButton.classList.remove('d-none');
  }
}


export { bookHtml, toggleForm };
