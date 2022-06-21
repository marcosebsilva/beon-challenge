import React, { useContext, useMemo, useState } from 'react';
import ApiOptions from '../interfaces/ApiOptions';

interface ContextValues extends ApiOptions {
  // eslint-disable-next-line no-unused-vars
  updateSearch(newValue: Partial<ApiOptions>): any;
}
const initialContext: ContextValues = {
  page: 1,
  limit: 10,
  updateSearch: () => {
    throw new Error('updateSearch function must be overridden');
  },
};

const SearchContext = React.createContext<ContextValues>(initialContext);

export function SearchProvider({ children }: React.PropsWithChildren) {
  const [searchParameters, setSearchParameters] = useState<ContextValues>(initialContext);

  const updateSearch = (newValue: Partial<ContextValues>) => {
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
