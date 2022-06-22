import React, { useContext, useMemo, useState } from 'react';
import ApiOptions from '../interfaces/ApiOptions';

export type updateSearchType = (newValue: Partial<ApiOptions>) => void

interface SearchContextValue extends ApiOptions {
  updateSearch: updateSearchType
}
const initialContext: SearchContextValue = {
  page: 1,
  limit: 10,
  updateSearch: () => {
    throw new Error('updateSearch function must be overridden');
  },
};

const SearchContext = React.createContext<SearchContextValue>(initialContext);

export function SearchProvider({ children }: React.PropsWithChildren) {
  const [searchParameters, setSearchParameters] = useState<SearchContextValue>(initialContext);

  const updateSearch = (newValue: Partial<ApiOptions>) => {
    setSearchParameters((prev) => ({ ...prev, ...newValue }));
  };

  const providerValue = useMemo(
    () => ({ ...searchParameters, updateSearch }),
    [searchParameters, updateSearch],
  );

  return (
    <SearchContext.Provider value={providerValue}>
      {children}
    </SearchContext.Provider>
  );
}

export default function useSearch() {
  return useContext(SearchContext);
}
