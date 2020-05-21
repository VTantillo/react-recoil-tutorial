import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { filteredTodoListSate } from 'atoms';

import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import TodoListStats from './TodoListStats';
import TodoListFilters from './TodoListFilters';

const ListWrapper = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-evenly;
`;
const List = styled.div``;

export default function TodoList() {
  const todoList = useRecoilValue<any[]>(filteredTodoListSate);

  return (
    <ListWrapper>
      <TodoListStats />

      <List>
        <h3>Todo List: </h3>
        <TodoListFilters />
        <TodoItemCreator />
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </List>
    </ListWrapper>
  );
}
