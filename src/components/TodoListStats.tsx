import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { todoListStatsState } from 'atoms';
import { ListStats } from 'models';

const StatsWrapper = styled.div`
  li {
    list-style-type: none;
  }
`;

export default function TodoListStats() {
  const stats = useRecoilValue<ListStats>(todoListStatsState);

  const formattedPercentCompleted = Math.round(stats.percentCompleted * 100);

  return (
    <StatsWrapper>
      <h3>Todo List Stats:</h3>
      <ul>
        <li>Total items: {stats.totalNum}</li>
        <li>Items completed: {stats.totalCompletedNum}</li>
        <li>Items not completed: {stats.totalUncompletedNum}</li>
        <li>Percent completed: {formattedPercentCompleted}</li>
      </ul>
    </StatsWrapper>
  );
}
