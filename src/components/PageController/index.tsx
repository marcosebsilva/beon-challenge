import React, { useMemo, ChangeEvent, useState } from 'react';
import { updateSearchType } from '../../interfaces/SearchContextValue';
import * as Styled from './style';

interface ActivePageObject {
  selected: number,
}

interface Props {
  limit: number,
  page: number,
  totalCount: number,
  updateSearch: updateSearchType
}

export default function PaginationController({
  limit, page, totalCount, updateSearch,
}: Props) {
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const numberOfPages = useMemo(() => Math.ceil(totalCount / limit), [totalCount, limit]);
  const currentPage = useMemo(() => page - 1, [page]);

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
    <Styled.Wrapper
      data-testid="pagination-controller"
    >
      <Styled.Pagination
        pageCount={numberOfPages}
        marginPagesDisplayed={1}
        forcePage={currentPage}
        nextLabel="Próximo"
        previousLabel="Anterior"
        disabledClassName="disabled"
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
      />
      <Styled.Label htmlFor="pagination-limit-input">
        Itens por pagina:
        {' '}
        <input
          data-testid="pagination-limit-input"
          id="pagination-limit-input"
          type="number"
          placeholder="10"
          onChange={handleChange}
        />
      </Styled.Label>
      {showError && <Styled.ErrorMsg data-testid="pagination-errorMsg">{errorMsg}</Styled.ErrorMsg>}
    </Styled.Wrapper>
  );
}
