import Book from './Book';

interface ApiResponse {
  totalCount: number,
  books: Book[],
}

export default ApiResponse;
