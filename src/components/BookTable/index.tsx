import React, { useEffect, useCallback } from 'react';
import { getAllBooks, getBooksByQuery } from '../../api/calls';
import useBooks from '../../context/BooksContext';
import useSearch from '../../context/SearchContext';

export default function BookTable() {
  const { updateBooks, books } = useBooks();
  const options = useSearch();

  const handleUpdateOptions = useCallback(async () => {
    try {
      const { updateSearch, ...optionsWithoutUpdateFunction } = options;
      if (options.q || options.year_gte || options.year_lte) {
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

  const tableHeads = ['Livro', 'Autor', 'Idioma', 'Ano', 'Acões'];

  return (
    <table data-testid="table">
      <thead>
        <tr>
          {tableHeads.map((head) => <th data-testid="table-head" key={head}>{head}</th>)}
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.title}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.language}</td>
            <td>{book.year}</td>
            <td>
              <span
                role="button"
                data-testid="show-modal"
                tabIndex={0}
                // onKeyDown={() => toggleModal(book)}
                // onClick={() => toggleModal(book)}
              >
                Detalhes
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
