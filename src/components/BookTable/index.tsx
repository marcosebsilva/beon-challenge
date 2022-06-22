import React, { useEffect, useCallback, useState } from 'react';
import { getAllBooks, getBooksByQuery } from '../../api/calls';
import useBooks from '../../context/BooksContext';
import Book from '../../interfaces/Book';
import useSearch from '../../context/SearchContext';
import * as Styled from './style';

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

  const tableHeads = ['Livro', 'Autor', 'Idioma', 'Ano', 'Acões'];

  return (
    <Styled.Wrapper>
      <Styled.DetailsModal
        isOpen={showModal}
        onRequestClose={() => toggleModal()}
      >
        <h1>
          Título:
          {' '}
          {modalData?.title}
        </h1>
        <h3>
          Autor:
          {' '}
          <mark>{modalData?.author}</mark>
        </h3>
        <h3>
          País:
          {' '}
          <mark>{modalData?.country}</mark>
        </h3>
        <h3>
          Ano:
          {' '}
          <mark>{modalData?.year}</mark>
        </h3>
        <h3>
          Páginas:
          {' '}
          <mark>{modalData?.pages}</mark>
        </h3>
        <h3>
          Língua:
          {' '}
          <mark>{modalData?.language}</mark>
        </h3>
        <h3>
          Link:
          {' '}
          <a href={modalData?.link} target="_blank" rel="noreferrer">{modalData?.link}</a>
        </h3>
      </Styled.DetailsModal>
      <Styled.Table data-testid="table">
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
                <Styled.ToggleModal
                  role="button"
                  data-testid="show-modal"
                  tabIndex={0}
                  onKeyDown={() => toggleModal(book)}
                  onClick={() => toggleModal(book)}
                >
                  Detalhes
                </Styled.ToggleModal>
              </td>
            </tr>
          ))}
        </tbody>
      </Styled.Table>
    </Styled.Wrapper>
  );
}
