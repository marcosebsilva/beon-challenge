import { Dispatch, SetStateAction } from 'react';
import ApiResponse from './ApiResponse';

interface BooksContextValue extends ApiResponse{
  updateBooks: Dispatch<SetStateAction<ApiResponse>>,
}

export default BooksContextValue;
