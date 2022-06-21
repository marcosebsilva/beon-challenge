import styled from 'styled-components';
import Modal from 'react-modal';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th {
    text-align: start;
    background-color: purple;
    color: white;
    padding: 5px;
    &:first-child {
      border-radius: 10px 0 0 0;
      border: none;
    }
    &:last-child {
      border-radius: 0 10px 0 0;
      border: none;
    }
  }

  td{
    border: 1px solid #ddd;
    padding: 5px;
  }

  tbody {
    tr {
      &:nth-child(even) {
        background-color: white;
      }
      &:hover {
        background-color: #CBC3E3;
      }
    }
  }
`;

export const ToggleModal = styled.span`
  color: blue;
  text-decoration: underline;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  @media(min-width: 600px) {
    padding-inline: 15vw;
  }
`;

export const DetailsModal = styled(Modal)`
  position: absolute;
  background-color: white;
  padding: 25px;
  border-radius: 5px;
  border: 1px solid #ddd;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  mark {
    background-color: transparent;
    font-weight: 300;
  }
`;
