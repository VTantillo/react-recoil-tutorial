import React from 'react';
import styled from 'styled-components';

import TodoList from 'components/TodoList';

const Wrapper = styled.div`
  height: 100vh;
  width: 80vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1,
  h3 {
    text-align: center;
  }
`;

const Header = styled.div``;
export default function HomePage() {
  return (
    <Wrapper>
      <Header>
        <h1>Todo List Tutorial</h1>
        <p>This is an example application from the tutorial for recoil implemented in typescript</p>
      </Header>

      <TodoList />
    </Wrapper>
  );
}
