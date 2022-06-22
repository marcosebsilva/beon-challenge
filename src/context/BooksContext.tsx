import React, { useContext, useMemo, useState } from 'react';
import ApiResponse from '../interfaces/ApiResponse';
import BooksContextValue from '../interfaces/BooksContextValue';

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
