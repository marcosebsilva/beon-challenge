import styled from 'styled-components';

export const Wrapper = styled.header`
  background-color: white;
  padding-inline: 10px;
  padding-bottom: 10px;
  color: #8C6BAA;
  margin-bottom: 20px;
  @media(min-width: 600px) {
    padding-inline: 15vw;
  }
`;

export const TopSection = styled.section`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  margin-bottom: 10px;
  img {
  /* this fix the natural image padding */
    position: relative;
    right: 20px;
    max-width: 150px;
    cursor: pointer;
  }
`;

export const BottomSection = styled.section`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
  label {
    display: flex;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
  }
  input {
    max-width: 130px;
  }

  h3 {
    font-size: 0.8rem;
    text-align: center;
    @media(min-width: 600px) {
      font-size: 1rem;
    }
  }
`;

export const Form = styled.form`
  gap: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  input {
    font-size: 0.8rem;
    padding-left: 5px;
    width: 35vw;
    max-width: 300px;
  }
  button {
    background-color: white;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
    color: purple;
    height: 30px;
    transition: 200ms;
    border-radius: 3px;
    &:hover {
      background-color: purple;
      color: white;
    }
  }
`;
