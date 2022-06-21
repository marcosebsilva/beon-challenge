import React, { useMemo } from 'react';
import useBooks from '../../context/BooksContext';
import useSearch from '../../context/SearchContext';
import * as Styled from './style';

interface ActivePageObject {
  selected: number,
}
export default function PageController() {
  const { totalCount } = useBooks();
  const { limit, updateSearch } = useSearch();

  const numberOfPages = useMemo(() => Math.ceil(totalCount / limit), [totalCount]);
  const handlePageClick = ({ selected }: ActivePageObject) => {
    updateSearch({ page: selected + 1 });
  };

  return (
    <Styled.Pagination
      pageCount={numberOfPages}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      onPageChange={handlePageClick}
    />
  );
}
