export const bookToHTML = (book) => {
  return `<tr>
    <td>${book.author}</td>
    <td>${book.title}</td>
    <td>${book.pages} pages</td>
    <td>${book.read ? 'Read' : 'Not read'}</td>
    <td><button class="btn btn-danger" action="#">submit</button></td>
  </tr>`
}