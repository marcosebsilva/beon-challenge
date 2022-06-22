import React, { useEffect, useCallback } from 'react';
import BookTable from './components/BookTable';
import Header from './components/Header';
import PageController from './components/PageController';
import useBooks from './context/BooksContext';
import useSearch from './context/SearchContext';
import { getAllBooks, getBooksByQuery } from './api/calls';

function App() {
  const { updateBooks, books, totalCount } = useBooks();
  const options = useSearch();

  const handleUpdateOptions = useCallback(async () => {
    try {
      const { updateSearch, ...optionsWithoutUpdateFunction } = options;
      if (options.q || options.year_gte !== undefined || options.year_lte !== undefined) {
        const result = await getBooksByQuery(optionsWithoutUpdateFunction);
        updateBooks(result);
      } else {
        const result = await getAllBooks(optionsWithoutUpdateFunction);
        updateBooks(result);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }, [options]);

  useEffect(() => {
    handleUpdateOptions();
  }, [options]);
  return (
    <>
      <Header updateSearch={options.updateSearch} totalCount={totalCount} />
      <BookTable books={books} />
      <PageController
        limit={options.limit}
        page={options.page}
        totalCount={totalCount}
        updateSearch={options.updateSearch}
      />
    </>
  );
}

export default App;
