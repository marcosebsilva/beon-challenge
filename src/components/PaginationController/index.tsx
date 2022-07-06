import React, { useMemo, ChangeEvent, useState } from 'react';
import ApiOptions from '../../types/ApiOptions';
import * as Styled from './style';
import UpdateSearchFunction from '../../types/UpdateSearchFunction';

interface ActivePageObject {
  selected: number,
}

interface PaginationControllerProps {
  limit: number,
  page: number,
  totalCount: number,
  updateSearch: UpdateSearchFunction
  searchOptions: ApiOptions,
}

export default function PaginationController({
  limit, page, totalCount, updateSearch, searchOptions,
}: PaginationControllerProps) {
  const [limitError, setLimitError] = useState<{show: boolean, msg: string}>({
    show: false,
    msg: '',
  });

  const numberOfPages = useMemo(() => Math.ceil(totalCount / limit), [totalCount, limit]);
  const currentPage = useMemo(() => page - 1, [page]);

  const handlePageClick = ({ selected }: ActivePageObject) => {
    updateSearch({
      ...searchOptions,
      page: selected + 1,
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newLimit = Number(e.target.value);
    if (newLimit < 5) {
      setLimitError({
        show: true,
        msg: 'Quantidade mínima permitida é 5.',
      });
      updateSearch({
        ...searchOptions,
        limit: 5,
      });
    } else if (newLimit > 50) {
      setLimitError({
        show: true,
        msg: 'Quantidade máxima permitida é 50.',
      });
      updateSearch({
        ...searchOptions,
        limit: 50,
      });
    } else {
      setLimitError({ show: false, msg: '' });

      updateSearch({
        ...searchOptions,
        limit: newLimit,
      });
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
      {limitError.show && <Styled.ErrorMsg data-testid="pagination-errorMsg">{limitError.msg}</Styled.ErrorMsg>}
    </Styled.Wrapper>
  );
}
