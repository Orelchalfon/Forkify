import View from './View.js';
class PaginationView extends View {
  _parentElement = document.querySelector(`.pagination`);

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultPerPage
    );

    //page 1 only next
    if (this._data.page === 1 && numPages > 1) {
      return `page 1 and others`;
    }
    if (this._data.page === numPages && numPages > 1) return `last page`;
    if (this._data.page < numPages) return `other pages`;
    return `only one page`;

    //2-5 prev $ next
    // > 5 => prev only
  };
}
export default new PaginationView();
