import React, { useState, ChangeEvent, FormEvent } from 'react';
import ApiOptions from '../../types/ApiOptions';
import UpdateSearchFunction from '../../types/UpdateSearchFunction';
import beonLogo from '../../assets/images/beon-logo-roxo.png';
import * as Styled from './style';

interface HeaderProps {
  updateSearch: UpdateSearchFunction,
  totalCount: number,
  searchOptions: ApiOptions,
}

function Header({ updateSearch, totalCount, searchOptions }: HeaderProps) {
  const [query, setQuery] = useState<string>('');

  const handleInputQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateSearch({
      ...searchOptions,
      q: query === '' ? null : query,
    });
  };

  const handleMinYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateSearch({
      ...searchOptions,
      year_gte: e.target.value === '' ? null : Number(e.target.value),
    });
  };

  const handleMaxYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateSearch({
      ...searchOptions,
      year_lte: e.target.value === '' ? null : Number(e.target.value),
    });
  };

  const resetSearchParameters = () => {
    updateSearch({
      year_gte: null,
      year_lte: null,
      q: query === '' ? null : query,
      page: 1,
      limit: 10,
    });
  };

  return (
    <Styled.Wrapper data-testid="header">
      <Styled.TopSection>
        <div
          onClick={resetSearchParameters}
          role="button"
          tabIndex={0}
        >
          <img src={beonLogo} alt="Icone da Beon" />
        </div>
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
