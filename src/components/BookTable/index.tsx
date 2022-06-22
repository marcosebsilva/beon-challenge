import React, { useState } from 'react';
import Book from '../../interfaces/Book';
import * as Styled from './style';

interface Props {
  books: Book[]
}

export default function BookTable({ books }: Props) {
  const [modalData, setModalData] = useState<Book | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = (book: Book | null = null) => {
    setModalData(book);
    setShowModal((prev) => !prev);
  };

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
