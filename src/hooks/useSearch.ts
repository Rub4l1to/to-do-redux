import React, { ChangeEvent, useRef, useCallback, useContext } from 'react';

//* Context

export const useSearch = () => {
  const debounceRef = useRef<NodeJS.Timeout>();

  const onQueryChanged = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    debounceRef.current = setTimeout(() => console.log(query), 500);
  }, []);

  return {
    onQueryChanged,
  };
};
