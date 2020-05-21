import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import { todoListFilterState } from 'atoms';

const FiltersWrapper = styled.div`
  margin-bottom: 15px;
  select {
    margin-left: 20px;
  }
`;

export default function TodoListFilters() {
  const [filter, setFilter] = useRecoilState<string>(todoListFilterState);

  function updateFilter(event: any) {
    setFilter(event.target.value);
  }

  return (
    <FiltersWrapper>
      Choose a filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </FiltersWrapper>
  );
}
