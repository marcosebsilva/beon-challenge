import React, { useState, ChangeEvent, FormEvent } from 'react';
import useBooks from '../../context/BooksContext';
import useSearch from '../../context/SearchContext';

function Header() {
  const { updateSearch } = useSearch();
  const [query, setQuery] = useState<string>('');
  const { totalCount } = useBooks();

  const handleInputQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateSearch({ q: query });
  };

  const handleMinYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateSearch({ year_gte: Number(e.target.value) });
  };

  const handleMaxYearChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateSearch({ year_lte: Number(e.target.value) });
  };

  return (
    <header data-testid="header">
      <section>
        <span>Icone</span>
        <form onSubmit={handleSubmit}>
          <input
            data-testid="input-query"
            placeholder="Busque livros pelo autor, título ou idioma"
            onChange={handleInputQueryChange}
            value={query}
          />
          <button
            type="submit"
            data-testid="query-button"
          >
            Buscar
          </button>
        </form>
      </section>
      <section>
        <input
          data-testid="min-year"
          type="number"
          onChange={handleMinYearChange}
        />
        <input
          data-testid="max-year"
          type="number"
          onChange={handleMaxYearChange}
        />
        <h3 data-testid="result-count">
          {totalCount}
          {' '}
          resultados encontrados
        </h3>
      </section>
    </header>
  );
}

export default Header;
