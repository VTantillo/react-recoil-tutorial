import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';

import { todoListFilterState } from 'atoms/todo-list';

const FiltersWrapper = styled.div``;

export default function TodoListFilters() {
  const [filter, setFilter] = useRecoilState<string>(todoListFilterState);

  function updateFilter(event: any) {
    setFilter(event.target.value);
  }

  return (
    <FiltersWrapper>
      <h3>Filter:</h3>
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </FiltersWrapper>
  );
}
