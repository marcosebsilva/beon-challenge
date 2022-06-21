import React, { useMemo, ChangeEvent, useState } from 'react';
import useBooks from '../../context/BooksContext';
import useSearch from '../../context/SearchContext';
import * as Styled from './style';

interface ActivePageObject {
  selected: number,
}
export default function PageController() {
  const { totalCount } = useBooks();
  const { limit, updateSearch } = useSearch();
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const numberOfPages = useMemo(() => Math.ceil(totalCount / limit), [totalCount, limit]);

  const handlePageClick = ({ selected }: ActivePageObject) => {
    updateSearch({ page: selected + 1 });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newLimit = Number(e.target.value);
    if (newLimit < 5) {
      setShowError(true);
      setErrorMsg('Quantidade mínima permitida é 5.');
      updateSearch({ limit: 5 });
    } else if (newLimit > 50) {
      setShowError(true);
      setErrorMsg('Quantidade máxima permitida é 50.');
      updateSearch({ limit: 50 });
    } else {
      setErrorMsg('');
      setShowError(false);
      updateSearch({ limit: newLimit });
    }
  };

  return (
    <Styled.Wrapper>
      <Styled.Pagination
        pageCount={numberOfPages}
        marginPagesDisplayed={1}
        previousClassName="previousButton"
        nextClassName="nextButton"
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
      />
      <Styled.Label htmlFor="page-size-controller">
        Itens por pagina:
        {' '}
        <input
          id="page-size-controller"
          type="number"
          placeholder="10"
          onChange={handleChange}
        />
      </Styled.Label>
      {showError && <Styled.ErrorMsg>{errorMsg}</Styled.ErrorMsg>}
    </Styled.Wrapper>
  );
}
