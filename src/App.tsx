import React, { useEffect, useCallback, useState } from 'react';
import BookTable from './components/BookTable';
import Header from './components/Header';
import PageController from './components/PaginationController';
import getBooks from './api/calls';
import ApiOptions from './types/ApiOptions';
import ApiResponse from './types/ApiResponse';

function App() {
  const [{ books, totalCount }, updateBooks] = useState<ApiResponse>({ books: [], totalCount: 0 });
  const [searchOptions, setSearchOptions] = useState<ApiOptions>({
    limit: 10,
    year_gte: null,
    page: 1,
  });

  const handleUpdateOptions = useCallback(async () => {
    try {
      const result = await getBooks(searchOptions);
      updateBooks(result);
    } catch (error) {
      alert("Can't connect to jsonwebserver.");
      throw error;
    }
  }, [searchOptions]);

  useEffect(() => {
    handleUpdateOptions();
  }, [searchOptions]);
  return (
    <>
      <Header
        updateSearch={setSearchOptions}
        searchOptions={searchOptions}
        totalCount={totalCount}
      />
      <BookTable
        books={books}
      />
      <PageController
        searchOptions={searchOptions}
        limit={searchOptions.limit}
        page={searchOptions.page}
        totalCount={totalCount}
        updateSearch={setSearchOptions}
      />
    </>
  );
}

export default App;
