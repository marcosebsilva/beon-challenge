import React, { useContext, useMemo, useState } from 'react';
import ApiResponse from '../interfaces/ApiResponse';

export interface BooksContextValue extends ApiResponse{
  updateBooks: React.Dispatch<React.SetStateAction<ApiResponse>>,
}

const initialContext: BooksContextValue = {
  totalCount: 0,
  books: [],
  updateBooks: () => {
    throw new Error('updateBooks function must be overridden');
  },
};

const BooksContext = React.createContext<BooksContextValue>(initialContext);

export function BooksProvider({ children }: React.PropsWithChildren) {
  const [books, updateBooks] = useState<ApiResponse>(initialContext);

  const providerValue = useMemo(
    () => ({ ...books, updateBooks }),
    [books, updateBooks],
  );

  return (
    <BooksContext.Provider value={providerValue}>
      {children}
    </BooksContext.Provider>
  );
}

export default function useBooks() {
  return useContext(BooksContext);
}
