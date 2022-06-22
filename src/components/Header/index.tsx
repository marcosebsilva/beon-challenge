import React, { useState, ChangeEvent, FormEvent } from 'react';
import beonLogo from '../../assets/images/beon-logo-roxo.png';
import * as Styled from './style';
import { updateSearchType } from '../../context/SearchContext';

interface Props {
  updateSearch: updateSearchType
  totalCount: number,
}

function Header({ updateSearch, totalCount }: Props) {
  const [query, setQuery] = useState<string>('');

  const handleInputQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateSearch({ q: query, page: 1 });
  };

  const handleMinYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== '') {
      updateSearch({ year_gte: Number(e.target.value), page: 1 });
    } else {
      updateSearch({ year_gte: null, page: 1 });
    }
  };

  const handleMaxYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateSearch({ year_lte: Number(e.target.value), page: 1 });
    if (e.target.value !== '') {
      updateSearch({ year_lte: Number(e.target.value), page: 1 });
    } else {
      updateSearch({ year_lte: null, page: 1 });
    }
  };

  return (
    <Styled.Wrapper data-testid="header">
      <Styled.TopSection>
        <img src={beonLogo} alt="Icone da Beon" />
        <Styled.Form onSubmit={handleSubmit}>
          <input
            data-testid="input-query"
            placeholder="Autor, título ou idioma"
            onChange={handleInputQueryChange}
            value={query}
          />
          <button
            type="submit"
            data-testid="query-button"
          >
            Buscar
          </button>
        </Styled.Form>
      </Styled.TopSection>
      <Styled.BottomSection>
        <label htmlFor="min-year">
          Ano minimo:
          <input
            id="min-year"
            data-testid="min-year"
            type="number"
            onChange={handleMinYearChange}
          />
        </label>
        <label htmlFor="max-year">
          Ano maximo:
          <input
            id="max-year"
            data-testid="max-year"
            type="number"
            onChange={handleMaxYearChange}
          />
        </label>
        <h3 data-testid="result-count">
          {totalCount}
          {' '}
          resultados encontrados
        </h3>
      </Styled.BottomSection>
    </Styled.Wrapper>
  );
}

export default Header;
