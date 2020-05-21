import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { todoListStatsState } from 'atoms/todo-list';

const StatsWrapper = styled.ul``;

export default function TodoListStats() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } = useRecoilValue<
    any
  >(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <StatsWrapper>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </StatsWrapper>
  );
}
