import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { filteredTodoListSate } from 'atoms/todo-list';

import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import TodoListStats from './TodoListStats';
import TodoListFilters from './TodoListFilters';

const ListWrapper = styled.div``;

export default function TodoList() {
  const todoList = useRecoilValue<any[]>(filteredTodoListSate);

  return (
    <ListWrapper>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </ListWrapper>
  );
}
