/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const Pagination = styled(ReactPaginate)`
  display: flex;
  li {
    cursor: pointer;
    padding: 5px;
    height: 100%;
    border: 0.5px solid rgba(0, 0, 0, 0.2);
    &:hover {
      background-color: purple;
    }
  }

  li:first-child {
    border-radius: 5px 0 0 5px;
  }

  li:last-child{
    border-radius: 0 5px 5px 0;
  }
  .selected {
    background: purple;
  }
`;
