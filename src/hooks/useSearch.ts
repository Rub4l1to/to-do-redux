import React, { ChangeEvent, useRef, useCallback } from 'react';

//* Redux
import { useAppDispatch } from 'redux/hooks';
//---- Actions
import { searchItem } from 'redux/slices/todos';

interface Response {
  onQueryChanged: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const useSearch = (): Response => {
  const dispatch = useAppDispatch();
  const debounceRef = useRef<NodeJS.Timeout>();

  const onQueryChanged = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => dispatch(searchItem(query)), 500);
  }, []);

  return {
    onQueryChanged,
  };
};
