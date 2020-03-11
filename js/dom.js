function bookHtml(book) {
  return ` <tr> 
            <td>${book.author}</td>
            <td>${book.title}</td>
            <td>${book.pages}</td>
            <td>${book.status}</td>
            <td><button class="btn btn-danger">Delete Book</button></td>
          </tr>`;
}

export { bookHtml };
