import ApiOptions from './ApiOptions';

export type updateSearchType = (newValue: Partial<ApiOptions>) => void

interface SearchContextValue extends ApiOptions {
  updateSearch: updateSearchType
}

export default SearchContextValue;
