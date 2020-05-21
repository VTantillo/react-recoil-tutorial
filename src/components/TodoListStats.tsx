import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { todoListStatsState } from 'atoms';

const StatsWrapper = styled.div`
  li {
    list-style-type: none;
  }
`;

export default function TodoListStats() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } = useRecoilValue<
    any
  >(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <StatsWrapper>
      <h3>Todo List Stats:</h3>
      <ul>
        <li>Total items: {totalNum}</li>
        <li>Items completed: {totalCompletedNum}</li>
        <li>Items not completed: {totalUncompletedNum}</li>
        <li>Percent completed: {formattedPercentCompleted}</li>
      </ul>
    </StatsWrapper>
  );
}
