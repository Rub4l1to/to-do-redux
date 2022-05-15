import React from 'react';

//* Hooks
import { useSearch } from 'hooks';

//* Styles
import * as Styled from './styles';

const Search = () => {
  const { onQueryChanged } = useSearch();

  return <Styled.Search onChange={onQueryChanged} placeholder="Search.." />;
};

export default Search;
