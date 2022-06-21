import React, { useEffect, useCallback, useState } from 'react';
import Modal from 'react-modal';
import { getAllBooks, getBooksByQuery } from '../../api/calls';
import useBooks from '../../context/BooksContext';
import Book from '../../interfaces/Book';
import useSearch from '../../context/SearchContext';

export default function BookTable() {
  const { updateBooks, books } = useBooks();
  const options = useSearch();
  const [modalData, setModalData] = useState<Book | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = (book: Book | null = null) => {
    setModalData(book);
    setShowModal((prev) => !prev);
  };

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
    <>
      <Modal
        isOpen={showModal}
        onRequestClose={() => toggleModal()}
      >
        <h1>{modalData?.author}</h1>
        <h2>{modalData?.link}</h2>
      </Modal>
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
                  onKeyDown={() => toggleModal(book)}
                  onClick={() => toggleModal(book)}
                >
                  Detalhes
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
