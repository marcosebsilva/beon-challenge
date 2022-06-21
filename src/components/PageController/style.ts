import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const Pagination = styled(ReactPaginate)`
  width: 100%;
  max-width: 500px;
  margin: auto;
  display: flex;
  padding-left: 0;
  justify-content: center;
  border: 0.5px solid white;
  border-radius: 5px;
  background-color: #CBC3E3;

  li {
    cursor: pointer;
    text-align: center;
    padding: 5px;
    width: 100px;
    height: 100%;
    &:hover {
      background-color: purple;
      color: white;
    }
  }

  .selected {
    color: white;
    background: purple;
  }
`;

export const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;

export const Label = styled.label`
  display: inline;
  input {
    background-color: white;
    max-width: 30px;
    text-align: center;
    border-radius: 3px;
  }
`;

export const ErrorMsg = styled.span`
  color: red;
`;
