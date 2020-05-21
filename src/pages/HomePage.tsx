import React from 'react';
import styled from 'styled-components';

import TodoList from 'components/TodoList';

const Wrapper = styled.div``;
export default function HomePage() {
  return (
    <Wrapper>
      <h1>Welcome Home Bitches</h1>
      <TodoList />
    </Wrapper>
  );
}
