import Book from './Book';

interface BooksContextValue {
  totalCount: number,
  books: Book[],
}

export default BooksContextValue;
