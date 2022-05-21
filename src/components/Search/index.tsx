import React, { FC } from 'react';

//* Hooks
import { useSearch } from 'hooks';

//* Styles
import * as Styled from './styles';

export const Search: FC = () => {
  const { onQueryChanged } = useSearch();

  return <Styled.Search onChange={onQueryChanged} placeholder="Search.." />;
};
